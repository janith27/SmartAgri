import React, { Component, Fragment } from "react";
import { useParams } from "react-router-dom";
import CheckoutOrder from "../components/CheckoutOrder";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import FarmerNavMenuDesktop from "../components/farmer/FarmerNavMenuDesktop";
import FarmerNavMobile from "../components/farmer/FarmerNavMobile";

function Checkout({ user }) {
  // console.log(user)
  const pId = useParams().id;
  const pPrice = useParams().price;
  const pName = useParams().pname;

  return (
    <Fragment>
      <div className="Desktop">
        <FarmerNavMenuDesktop />
      </div>

      <div className="Mobile">
        <FarmerNavMobile />
      </div>

      <CheckoutOrder
        user={user}
        proId={pId}
        proPrice={pPrice}
        proName={pName}
      />

      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
}

export default Checkout;
