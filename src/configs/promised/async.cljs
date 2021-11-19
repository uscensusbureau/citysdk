(ns configs.promised.async
  (:require [cljs.core.async :as async]
            [cljs.core.async.impl.protocols :as impl]
            [cljs.core.async.impl.dispatch :as dispatch]
            [configs.promised.core]))

(defn extend-promises-as-channels!
  "If you want, you can globally extend Promise to act as a one-way channel which
  can only be taken from, and which starts producing a never-ending stream of constants
  once the promise resolves. `value-transform` and `error-transform` are functions
  which are applied to the value or error when the Promise resolves or rejects.
  Both `value-transform` and `error-transform` default to identity. Takes an optional
  `promise-constructor` to extend, defaulting to `js/Promise`."
  ([]
   (extend-promises-as-channels! identity))
  ([value-transform]
   (extend-promises-as-channels! value-transform identity))
  ([value-transform error-transform]
   (extend-promises-as-channels! value-transform error-transform js/Promise))
  ([value-transform error-transform promise-constructor]
   (extend-type promise-constructor
     impl/ReadPort
     (take! [promise handler]
       (.then promise
              ;; `cljs.core.async.impl.dispatch/run` runs the handler in the next
              ;; run of the event loop, making it possible here for errors avoid
              ;; promises' error capturing. Otherwise, errors from the promise can
              ;; never escape `go` blocks.
              (fn [val]
                (dispatch/run #((impl/commit handler) (value-transform val))))
              (fn [err]
                (dispatch/run #((impl/commit handler) (error-transform err)))))
       nil) ;; return nil to say "we're waiting on the value"
     impl/Channel
     (close! [_]))))

(defn extend-promises-as-pair-channels!
  "Globally extends Promises with `extend-promises-as-channels!` such that the
  values taken from them are vector pairs of [value nil] in the case of fulfillment,
  or [nil error] in the case of rejection. Takes an optional `promise-constructor`
  to extend, defaulting to `js/Promise`."
  ([]
   (extend-promises-as-pair-channels! js/Promise))
  ([promise-constructor]
   (extend-promises-as-channels! (fn [val] [val nil])
                                 (fn [err] [nil err])
                                 promise-constructor)))

(defn consume-pair
  "When passed a [value nil] pair, returns value. When passed a [nil error] pair,
  throws error. See also `cljs-promises.async/<?`."
  [[val err]]
  (if err
    (throw err)
    val))

(defn value-port
  "Wraps a promise and returns a ReadPort (a read-only channel-like). When the
  promise fulfills with a value, that value is sent constantly on the channel
  (the value might be nil). When the promise rejects with an error, nil is sent
  constantly."
  [promise]
  (reify
    impl/ReadPort
    (take! [_ handler]
      (.then promise
             (fn [val]
               (dispatch/run #((impl/commit handler) val)))
             (fn [_]
               (dispatch/run #((impl/commit handler) nil))))
      nil)))

(defn error-port
  "The reverse of `value-port`, passing along errors when `promise` rejects and sending
  nils when `promise` fulfills with a value."
  [promise]
  (reify
    impl/ReadPort
    (take! [_ handler]
      (.then promise
             (fn [_]
               (dispatch/run #((impl/commit handler) nil)))
             (fn [err]
               (dispatch/run #((impl/commit handler) err))))
      nil)))

(defn pair-port
  "Returns a ReadPort which sends [value nil] when `promise` fulfills, and [nil error]
  when `promise` rejects."
  [promise]
  (reify
    impl/ReadPort
    (take! [_ handler]
      (.then promise
             (fn [val]
               (dispatch/run #((impl/commit handler) [val nil])))
             (fn [err]
               (dispatch/run #((impl/commit handler) [nil err]))))
      nil)))


(defn take-as-promise!
  "Waits for the next value from `ch` and returns a promise of that value."
  [ch]
  (configs.promised.core/promise (fn [resolve _]
                                   (async/take! ch resolve))))