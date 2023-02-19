import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import InstructorNavMenuDesktop from "../components/farmer/FarmerNavMenuDesktop";

import InstructorNavMobile from "../components/instructor/InstructorNavMobile";

import InstJournal from "../components/instructor/InstJournal";

class AddJournal extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    const User = this.props.user;
    return (
      <Fragment>
        <div className="Desktop">
          <InstructorNavMenuDesktop user={User} />
        </div>

        <div className="Mobile">
          <InstructorNavMobile />
        </div>
        <div>
          <InstJournal />
          <div></div>
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

export default AddJournal;
