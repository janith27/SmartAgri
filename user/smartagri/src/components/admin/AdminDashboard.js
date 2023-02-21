import React, { Fragment } from 'react'
import { Col,Row } from 'react-bootstrap'
import FarmersView from './FarmersView'
import SideBarMenu from './SideBarMenu'

function AdminDashboard() {
  return (
    <Fragment>
        <Row>
        <Col lg={3} md={3} sm={12} xs={12}>
              <SideBarMenu />
            </Col>
            <Col lg={9} md={9} sm={12} xs={12}>
              <FarmersView  />
            </Col>
        </Row>
    </Fragment>
  )
}

export default AdminDashboard