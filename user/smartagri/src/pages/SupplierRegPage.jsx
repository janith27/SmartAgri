import React, { Component, Fragment } from "react";

import FooterDesktop from "../components/common/FooterDesktop";

import FooterMobile from "../components/common/FooterMobile";
import ComNev from "../components/common/ComNev";
import SupplierReg from "../components/supplier/SupplierReg";

class SupplierRegPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <ComNev />
        </div>

        <div className="Mobile">
          <ComNev />
        </div>

        <SupplierReg />

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

export default SupplierRegPage;
