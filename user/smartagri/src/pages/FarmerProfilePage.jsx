// import axios from 'axios'
import React, { Component, Fragment } from 'react'
// import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import FarmerNavMenuDesktop from '../components/farmer/FarmerNavMenuDesktop'
import FarmerNavMobile from '../components/farmer/FarmerNavMobile'
import FarmerPrifile from '../components/farmer/FarmerPrifile'

class FarmerProfilePage extends Component {

    componentDidMount(){
        
        window.scroll(0,0)
    
    }

  render() {

    const User = this.props.user;
    
    return (
        <Fragment>
        
        <div className="Desktop">
          <FarmerNavMenuDesktop />
          
        </div>

        <div className="Mobile">
          <FarmerNavMobile />
        </div>
        
        
        <FarmerPrifile user={User} />

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

export default FarmerProfilePage