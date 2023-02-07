import React, { Component,Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import InstructorNavMenuDesktop from '../components/farmer/FarmerNavMenuDesktop'
import InstructorDashboard from '../components/instructor/InstructorDashboard'
import InstructorNavMobile from '../components/instructor/InstructorNavMobile'
import InstructorAppoinment from '../components/instructor/InstructorAppoinment'

class Appoinment extends Component {
    componentDidMount(){
        window.scroll(0,0)
      }
    render() {
        const User = this.props.user;
        return (
            <Fragment>
        
        <div className="Desktop">
          <InstructorNavMenuDesktop  />
          
        </div>

        <div className="Mobile">
          <InstructorNavMobile />
        </div>
        <div>
          
          <InstructorAppoinment />
          
        </div>
        
        

        <div className="Desktop">
          <FooterDesktop />
          
        </div>

        <div className="Mobile">
          <FooterMobile />
        </div>
        
        
      </Fragment>
        );
    }
}

export default Appoinment;