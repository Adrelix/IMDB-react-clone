import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReactRoot from './Components/ReactRoot/reactRoot';
import navigation from "./Components/navigation.js";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactRoot/>
  </React.StrictMode>
);
