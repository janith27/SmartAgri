import React, { Component, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import AddJournal from "./AddJournal";
import InsAppointment from "./DashboardComponent/InsAppointment";
import InsEssentialView from "./DashboardComponent/InsEssentialView";

class InstructorDashboard extends Component {
  render() {
    const insDetails = this.props.user;
    return (
      <Fragment>
        <div className="mainback backgroundbox">
          <Row>
            <Col lg={5} md={4} sm={12} xs={12}>
              <InsAppointment insData={insDetails} />
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <InsEssentialView />
            </Col>
            <Col lg={3} md={4} sm={12} xs={12}>
              <AddJournal />
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default InstructorDashboard;
