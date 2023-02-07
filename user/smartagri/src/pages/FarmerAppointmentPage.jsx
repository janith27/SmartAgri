import axios from 'axios'
import React, { Component, Fragment } from 'react'
import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import AppointmentCreate from '../components/farmer/Appointment/AppointmentCreate'
import FarmerNavMenuDesktop from '../components/farmer/FarmerNavMenuDesktop'
import FarmerNavMobile from '../components/farmer/FarmerNavMobile'

class FarmerAppointmentPage extends Component {


  constructor(){
    super();
    this.state={
      famData:{}, 
        uemail:""        
    }
}

  componentDidMount(){


    axios.get(AppURL.FarmerData(this.state.uemail)).then(response =>{

        this.setState({famData:response.data});       
  
    }).catch(error=>{
  
    });
  }


  render() {

    const User = this.props.user;
    this.state.uemail=this.props.user.email;
    const farmerDetails = this.state.famData;

    // console.log(farmerDetails)
// console.log(this.state.uemail);
    return (
      <Fragment>
        
        <div className="Desktop">
          <FarmerNavMenuDesktop />
          
        </div>

        <div className="Mobile">
          <FarmerNavMobile />
        </div>
        
        
        <AppointmentCreate user={User} detail={farmerDetails}/>

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