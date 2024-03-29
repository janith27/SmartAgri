import React, { Component, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import CropDetails from "./DashboardComponent/CropDetails";
import EssentialView from "./DashboardComponent/EssentialView";
import JournelViewFarmer from "./DashboardComponent/JournelViewFarmer";

class FarmerDashboard extends Component {
  render() {
    const userData = this.props.user;

    return (
      <Fragment>
        <div className="mainback backgroundbox">
          {/* {console.log(this.props.user) } */}
          <Row>
            <Col lg={3} md={4} sm={12} xs={12}>
              <CropDetails user={userData} />
            </Col>
            <Col lg={6} md={4} sm={12} xs={12}>
              <EssentialView user={userData} />
            </Col>
            <Col lg={3} md={4} sm={12} xs={12}>
              <JournelViewFarmer />
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default FarmerDashboard;
