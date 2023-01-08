import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import CropDetails from './DashboardComponent/CropDetails'
import EssentialView from './DashboardComponent/EssentialView'
import JournelView from './DashboardComponent/JournelView'

class FarmerDashboard extends Component {
  render() {
    return (
      <Fragment>
        <div className='mainback backgroundbox'>
        <Row>
          <Col lg={3} md={4} sm={12} xs={12}>
            <CropDetails />
          </Col>
          <Col lg={6} md={4} sm={12} xs={12}>
            <EssentialView />
          </Col>
          <Col lg={3} md={4} sm={12} xs={12}>
            <JournelView />
          </Col>
        </Row>
        </div>
      </Fragment>
      
    )
  }
}

export default FarmerDashboard