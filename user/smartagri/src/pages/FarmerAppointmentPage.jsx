import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import AppointmentCreate from '../components/farmer/Appointment/AppointmentCreate'
import FarmerNavMenuDesktop from '../components/farmer/FarmerNavMenuDesktop'
import FarmerNavMobile from '../components/farmer/FarmerNavMobile'

class FarmerAppointmentPage extends Component {

    componentDidMount(){
        window.scroll(0,0)
      }

  render() {
    return (
        <Fragment>
        
        <div className="Desktop">
          <FarmerNavMenuDesktop />
          
        </div>

        <div className="Mobile">
          <FarmerNavMobile />
        </div>
        
        
        <AppointmentCreate />

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