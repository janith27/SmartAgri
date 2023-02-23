import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import SideBarMenu from "../../components/admin/SideBarMenu";
import AdminFooter from "../../components/admin/AdminFooter";
import AdminNaiDesktop from "../../components/admin/AdminNaiDesktop";
import AdminNaviMobile from "../../components/admin/AdminNaviMobile";
import AnyUserMsg from "../../components/admin/AnyUserMsg";
import VisitorView from "../../components/admin/VisitorView";

function VisitorViewPage() {
    return (
        <Fragment>
          <div className="Desktop">
            <AdminNaiDesktop />
          </div>
    
          <div className="Mobile">
            <AdminNaviMobile />
          </div>
          <div>
            <Row>
                <Col lg={3} md={3} sm={12} xs={12}>
                <SideBarMenu />
                </Col>
                <Col lg={9} md={9} sm={12} xs={12}>
                <VisitorView />
                </Col>
            </Row>
            
          </div>
          <div className="footer">
            <AdminFooter />
          </div>
        </Fragment>
      )
}

export default VisitorViewPage