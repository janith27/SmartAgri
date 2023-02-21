import React, { Fragment } from "react";
import AdminDashboard from "../components/admin/AdminDashboard";
import AdminFooter from "../components/admin/AdminFooter";
import AdminNaiDesktop from "../components/admin/AdminNaiDesktop";
import AdminNaviMobile from "../components/admin/AdminNaviMobile";
import SideBarMenu from "../components/admin/SideBarMenu";

function AdminHomePage() {
  return (
    <Fragment>
      <div className="Desktop">
        <AdminNaiDesktop />
      </div>

      <div className="Mobile">
        <AdminNaviMobile />
      </div>
      <div>
        <AdminDashboard />
      </div>
      <div className="footer">
        <AdminFooter />
      </div>
    </Fragment>
  );
}

export default AdminHomePage;
