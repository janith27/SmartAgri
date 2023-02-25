import React, { Component, Fragment } from "react";
import { useParams } from "react-router-dom";
import CheckoutOrder from "../components/CheckoutOrder";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import CreditCardPayment from "../components/farmer/CreditCardPayment";
import FarmerNavMenuDesktop from "../components/farmer/FarmerNavMenuDesktop";
import FarmerNavMobile from "../components/farmer/FarmerNavMobile";

function CreditCardPaymentHomePage({ user }) {
  return (
    <Fragment>
      <div className="Desktop">
        <FarmerNavMenuDesktop />
      </div>

      <div className="Mobile">
        <FarmerNavMobile />
      </div>

      <CreditCardPayment uData={user} />

      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
}

export default CreditCardPaymentHomePage;
