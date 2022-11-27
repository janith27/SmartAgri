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

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/registrationchose" element={<RegistrationChosepage /> } />
          <Route exact path="/login" element={<UserLoginPage />} />
          <Route exact path="/farmerregpage" element={<FarmerRegPage />} />
          <Route exact path="/instructorregpage" element={<InstructorRegPage />} />
          <Route exact path="/supplierregpage" element={<SupplierRegPage />} />
          <Route exact path="/forgetpassword" element={< ForgetPasswordPage />} />
          <Route exact path="/resetpassword" element={< ResetPasswordPage />} />
          <Route exact path="/farmerdashboard" element={< FarmerHomePage />} />
        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute