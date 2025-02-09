import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js'; // Ensure App is imported correctly

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// Create a root and render the app
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);