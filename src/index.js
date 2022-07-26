import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";

// import "./assets/js/jquery-3.3.1.slim.min.js";
// import "./assets/js/popper.min.js";

// import "./assets/js/bootstrap.min.js";
// import 'bootstrap/dist/css/bootstrap.min.css';


import  'jquery';
import  'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
