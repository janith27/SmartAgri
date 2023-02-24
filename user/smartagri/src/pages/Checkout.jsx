import React, { Component, Fragment } from "react";
import Cart from "../components/Cart/Cart";
import CheckoutOrder from "../components/CheckoutOrder";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import FarmerNavMenuDesktop from "../components/farmer/FarmerNavMenuDesktop";
import FarmerNavMobile from "../components/farmer/FarmerNavMobile";


class Checkout extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <FarmerNavMenuDesktop />
        </div>

        <div className="Mobile">
          <FarmerNavMobile />
        </div>

        <CheckoutOrder />

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

export default Checkout;
