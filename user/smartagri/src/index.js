import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assest/css/custom.css';
import '../src/assest/css/fontawesome.css';
import '../src/assest/css/animate.min.css';
import axios from 'axios' 

axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('token')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
