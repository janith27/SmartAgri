import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import InstructorNavMenuDesktop from "../components/instructor/InstructorNavMenuDesktop";
import InstructorNavMobile from "../components/instructor/InstructorNavMobile";
import Profile from "../components/common/Profile";
class InstructorProfilePage extends Component {
    componentDidMount() {
        window.scroll(0, 0);
      }
    
      render() {
        const dataUser = this.props.user;
    
        return (
            <Fragment>
            <div className="Desktop">
              <InstructorNavMenuDesktop />
            </div>
    
            <div className="Mobile">
              <InstructorNavMobile />
            </div>
    
            <Profile user={dataUser} />
    
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

export default InstructorProfilePage