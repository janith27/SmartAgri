import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import Myitems from './DashboardComponent/Myitems';
import Orders from './DashboardComponent/Orders';
import SupEssential from './DashboardComponent/SupEssential';

class SupplierDashboard extends Component {
  render() {
    return (
      <Fragment>
        <div className='mainback backgroundbox'>
        <Row>
          <Col lg={3} md={4} sm={12} xs={12}>
            <Orders />
          </Col>
          <Col lg={6} md={4} sm={12} xs={12}>
            < SupEssential />
          </Col>
          <Col lg={3} md={4} sm={12} xs={12}>
            <Myitems />
          </Col>
        </Row>
        </div>
      </Fragment>
    )
  }
}

export default SupplierDashboard