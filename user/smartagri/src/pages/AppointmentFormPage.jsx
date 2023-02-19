import React, { Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import AppointmentForm from "../components/farmer/Appointment/AppointmentForm";
import FarmerNavMenuDesktop from "../components/farmer/FarmerNavMenuDesktop";
import FarmerNavMobile from "../components/farmer/FarmerNavMobile";
import { useParams } from "react-router-dom";

function AppointmentformPage({ user }) {
  const insData = useParams();
  return (
    <Fragment>
      <div className="Desktop">
        <FarmerNavMenuDesktop />
      </div>

      <div className="Mobile">
        <FarmerNavMobile />
      </div>
      <AppointmentForm fEmail={user} insEmail={insData.keyemail} />

      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
}

export default AppointmentformPage;
