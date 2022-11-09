import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import HomeNavMenuDesktop from '../components/home/HomeNavMenuDesktop'
import HomeNevMobile from '../components/home/HomeNevMobile'
import Contact from '../components/common/Contact'

class ContactPage extends Component {
  render() {
    return (
        <Fragment>
        
        <div className="Desktop">
            <HomeNavMenuDesktop />
      
        </div>

        <div className="Mobile">
            <HomeNevMobile />
        </div>

        <Contact />

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

export default ContactPage