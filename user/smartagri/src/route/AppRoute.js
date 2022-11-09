import React, { Component, Fragment } from 'react'
import { Routes, Route } from "react-router-dom";
import FarmerReg from '../components/farmer/FarmerReg';
import HomePage from '../pages/HomePage'
import RegistrationChosepage from '../pages/RegistrationChosepage';
import UserLoginPage from '../pages/UserLoginPage'
import InstructorReg from '../components/instructor/InstructorReg';
import SupplierReg from '../components/supplier/SupplierReg';
class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/registrationchose" element={<RegistrationChosepage /> } />
          <Route exact path="/login" element={<UserLoginPage />} />
          <Route exact path="/farmerreg" element={<FarmerReg />} />
          <Route exact path="/instructorreg" element={<InstructorReg />} />
          <Route exact path="/supplierreg" element={<SupplierReg />} />
        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute