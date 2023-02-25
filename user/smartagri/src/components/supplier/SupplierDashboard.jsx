import React, { Component, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import Myitems from "./DashboardComponent/Myitems";
import Orders from "./DashboardComponent/Orders";
import SupEssential from "./DashboardComponent/SupEssential";

class SupplierDashboard extends Component {
  render() {
    const User = this.props.user;
    return (
      <Fragment>
        <div className="mainback backgroundbox">
          <Row>
            <Col lg={5} md={5} sm={12} xs={12}>
              <Orders user={User}/>
            </Col>
            <Col lg={7} md={7} sm={12} xs={12}>
              <SupEssential />
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default SupplierDashboard;
