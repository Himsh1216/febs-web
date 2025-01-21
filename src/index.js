/* ======= src/index.tsx ======= */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './styles/App.css';
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(React.StrictMode, null,
    React.createElement(App, null)));
