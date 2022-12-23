import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assest/css/custom.css';
import '../src/assest/css/fontawesome.css';
import '../src/assest/css/animate.min.css';
import '../src/assest/css/InstJournal.css';
import '../src/assest/css/InstructorAppoinment.css';
import '../src/assest/css/InstructorDashboard.css';
import '../src/assest/css/JournalRightSide.css';
import '../src/assest/css/JournalTable.css';
import '../src/assest/css/SideNotify.css';
import '../src/assest/css/AppoinmentRightSide.css';
import '../src/assest/css/AppoinmentTable.css';
import '../src/assest/css/Cards.css';
import '../src/assest/css/MainDash.css';
import '../src/assest/css/NewUserFarmer.css';
import '../src/assest/css/RecentTable.css';
import '../src/assest/css/RightSide.css';
import '../src/assest/css/SideBar.css';
import '../src/assest/css/Updates.css';

import axios from 'axios' 

axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('token')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
