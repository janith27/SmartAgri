import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import JournelViews from './JournelViews'
import InsAppointment from './DashboardComponent/InsAppointment';
import InsEssentialView from './DashboardComponent/InsEssentialView';


class InstructorDashboard extends Component {
    render() {
        return (
            <Fragment>
        <div className='mainback backgroundbox'>
        <Row>
          <Col lg={3} md={4} sm={12} xs={12}>
            <InsAppointment />
          </Col>
          <Col lg={6} md={4} sm={12} xs={12}>
            < InsEssentialView />
          </Col>
          <Col lg={3} md={4} sm={12} xs={12}>
            <JournelViews />
          </Col>
        </Row>
        </div>
      </Fragment>
                
            
        );
    }
}

export default InstructorDashboard;