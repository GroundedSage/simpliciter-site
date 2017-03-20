(ns site.static
  (:require [rum.core :as rum]
            [site.app :as app]
            [site.components :refer [my-routes]]
            [clojure.string :as str]
            [clojure.java.io :as io]
            [boot.core :as c]
            [site.styler :as styler]

            [bidi.bidi :refer [path-for route-seq]]
            [boot.core :refer [deftask
                               tmp-dir!
                               commit!
                               add-resource
                               with-pre-wrap
                               input-files
                               by-name
                               tmp-file
                               empty-dir!
                               tmp-path]]))



(defn gather-routes
  "Gathers all generated routes and emits the keyword of each route."
  []
  (->> (route-seq my-routes)
       (map #(first %))
       (map #(conj [] %))
       (map #(into {} %))
       (map #(:handler %))
       (into #{})))

(defn route-content
  "Takes a route and renders the corresponding markup"
  [route]
  (case route
    :index      (rum/render-static-markup (app/home))))

(defn get-path [route]
  "Catches edge cases regarding getting the route path"
  (cond
    (= :not-found route) "404.html"
    (str/ends-with? (path-for my-routes route) "/") (str (subs (path-for my-routes route) 1) "index.html")
    :else (str (subs (path-for my-routes route) 1) ".html")))







(deftask string-template
  "Takes the template file and replaces placeholder text with the page content and changes file name"
  [f template-file VALUE str "Name of the template file to use"
   t target-file VALUE str "Name of the output file to produce"
   p placeholder VALUE str "The placeholder to recognize and replace"
   c content VALUE str "Content to replace placeholder with"]
  (with-pre-wrap [fs]
    (let [tmpd (tmp-dir!)]
      (if-let [template-file (some->> (input-files fs)
                                      (by-name [template-file])
                                      first
                                      tmp-file)]
        (let [template-content   (slurp template-file)
              output-file        (doto (io/file tmpd target-file) io/make-parents)
              quoted-placeholder (java.util.regex.Pattern/quote placeholder)]
          (spit output-file (.replaceAll template-content quoted-placeholder content))
          (-> fs
              (add-resource tmpd)
              commit!))
        (throw (ex-info "No template file found" {:opts *opts*}))))))


(deftask make-page
  [r route VAL kw "Route of page"
   t template-file NAME str "Name of the template file to use, default is template.html"]
  (let [url (get-path route)]
    (string-template :template-file (or template-file "template.html")
                     :target-file url
                     :placeholder "{{CONTENT}}"
                     :content (route-content route))))


(deftask make-pages []
  (reduce comp identity (map #(make-page :route %) (gather-routes))))
