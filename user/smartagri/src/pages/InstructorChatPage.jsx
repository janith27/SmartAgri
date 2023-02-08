import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import InstructorNavMenuDesktop from "../components/instructor/InstructorNavMenuDesktop";
import InstructorNavMobile from "../components/instructor/InstructorNavMobile";
import FarmerWithInstructorChat from "../components/Chat/FarmerWithInstructorChat";

class InstructorChatPage extends Component {
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

        <FarmerWithInstructorChat />

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

export default InstructorChatPage;
