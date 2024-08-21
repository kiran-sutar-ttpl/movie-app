import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tEn from "./businesslogic/locales/english/transalation.json";
import tDe from "./businesslogic/locales/german/transalation.json";
import tFr from "./businesslogic/locales/french/transalation.json";
import tRu from "./businesslogic/locales/russian/transalation.json";
import tHi from "./businesslogic/locales/hindi/transalation.json";
import tMr from "./businesslogic/locales/marathi/transalation.json";
import store from "./store/store/store";
import { BrowserRouter } from "react-router-dom";
import "./businesslogic/styles/global.scss";


i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: tEn,
    },
    de: {
      translation: tDe,
    },
    fr: {
      translation: tFr,
    },
    ru: {
      translation: tRu,
    },
    hi: {
      translation: tHi,
    },
    mr: {
      translation: tMr,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
