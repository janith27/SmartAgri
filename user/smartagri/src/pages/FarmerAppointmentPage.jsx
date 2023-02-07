import { CleaningServices } from '@mui/icons-material'
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
      famData:[], 
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

    
// console.log(this.state.uemail);
    return (
      <Fragment>
        
        <div className="Desktop">
          <FarmerNavMenuDesktop />
          
        </div>

        <div className="Mobile">
          <FarmerNavMobile />
        </div>
        
        {/* console.log(this.state.famData); */}
        <AppointmentCreate user={User} famdetail={this.state.famData}/>

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