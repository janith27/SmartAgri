import React, { Component,Fragment } from 'react'
import HomeNavMenuDesktop from '../components/home/HomeNavMenuDesktop'
import FooterDesktop from '../components/common/FooterDesktop'
import HomeNevMobile from '../components/home/HomeNevMobile'
import FooterMobile from '../components/common/FooterMobile'
import UserLogin from '../components/common/UserLogin'

class UserLoginPage extends Component {
  render() {
    return (
        <Fragment>
        
            <div className="Desktop">
                <HomeNavMenuDesktop />
          
            </div>

            <div className="Mobile">
                <HomeNevMobile />
            </div>

            <UserLogin />

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

export default UserLoginPage