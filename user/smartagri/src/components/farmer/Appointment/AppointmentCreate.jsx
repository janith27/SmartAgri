import React, { Component,Fragment } from 'react'
import { Col, Row,Card } from 'react-bootstrap'

class AppointmentCreate extends Component {
  render() {
    return (
      <Fragment>
        <div className='title'><h2>Sugusted Instructors to you</h2></div>
        <Row className="d-flex justify-content-center">
            <Card border="primary" style={{ width: '18rem' }} className="appointmentcard">
                <Card.Body>
                    <Row>
                        <Col xs={3} md={3}><Card.Img src="holder.js/100px180" /></Col>
                        <Col xs={9} md={9}>
                            <Card.Title>Primary Card Title</Card.Title>
                            <Card.Text>Contact No:</Card.Text>
                            <Card.Text>Email:</Card.Text>
                            <Card.Text>Specialized Crop</Card.Text>
                            <Card.Text>Heights Education level:</Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Row>

        <Row className="d-flex justify-content-center">
            <Card border="primary" style={{ width: '18rem' }} className="appointmentcard">
                <Card.Body>
                    <Row>
                        <Col xs={3} md={3}><Card.Img src="holder.js/100px180" /></Col>
                        <Col xs={9} md={9}>
                            <Card.Title>Primary Card Title</Card.Title>
                            <Card.Text>Contact No:</Card.Text>
                            <Card.Text>Email:</Card.Text>
                            <Card.Text>Specialized Crop</Card.Text>
                            <Card.Text>Heights Education level:</Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Row>
      </Fragment>
    )
  }
}

export default AppointmentCreate