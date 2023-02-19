import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import SupplierNavMenuDesktop from "../components/supplier/SupplierNavMenuDesktop";
import SupplierDashboard from "../components/supplier/SupplierDashboard";
import SupplierNavMobile from "../components/supplier/SupplierNavMobile";

class SupplierHomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const User = this.props.user;

    return (
      <Fragment>
        <div className="Desktop">
          <SupplierNavMenuDesktop user={User} />
        </div>

        <div className="Mobile">
          <SupplierNavMobile />
        </div>

        <SupplierDashboard />

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

export default SupplierHomePage;
