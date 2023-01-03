import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import FarmerNavMenuDesktop from '../components/farmer/FarmerNavMenuDesktop'
import FarmerNavMobile from '../components/farmer/FarmerNavMobile'
import Notification from '../components/Notification/Notification'

class NotificationPage extends Component {

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
        
        
        <Notification />

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

export default NotificationPage