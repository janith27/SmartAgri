import React, { Component,Fragment } from 'react'

import FooterDesktop from '../components/common/FooterDesktop'

import FooterMobile from '../components/common/FooterMobile'
import ComNev from '../components/common/ComNev'
import RegisterChose from '../components/common/RegisterChose'


export class RegistrationChosepage extends Component {
  render() {
    return (
        <Fragment>
        
        <div className="Desktop">
            <ComNev />
      
        </div>

        <div className="Mobile">
            <ComNev />
        </div>

        <RegisterChose />

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

export default RegistrationChosepage
