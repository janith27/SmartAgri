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
// import InstructorNotification from '../components/instructor/InstructorNotification';
import axios from 'axios' 
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';
import FarmerChatPage from '../pages/FarmerChatPage';
import InstructorChatPage from '../pages/InstructorChatPage';
import FarmerNotificationPage from '../pages/FarmerNotificationPage';
import InstructorNotificationPage from '../pages/InstructorNotificationPage';
import FarmerShopPage from '../pages/FarmerShopPage';
import SupplierHomePage from '../pages/SupplierHomePage';
import FarmerAppointmentPage from '../pages/FarmerAppointmentPage';
import AppURL from '../api/AppURL';
import FarmerProfilePage from '../pages/FarmerProfilePage';
import AppointmentFormPage from '../pages/AppointmentFormPage';
import PlaceHolder from '../placeHolder/PlaceHolder';
// import Appoint from '../pages/Appoint';



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
          <Route exact path="/farmerdashboard" element={< FarmerHomePage user={this.state.user} setUser={this.setUser}/>} />
          <Route exact path="/instructordashboard" element={< InnstructorHomePage />} />
          <Route exact path="/supplierdashboard" element={< SupplierHomePage />} />
          <Route exact path="/appoinment" element={< Appoinment />} />
          <Route exact path="/addjournal" element={< AddJournal />} />
          <Route exact path="/instructornotification" element={< InstructorNotificationPage />} />
          <Route exact path="/farmernotification" element={< FarmerNotificationPage />} />
          <Route exact path="/productdetails" element={< ProductDetailsPage />} />
          <Route exact path="/cart" element={< CartPage />} />
          <Route exact path="/farmerchat" element={< FarmerChatPage />} />
          <Route exact path="/farmershop" element={< FarmerShopPage />} />
          <Route exact path="/instructorchat" element={< InstructorChatPage />} />
          <Route exact path="/farmerappointmentcreate" element={< FarmerAppointmentPage user={this.state.user} setUser={this.setUser} />} />
          <Route exact path="/farmerprofile" element={< FarmerProfilePage user={this.state.user} setUser={this.setUser} />} />
          <Route exact path="/appointmentform/:keyemail" element={< AppointmentFormPage user={this.state.user.email} />} />
         
        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute