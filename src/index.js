import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './styles/all.min.css';
// import './styles/plugin.min.css';
import './styles/bootstrap.min.css';
// import './styles/ionicon.min.css';
import './styles/style.css';
import './styles/responsive.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);