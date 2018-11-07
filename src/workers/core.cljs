(ns workers.core
  (:refer-clojure :exclude [resolve])
  (:require
    [cljs.core.async :as <|]
    [cljs.core.async.impl.protocols :as impl]
    [cljs.core.async.impl.dispatch :as dispatch]
    [cljs-promises.core]
    [cljs-promises.async :as <3]
    [test.core :as ts]
    [utils.core :as ut]
    ["workerpool" :as ||>]
    [oops.core :as ob]
    ["aa_logan" :as logan]))
    ;["/dist/test.js" :refer (supercalifragilistic)]))

#_(js/console.log (fs/readFileSync "./dist/test.js"))

(js/console.log logan)

(prn supercalifragilistic)
;TODO: working with `oops` js classes w/methods: https://github.com/binaryage/cljs-oops/issues/10

#_(js/console.log ||>)

; =>
;  { pool: [Function: pool],
;  worker: [Function: worker],
;  Promise:
;  { [Function: Promise]
;  all: [Function],
;  defer: [Function],
;  CancellationError: [Function: CancellationError],
;  TimeoutError: [Function: TimeoutError] },
;  platform: 'node',
;  isMainThread: true,
;  cpus: 4}

(def w-pool (ob/ocall ||> ["pool"])) ;"prototype"]))) ; See: https://youtu.be/XfzXFWTT-z0?t=945

(defn w-exec [js-fn args] (ob/ocall w-pool ["exec"] js-fn args))

(def terminate (ob/ocall w-pool ["terminate"]))

#_(js/console.log w-pool)
#_(js/console.log w-exec)
#_(js/console.log terminate)

(defn ^:export supercalifragilistic [& args] (apply + args))

#_(-> (w-exec workers.core.add #js[1 2])
      (.then (fn [fulfilled] (js/console.log fulfilled)))
      (.catch (fn [error]    (js/console.log error)))
      (.then (fn []          (terminate))))



(defn exec [js-fn args] (ob/ocall w-pool "exec" js-fn args))

#_(defn pool-port
    "Returns a ReadPort which sends [value nil] when `promise` fulfills, and [nil error]
  when `promise` rejects."
    [promise]
    (reify
      impl/ReadPort
      (take! [_ handler]
             (-> (.then promise
                       (fn [val]
                           (dispatch/run #((impl/commit handler) [val nil])))
                       (fn [err]
                           (dispatch/run #((impl/commit handler) [nil err]))))
                 (.then terminate))
        nil)))

#_(defn =IO<-js-<3-fn
    [<3-fn]
    (fn [=I= =O=]
      (<|/go (let [[val err] (<|/<! (pool-port (<3-fn (<|/<! =I=))))]
               (if (= val nil)
                   (<|/>! =O= err)
                   (<|/>! =O= (js->clj val)))))))


#_(let [args #js[3 5]
        =I= (<|/chan 1 (map clj->js))
        =O= (<|/chan 1 (map ut/throw-err))]
       (<|/go (<|/>! =I= [add args])
              ((ut/=IO<-js-<3-fn exec) =I= =O=)
              (prn (<|/<! =O=))
              (<|/close! =I=)
              (<|/close! =O=)))

#_(defn js-I=O<<=IO=
    "
  Adapter, which wraps asynchronous I/O ports input to provide a synchronous
  input, which converts values from =I= channel to js arguments. Created
  initially for async js library (e.g., `workerpool`) interop.
  "
    [f]                            ; takes an async I/O function
    (fn [I =O= ?state]             ; returns a function with a sync input / `chan` output
      (let [=I= (<|/chan 1)
            js-args (clj->js I)]       ; create internal `chan`
           (<|/go (<|/>! =I= js-args)       ; put sync `I` into `=I=`
                  (f =I= =O= ?state)  ; call the wrapped function with the newly created `=I=`
                  (<|/close! =I=))))) ; close the port to flush out values

#_(defn test-promise
    [?happy?]
    (js/Promise. (fn [resolve reject]
                   (let [answer "This promise was "]
                        (if (= ?happy? "happy")
                            (resolve (str answer "resolved!"))
                            (reject  (js/Error. (str answer "rejected :("))))))))


#_(-> (test-promise "happy")
      (.then (fn [fulfilled] (prn fulfilled))))

#_(-> (test-promise "poop")
      (.then (fn [fulfilled] (js/console.log fulfilled)))
      (.catch (fn [error]    (js/console.log error))))



#_(let [=O= (<|/chan 1 (map throw-err))]
    (<|/go ((js-I=O<<=IO= (=IO<-js-<3-fn test-promise)) "happy" =O=)
           (prn (<|/<! =O=))
           (<|/close! =O=)))
