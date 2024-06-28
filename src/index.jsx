import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App.jsx";
import ContextProvider from "./context/Context.jsx";
import reportWebVitals from './reportWebVitals';
let elRoot = document.getElementById('root');
let root = ReactDOM.createRoot(elRoot);
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
