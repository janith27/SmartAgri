// import axios from 'axios'
import React, { Component, Fragment } from 'react'
// import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import AppointmentCreate from '../components/farmer/Appointment/AppointmentCreate'
import FarmerNavMenuDesktop from '../components/farmer/FarmerNavMenuDesktop'
import FarmerNavMobile from '../components/farmer/FarmerNavMobile'

class FarmerAppointmentPage extends Component {

  render() {

    const User = this.props.user;
    

    return (
      <Fragment>
        
        <div className="Desktop">
          <FarmerNavMenuDesktop user={User}/>
          
        </div>

        <div className="Mobile">
          <FarmerNavMobile />
        </div>
        
        
        <AppointmentCreate user={User} />

        <div className="Desktop">
          <FooterDesktop />
          
        </div>

        <div className="Mobile">
          <FooterMobile />
        </div>
        
        
      </Fragment>
    )
  }
}

export default FarmerAppointmentPage