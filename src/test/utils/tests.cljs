(ns test.utils.tests
  (:require
    [cljs.core.async     :refer [chan >! <! take! put! close! promise-chan
                                 timeout]
                         :refer-macros [go alt!]]
    [ajax.core           :refer [GET POST]]
    [cljs.test           :refer-macros [async deftest is are testing run-tests]]
    [cljs.reader         :refer [read-string]]
    [test.fixtures.core  :refer [test-async]]
    [census.utils.core   :refer [deep-reverse-MAP-NODES
                                 deep-linked-map
                                 map-rename-keys
                                 map-over-keys
                                 keys->strs
                                 strs->keys
                                 ->args
                                 args->js
                                 xf<<
                                 xf!<<
                                 educt<<
                                 map-target
                                 map-target-idcs
                                 map-idcs-range
                                 $GET$
                                 I-<I=
                                 =O?>-cb
                                 Icb-<IO?=
                                 $GET$-json
                                 $GET$-edn]]))

(deftest deep-reverse-MAP-NODES-test
  (is (= (deep-reverse-MAP-NODES {:i 7 :c {:e {:h 6 :g 5 :f 4} :d 3} :a {:b 2}})
         {:a {:b 2} :c {:d 3 :e {:f 4 :g 5 :h 6}} :i 7})))

; Rationalle: Inside a go-block, it seems that any map literals are immediately
; changed into `hash-map`, so the only way to preserve an `array-map` is to
; `let` bind the args into a variable before invoking the go-block

(deftest deep-linked-map-test
  (is (= (read-string
           (pr-str
             (deep-linked-map {:i 7 :c {:e {:h 6 :g 5 :f 4} :d 3} :a {:b 2}})))
         (read-string
           "#linked/map[[:i 7]
                        [:c #linked/map[[:e #linked/map[[:h 6] [:g 5] [:f 4]]] [:d 3]]]
                        [:a #linked/map[[:b 2]]]]"))))

(deftest map-rename-keys-test
  (is (= (map-rename-keys name {:a "b" :c "d"})
         {"a" "b", "c" "d"})))

(deftest map-over-keys-test
  (is (= (map-over-keys inc {:a 1 :b 2})
         {:a 2 :b 3})))

(deftest keys->strs-test
  (is (= (keys->strs (name :american-indian-area!alaska-native-area-_reservation-or-statistical-entity-only_-_or-part_))
         "american indian area/alaska native area (reservation or statistical entity only) (or part)")))

(deftest strs->keys-test
  (is (= (keyword
          (strs->keys "american indian area/alaska native area (reservation or statistical entity only) (or part)"))
         :american-indian-area!alaska-native-area-_reservation-or-statistical-entity-only_-_or-part_))
  (is (= (mapv strs->keys ["B01001_001E"
                           "NAME"
                           "B00001_001E"
                           "state"
                           "state legislative district (upper chamber)"])
         ["B01001_001E"
          "NAME"
          "B00001_001E"
          "state"
          "state-legislative-district-_upper-chamber_"])))

(deftest $GET$-test
  (let [=url= (chan 1)
        =res= (chan 1)
        =err= (chan 1)]
    (test-async
      (go (>! =url= "https://api.census.gov/data/2016/acs/acs5/variables/NAME.json")
          (($GET$ :json "nope") =url= =res= =err=)
          (close! =url=)
          (is (= (<! =res=)
                 {:name "NAME",
                  :label "Canonical Name for Geography",
                  :group "N/A",
                  :limit 0}))
          (close! =err=)
          (close! =res=)))))

(deftest $GET$-json-ok-test
  (let [=url= (chan 1)
        =res= (chan 1)
        =err= (chan 1)]
    (test-async
      (go (>! =url= "https://api.census.gov/data/2016/acs/acs5/variables/NAME.json")
          ($GET$-json =url= =res= =err=)
          (let [res (<! =res=)]
            (is (= res
                   {:name "NAME",
                    :label "Canonical Name for Geography",
                    :group "N/A",
                    :limit 0}))
            (>! =url= "https://api.census.gov/data/2016/acs/acs5/variables/NAME.json")
            ($GET$-json =url= =res= =err=)
            (is (identical?
                  (<! =res=)
                  res))
            (close! =url=)
            (close! =err=)
            (close! =res=))))))

(deftest $GET$-json-err-test
  (let [=url= (chan 1)
        =res= (chan 1)
        =err= (chan 1)]
    (test-async
      (go (>! =url= "/data/bad.json")
          ($GET$-json =url= =res= =err=)
          (let [err (<! =err=)]
            (prn err)
            (is (= err
                   "ERROR status: 0 Request failed. for URL /data/bad.json ... output empty `{}`"))
            (>! =url= "/data/bad.json")
            ($GET$-json =url= =res= =err=)
            (is (identical?
                  (<! =err=)
                  err))
            (close! =url=)
            (close! =err=)
            (close! =res=))))))


(deftest =O?>-cb-test
  (let [=I= (chan 1)
        =O= (chan 1)
        =E= (chan 1)
        $r$ (atom "") ; needed for test result evaluation
        tfn (fn [=I= =O= =E=] (go (>! =O= (<! =I=))))
        Efn (fn [=I= =O= =E=] (go (>! =E= (<! =I=))))
        tcb (fn [E O] (if-let [err E]
                        (reset! $r$ err)
                        (reset! $r$ O)))]
    (test-async
      (go (>! =I= "went through internal =O=")
          (=O?>-cb tfn tcb =I= =O= =E=)
          (<! (timeout 500))
          (is (= @$r$
                 "went through internal =O="))
          (>! =I= "error! from =E=")
          (=O?>-cb Efn tcb =I= =O= =E=)
          (<! (timeout 500))
          (is (= @$r$
                 "error! from =E="))
          (close! =I=)
          (close! =O=)
          (close! =E=)))))

; TODO:

#_(args->js  {:vintage "2010",
              :values ["H001001" "NAME"],
              :sourcePath ["dec" "cd113"],
              :geoHierarchy {:american-indian-area!alaska-native-area-_reservation-or-statistical-entity-only_-_or-part_ "R",
                             :state "01",
                             :county-subdivision "93"
                             :congressional-district "01",
                             :american-indian-area!alaska-native-area!hawaiian-home-land-_or-part_ "2865"}})


; FIXME: delete?

(deftest cb-<-$GET$-json-test
  (let [=url= (chan 1)
        =res= (chan 1)
        =err= (chan 1)
        $r$ (atom "")
        tcb (fn [E O] (if-let [err E]
                        (reset! $r$ err)
                        (reset! $r$ O)))]
    (test-async
      (go (>! =url= "https://api.census.gov/data/2016/acs/acs5/variables/NAME.json")
          (=O?>-cb $GET$-json tcb =url= =res= =err=)
          (<! (timeout 500))
          (is (= @$r$
                 {:name "NAME",
                  :label "Canonical Name for Geography",
                  :group "N/A",
                  :limit 0}))
          (close! =url=)
          (close! =err=)
          (close! =res=)))))


(run-tests)





















