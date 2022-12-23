import React, { Component,Fragment } from 'react'
import FooterDesktop from '../common/FooterDesktop'
import FooterMobile from '../common/FooterMobile'
import InstructorChat from '../instructor/InstructorChat'
import InstructorNavMenuDesktop from '../farmer/FarmerNavMenuDesktop'
import InstructorNavMobile from '../instructor/InstructorNavMobile'


class Chat extends Component {
    componentDidMount(){
        window.scroll(0,0)
      }

  render() {
    const User = this.props.user;
    return (
        <Fragment>
        
        <div className="Desktop">
          <InstructorNavMenuDesktop user = {User} />
          
        </div>

        <div className="Mobile">
          <InstructorNavMobile />
        </div>
        <div>
          
          <InstructorChat />
          <div>
           
          </div>
          
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

export default Chat
