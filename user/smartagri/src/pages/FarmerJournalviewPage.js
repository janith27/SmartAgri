import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import FarmerNavMenuDesktop from "../components/farmer/FarmerNavMenuDesktop";
import FarmerNavMobile from "../components/farmer/FarmerNavMobile";
import JournalInDetail from "../components/common/JournalInDetail";

function FarmerJournalviewPage() {
    
  return (
    <Fragment>
            <div className="Desktop">
              <FarmerNavMenuDesktop />
            </div>
    
            <div className="Mobile">
              <FarmerNavMobile />
            </div>
    
            <JournalInDetail />
    
            <div className="Desktop">
              <FooterDesktop />
            </div>
    
            <div className="Mobile">
              <FooterMobile />
            </div>
          </Fragment>
  )
}

export default FarmerJournalviewPage