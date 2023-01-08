import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import FarmerDashboard from '../components/farmer/FarmerDashboard'
import FarmerNavMenuDesktop from '../components/farmer/FarmerNavMenuDesktop'
import FarmerNavMobile from '../components/farmer/FarmerNavMobile'

class FarmerHomePage extends Component {

  componentDidMount(){
    window.scroll(0,0)
  }

  render() {

    const User = this.props.user;

    return (
        <Fragment>
        
        <div className="Desktop">
          <FarmerNavMenuDesktop user = {User} />
          
        </div>

        <div className="Mobile">
          <FarmerNavMobile />
        </div>
        
        
        <FarmerDashboard />

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