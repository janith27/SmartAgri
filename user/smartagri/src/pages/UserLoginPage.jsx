import React, { Component,Fragment } from 'react'

import FooterDesktop from '../components/common/FooterDesktop'

import FooterMobile from '../components/common/FooterMobile'
import ComNev from '../components/common/ComNev'
import UserLogin from '../components/common/UserLogin'

class UserLoginPage extends Component {
  render() {
    return (
        <Fragment>
        
            <div className="Desktop">
                <ComNev />
          
            </div>

            <div className="Mobile">
                <ComNev />
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