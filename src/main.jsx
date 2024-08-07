
import './index.css';
import 'regenerator-runtime/runtime'; // Add this line
import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
