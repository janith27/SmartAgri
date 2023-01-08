import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Supply from '../../home/Supply';
class EssentialView extends Component {
  render() {
    return (
      <Fragment>
        <Row >
            <Col>
                <Card className="text-center cardappointment">
                    
                    <Card.Body>
                        <Card.Title>Appointment</Card.Title>
                        <Card.Text>
                         You have an appointment
                        </Card.Text>
                        <Button variant="primary">Create Appointment</Button>
                    </Card.Body>
                    
                </Card>
            </Col>
        </Row>

        <Row xs={1} md={2} className="g-4">
      
        <Col>
          <Card className='text-center cultivate'>
            <Card.Body>
              <Card.Title>Cultivate Date</Card.Title>
              <Card.Text>
                2023/01/05
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='text-center harvest'>
            <Card.Body>
              <Card.Title>Expected Havest Date</Card.Title>
              <Card.Text>
                2023/04/20
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
    <Row>
        <Supply />
    </Row>
      </Fragment>
    )
  }
}

export default EssentialView