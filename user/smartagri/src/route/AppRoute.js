import React, { Component, Fragment } from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage'
import RegistrationChosepage from '../pages/RegistrationChosepage';
import UserLoginPage from '../pages/UserLoginPage'

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/registrationchose" element={<RegistrationChosepage /> } />
          <Route exact path="/login" element={<UserLoginPage />} />
        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute