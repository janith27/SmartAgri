import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import InstructorNavMenuDesktop from "../components/instructor/InstructorNavMenuDesktop";
import InstructorDashboard from "../components/instructor/InstructorDashboard";
import InstructorNavMobile from "../components/instructor/InstructorNavMobile";

class InstructorHomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const userDetails = this.props.user;
    return (
      <Fragment>
        <div className="Desktop">
          <InstructorNavMenuDesktop />
        </div>

        <div className="Mobile">
          <InstructorNavMobile />
        </div>

        <InstructorDashboard user={userDetails}/>

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

export default InstructorHomePage;
