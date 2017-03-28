(ns site.app
  #?(:cljs (:require-macros  [site.styler :refer [css at-media get-css-str]]))
  (:require [rum.core :as rum]
            [bidi.bidi :as b :refer [match-route path-for]]
            [site.index :as i]
            [site.components :refer [my-routes]]

            ;[site.styler :refer [installer-hack]]
            #?(:clj [site.styler :refer [css at-media get-css-str]])
            #?(:cljs [goog.style])



            #?(:cljs [site.navigation :refer [link current-token]])))


;
(rum/defc svg []
  [:svg  {:class [(css {:align-self "center"})
                  (at-media {:min-width "100rem"}
                          {:transform "translateX(-30vw)"})]
          :style {:min-width "15rem"
                  :max-width "20rem"}
          :height "25vmin"
          :width "40vw"
          :view-box "0 0 245 67"
          :id "logo"}
    [:use {:xlink-href (str "/svg/logo.svg#logo")}]])
;

(rum/defc main [content]
  "Enters content into main container with id=\"main\" "
  [:main#main content])

;; Site specific

(rum/defc hidden []
  [:span  {:hidden true} "This is hidden text"])




(defn get-route [url]
  (:handler (match-route my-routes url)))

;; define clojure version of link
#?(:clj (rum/defc link [link & content]
          [:a {:href link} content]))


;; NEED TO ASSOC "#MAIN" onto the current URL

(rum/defc navigation []
  [:nav
   [:ul
    [:li.order-middle (link (path-for my-routes :index)
                            [:span {:aria-hidden true} "Home"]
                            [:svg.home {:alt "site Logo Home"
                                        :viewBox "0 0 160 150"}
                             [:use {:xlink-href "/logo.svg#logo"}]])]
    [:li.order-front (link (path-for my-routes :veganism) [:span "Veganism"])]
    [:li.order-front   (link (path-for my-routes :consulting) [:span "Consulting"])]
    [:li.order-end (link (path-for my-routes :community) [:span "Community"])]
    [:li.order-end (link (path-for my-routes :about-us) [:span "About Us"])]]])





(rum/defc page-wrapper [content]
  [:div {:style {:background-image "url(\"/photos/bg.png\")"
                 :background-repeat "repeat"
                 :height "100%"}}
   [:div {:style {:background-image "url(\"/photos/bg.jpg\")"
                  :background-size "cover"
                  :background-repeat "no-repeat"
                  :height "100%"
                  :max-height "80vh"
                  :background-position "center"
                  :width "100%"
                  :position "absolute"}}
    (svg)]

   (main content)])


(rum/defc home []
  (page-wrapper (i/content)))





#?(:cljs
   (rum/defc page < rum/reactive []
     (let [token (rum/react current-token)]
       (case (get-route token)
         :index      (home)))))



#?(:cljs
   (do
     (defonce prev (volatile! nil))
     (when @prev
       (goog.style/uninstallStyles @prev))
     (vreset! prev (goog.style/installStyles (get-css-str false)))))

#?(:cljs
   (defn init []
     (rum/mount (page) (. js/document (getElementById "container")))))
