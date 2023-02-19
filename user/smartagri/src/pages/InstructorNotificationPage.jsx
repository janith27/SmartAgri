import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import InstructorNavMenuDesktop from "../components/instructor/InstructorNavMenuDesktop";
import InstructorNavMobile from "../components/instructor/InstructorNavMobile";
import Notification from "../components/Notification/Notification";

class InstructorNotificationPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <InstructorNavMenuDesktop />
        </div>

        <div className="Mobile">
          <InstructorNavMobile />
        </div>

        <Notification />

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

export default InstructorNotificationPage;
