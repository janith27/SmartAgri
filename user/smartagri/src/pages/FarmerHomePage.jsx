import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import FarmerNavMenuDesktop from '../components/farmer/FarmerNavMenuDesktop'
import FarmerNavMobile from '../components/farmer/FarmerNavMobile'

class FarmerHomePage extends Component {
  render() {
    return (
        <Fragment>
        
        <div className="Desktop">
          <FarmerNavMenuDesktop />
          
        </div>

        <div className="Mobile">
          <FarmerNavMobile />
        </div>

        

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

export default FarmerHomePage