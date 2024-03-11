import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// var my_awesome_script = document.createElement("script");

// my_awesome_script.setAttribute("src", "//dapi.kakao.com/v2/maps/sdk.js?appkey=2ca3e874ab120943d901e338daef61ff&libraries=services,clusterer");

// document.head.appendChild(my_awesome_script);

serviceWorkerRegistration.register();
reportWebVitals();
