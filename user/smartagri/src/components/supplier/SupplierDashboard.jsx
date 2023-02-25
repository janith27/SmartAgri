import React, { Component, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import MyOrders from "./DashboardComponent/MyOrders";
import Orders from "./DashboardComponent/Orders";
import SupEssential from "./DashboardComponent/SupEssential";

class SupplierDashboard extends Component {
  render() {
    const User = this.props.user;
    return (
      <Fragment>
        <div className="mainback backgroundbox">
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Orders user={User}/>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              {/* <SupEssential user={User} /> */}
            </Col>
            {/* <Col lg={4} md={4} sm={12} xs={12}>
              <MyOrders user={User} />
            </Col> */}
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default SupplierDashboard;
