import React, { Component, Fragment } from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage'
import RegistrationChosepage from '../pages/RegistrationChosepage';
import UserLoginPage from '../pages/UserLoginPage'
import FarmerRegPage from '../pages/FarmerRegPage';
import InstructorRegPage from '../pages/InstructorRegPage';
import SupplierRegPage from '../pages/SupplierRegPage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import FarmerHomePage from '../pages/FarmerHomePage';
import InnstructorHomePage from '../pages/InstructorHomePage';
import Appoinment from '../pages/Appoinment'
import AddJournal from '../pages/AddJournal';
import InstructorNotification from '../components/instructor/InstructorNotification';
import Chat from '../components/common/Chat';
import axios from 'axios' 
import AppURL from '../api/AppURL';


class AppRoute extends Component {

  constructor(){
    super();
    this.state={
         user:{}
    }
  }

  componentDidMount(){
    axios.get(AppURL.UserData).then(response =>{ 
         this.setUser(response.data)
    }).catch(error=>{

    });
  }

  setUser = (user) => {
    this.setState({user:user})
  }


  render() {
    return (
      <Fragment>
        
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/registrationchose" element={<RegistrationChosepage /> } />
          <Route exact path="/login" element={<UserLoginPage />} />
          <Route exact path="/fregister" element={<FarmerRegPage />} />
          <Route exact path="/instructorregpage" element={<InstructorRegPage />} />
          <Route exact path="/supplierregpage" element={<SupplierRegPage />} />
          <Route exact path="/forgetpassword" element={< ForgetPasswordPage />} />
          <Route exact path="/resetpassword" element={< ResetPasswordPage />} />
          <Route exact path="/farmerdashboard" element={< FarmerHomePage />} />
          <Route exact path="/instructordashboard" element={< InnstructorHomePage />} />
          <Route exact path="/appoinment" element={< Appoinment />} />
          <Route exact path="/addjournal" element={< AddJournal />} />
          <Route exact path="/instructornotification" element={< InstructorNotification />} />
          <Route exact path="/instructorchat" element={< Chat />} />

        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute