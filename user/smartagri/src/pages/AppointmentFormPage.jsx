import axios from "axios";
import React, { Fragment } from "react";
import AppURL from "../api/AppURL";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import AppointmentForm from "../components/farmer/Appointment/AppointmentForm";
import FarmerNavMenuDesktop from "../components/farmer/FarmerNavMenuDesktop";
import FarmerNavMobile from "../components/farmer/FarmerNavMobile";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AppointmentformPage() {
  const [emailData, setEmailData] = useState([]);

  //   const InsData = [];
  const { keyemail } = useParams();

  useEffect(() => {
    //     window.scroll(0,0)
    // console.log(keyemail);
    axios
      .get(AppURL.InstructorDetailEmail(keyemail))
      .then((response) => {
        setEmailData(response.data);
        // this.setState({ InsData: response.data });
      })
      .catch((error) => {});
  });
  //   const User = this.props.user;
  return (
    <Fragment>
      <div className="Desktop">
        <FarmerNavMenuDesktop />
      </div>

      <div className="Mobile">
        <FarmerNavMobile />
      </div>

      <AppointmentForm data={emailData} />

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
