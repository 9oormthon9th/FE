"use client";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

serviceWorkerRegistration.register();
reportWebVitals();

const script = document.createElement("script");
script.type = "text/javascript";
script.src =
  "//dapi.kakao.com/v2/maps/sdk.js?appkey=2ca3e874ab120943d901e338daef61ff&libraries=services,clusterer";
script.async = true;
script.dataset.cfasync = false;
document.body.appendChild(script);
script.addEventListener("load", () => {
  console.log("Script added successfully");
//   resolve();
});
console.log("Script added");
