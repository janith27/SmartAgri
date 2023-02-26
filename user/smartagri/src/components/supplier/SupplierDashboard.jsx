import React, { Component, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import MyOrders from "./DashboardComponent/MyOrders";
import Orders from "./DashboardComponent/Orders";
import SupEssential from "./DashboardComponent/SupEssential";

class SupplierDashboard extends Component {
  render() {
    const User = this.props.user;
    // console.log(User)
    return (
      <Fragment>
        <div className="mainback backgroundbox">
          <Row>
            <Col lg={3} md={3} sm={12} xs={12}>
              <Orders user={User}/>
            </Col>
            <Col lg={5} md={5} sm={12} xs={12}>
              <SupEssential user = {User} />
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <MyOrders user={User} />
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default SupplierDashboard;
