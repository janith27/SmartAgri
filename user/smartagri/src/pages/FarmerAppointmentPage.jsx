// import axios from 'axios'
import React, { Component, Fragment } from 'react'
// import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import AppointmentCreate from '../components/farmer/Appointment/AppointmentCreate'
import FarmerNavMenuDesktop from '../components/farmer/FarmerNavMenuDesktop'
import FarmerNavMobile from '../components/farmer/FarmerNavMobile'

class FarmerAppointmentPage extends Component {


    // constructor(){
    //   super();
    //   this.state ={
    //     InsData:[]
    //   }
    // }

    componentDidMount(){
        window.scroll(0,0)

        // axios.get(AppURL.InstructorData("giriulla")).then(response =>{
        //     this.setState({InsData:response.data});
        // }).catch(error=>{

        // });

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