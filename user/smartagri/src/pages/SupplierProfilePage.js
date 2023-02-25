import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import SupplierNavMenuDesktop from "../components/supplier/SupplierNavMenuDesktop";
import SupplierDashboard from "../components/supplier/SupplierDashboard";
import SupplierNavMobile from "../components/supplier/SupplierNavMobile";
import Profile from "../components/common/Profile";

export class SupplierProfilePage extends Component {
    componentDidMount() {
        window.scroll(0, 0);
      }
    
      render() {
        const dataUser = this.props.user;
    // console.log(dataUser)
        return (
          <Fragment>
            <div className="Desktop">
              <SupplierNavMenuDesktop />
            </div>
    
            <div className="Mobile">
              <SupplierNavMobile />
            </div>
    
            <Profile user={dataUser} />
    
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

export default SupplierProfilePage