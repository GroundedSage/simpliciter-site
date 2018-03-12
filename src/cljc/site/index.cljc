(ns site.index
  #?(:cljs (:require-macros  [site.styler :refer [css at-media]]))
  (:require [rum.core :as rum]
            #?(:clj [site.styler :refer [css at-media get-css-str]])))


     ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
     ;;;;;;;;;   HOME PAGE SPECIFIC   ;;;;;;;;;;;;
     ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def qual-style {:class ["qual-style"
                         (css {:background-color "rgba(255,255,255,0.5)"
                               :border "solid rgb(200,200,200) 2px"
                               :border-radius "0.5rem"})
                         (at-media {:min-width "78.125"} {:max-width "25em"})]})

;
(rum/defc svg []
  [:svg  {:class [(css {:align-self "center"})]
          :width "80%"
          :height "auto"
          :view-box "0 0 868 120"
          :style {:max-width "40rem"}
          :id "legal-aid"}
    [:use {:xlink-href (str "/svg/legalaid.svg#legalaid")}]])



(rum/defc qualification-title []
  [:h3 ;{:style {:align-self "left"}}
   ;{:class [(at-media {:max-width "30rem"} {:align-self "center"})]}
   "Qualifications"])

;
(defn make-list [items]
  (reduce conj [:ul {:class [(css {:margin 0})]}]
   (map #(conj [:li {:class [(css {:list-style "none"
                                   :padding 0})]}

                 %])
      items)))


(rum/defc kayne []
  [:div {:style {:margin-bottom "3rem"}}
   [:div
     [:div.profile
      [:div.profile-photo
       [:img {:src "photos/kayne.png"
              :alt "Photo of Kayne Roy Ballard"}]]

      [:div.name-tag
        [:h2 "Kayne Ballard"]
        [:span "Solicitor and Migration Agent"]]]
    [:div {:class ["move-it"
                   (at-media {:min-width "88.75rem"} {:flex-direction "row"
                                                      :justify-content "space-between"})]}

     [:div qual-style
       (qualification-title)
       (make-list
        [
         [:p [:b "2012 Bachelor of Laws"] [:br] "James Cook University"]
         [:p [:b "Grad Dip LP"] [:br] "Australian National University"]
         [:p [:b "Admitted in the Supreme Court of Queensland and High Court of Australia"]]
         [:p [:b "Member of:"] [:br] "Queensland Law Society"]
         [:p [:b "2013 Graduate Certificate TESOL Griffith University"]]
         [:p [:b "2015 Graduate Diploma Migration Law"] [:br] "Australian National University"]
         [:p [:b "2016 Admitted in the High Court of New Zealand"]]
         [:p [:b "Registered Migration Agent:"] [:br] "(Number: 1679907), 2016"]])]


     [:div.more

      [:h3 "More about Kayne"]
      [:p "Kayne Roy Ballard, Legal Practice Director (Main), obtained a Bachelor of Laws, and was admitted as a solicitor of the Supreme Court of Queensland in 2012."]
      [:p "In 2013 Kayne obtained his Teaching English as a Second Language certification, which enables him to educate students acquiring English as a second language for academic purposes. This assisted him in his volunteer role as a tutor for adults."]
      [:p "Working in a well regarded Gold Coast law firm from 2013 to 2016, Kayne is experienced across numerous legal fields. His skills and knowledge base includes:"]

      [:ul
       [:li "Criminal Law"]
       [:li "Body Corporate Levy Recovery"]
       [:li "Retirement Village Law"]
       [:li "Commercial and Corporate Law"]
       [:li "Retail Shop and Commercial Leasing"]
       [:li "Litigation"]
       [:li "Immigration and Migration"]]
      [:p "In 2015, Kayne completed a Graduate Diploma in Migration Law, and became a Registered Migration Agent in 2016. Kayne has a passion for crime justice issues and migration issues which is reflected in his professional practice."]]]]])

;
(rum/defc jazz []
  [:div {:style {:margin-bottom "3rem"}}
   [:div
    [:div.profile
     [:div.profile-photo
       [:img {:src "photos/jazz.png"
              :alt "Photo of Jasmine Dominic"}]]

     [:div.name-tag
       [:h2 "Jasmine Dominic"]
       [:span "Solicitor and Business Consultant"]]]]

   [:div {:class ["move-it"
                  (at-media {:min-width "88.75rem"} {:flex-direction "row"
                                                     :justify-content "space-between"})]}

     [:div qual-style
       (qualification-title)
       (make-list
        [
         [:p [:b "2010 LLB (Hons)"] [:br] "Southern Cross University"]
         [:p [:b "2012 Grad Dip LP"] [:br] "Queensland University of Technology"]
         [:p [:b "2013 Admitted in the Supreme Court of Queensland"]]
         [:p [:b "Member of:"] [:br] "Queensland Law Society" [:br] "Lawyers Beyond Borders"]
         [:p [:b "2014 Qualified as Theta Healing Practitioner"]]
         [:p [:b "2015 Admitted in the High Court of Australia"]]
         [:p [:b "Practice Management Course - FMRC"]]
         [:p [:b "Certificate IV Small Business Managament"]]])]

     [:div#jazz.more
      [:h3 "More about Jasmine"]
      [:p "Commencing her working life as an “office junior” and quickly working her way up to the position of paralegal and then qualifying as a lawyer, Jasmine has 17 years’ experience working in legal offices."]
      [:p "From 2000 to 2008 Jasmine worked in various law firms, of all sizes, in Brisbane until moving overseas to live and study in Switzerland for two years.  Jasmine completed her law degree in Switzerland and upon her return to Australia completed her Graduate Diploma in Legal Practice, whilst working on a contract basis for various Brisbane law firms."]
      [:p "Jasmine joined Simpliciter Legal Solutions as Legal Practice Director in December 2016 after having run the Queensland Office of Suffolk Law and then her own firm Enlightened Justice which now operates as a community organisation."]
      [:p "Having worked for small, medium and top tier firms for many years, Jasmine's skills and knowledge base includes:"]

      [:ul
       [:li "Business Start Up and Structuring"]
       [:li "Commercial and Corporate Law"]
       [:li "Residential and Commercial Conveyancing"]
       [:li "Retail Shop, Commercial and Telecommmunications Leasing"]
       [:li "Family Law"]
       [:li "Estate Administration and Planning"]
       [:li "Litigation"]
       [:li "Immigration and Migration"]]
      [:p "Jasmine’s motto is “Just call Jazz”, as she considers no matter too big or too small, easy or difficult, when it comes to servicing her clients!"]]]])


;
(def contact-styles {:class [(at-media {:min-width "30rem"}
                              {:flex-direction "row"
                               :align-items "baseline"})
                             (at-media {:max-width "30rem"}
                               {:margin-bottom "1.5rem"})]})

(def contact-labels {:style {:width "8em"}})

(rum/defc contact-us []
  [:section {:class [(at-media {:max-width "55rem"}
                      {:margin-left "2rem"
                       :margin-right "2rem"})
                     (css {:align-self "center"})]}
   [:h2 {:class [(at-media {:min-width "30rem"}
                    {:align-self "center"})]}
      "Contact Us"]
   [:div contact-styles
     [:strong contact-labels "Address:"]
     [:span "9 Lawson Street Southport, QLD 4215"]]
   [:div contact-styles
     [:strong contact-labels "Mail:"]
     [:span "PO Box 214, Isle of Capri"]]
   [:div contact-styles
     [:strong contact-labels "Telephone:"]
     [:span "07 5660 6509"]]
   [:div contact-styles
     [:strong contact-labels "Fax:"]
     [:span "07 5636 0925"]]
   [:div contact-styles
     [:strong contact-labels "Email:"]
     [:span "admin@simpliciterlegal.com.au"]]

   [:div
    [:p {:class [(css {:font-size "1.125em"})]}"For any general inquiries, please fill in the following contact form."]]])





(rum/defc directors[]
  [:section {:class [(css {:padding-top "3rem"})
                     (at-media {:max-width "88.75em"} {:padding-left "2.5em"
                                                        :padding-right "2.5em"})]}
    [:h1 {:class [(css {:align-self "center"})]}

        "Our Directors"]
   (kayne)
   (jazz)])




;
(rum/defc contact-form []
  [:div {:class [(css {:align-self "center"
                       :width "100%"
                       :max-width "28em"})
                 (at-media {:max-width "55rem"}
                       {:padding-left "2rem"
                        :padding-right "2rem"})]}

   [:div
       [:form {:name "contact"
               :netlify true}

        [:p
         [:label "Your Name:"]
         [:input {:type "text"
                  :name "name"}]]
        [:p
         [:label "Your Email:"]
         [:input {:type "email"
                  :name "email"}]]
        [:p
         [:label "Your Phone Number:"]
         [:input {:type "text"
                   :name "phone number"}]]
        [:p
         [:label "Subject:"]
         [:input {:type "text"}]]
        [:span {:class [(css {})]};:font-size "1.2em"})]}
                              ;:font-weight "bold"})]}
            "Have you applied for or are you seeking legal aid?"]


        [:ul {:class [(css {:list-style "none"
                            :flex-direction "row"
                            :flex-wrap "wrap"})]}
                            ;:justify-content "space-around"})]}
         [:li.new
          [:input {:type "radio"
                   :name "legal aid"
                   :value "applied"
                   :id "applied"}]
          [:label {:for "applied"}
            [:p {:class [(css {:margin-bottom "0px"})]} "I have applied"]]
          [:div.check]]
         [:li.new
          [:input {:type "radio"
                    :name "legal aid"
                    :value "not-applied"
                    :id "not-applied"}]

          [:label {:for "not-applied"}
           [:p {:class [(css {:margin-bottom "0px"})]} "I am seeking legal aid"]]
          [:div.check]]]


        [:p
         [:label "Your message"]
         [:textarea {:name "message"}]]


        [:button [:span {:class [(css {:width "100%"
                                       :text-align "center"})]}
                      "Send"]]]]])

(rum/defc content []
  [:div
   (svg)
   (directors)
   [:div.full-width
    [:div.inner-block
     (contact-us)
     (contact-form)]]])
