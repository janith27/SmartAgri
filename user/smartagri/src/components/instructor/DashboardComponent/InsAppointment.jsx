import React, { Component,Fragment } from 'react'
import { Col, Row,Card } from 'react-bootstrap'

class InsAppointment extends Component {
  render() {
    return (
        <Fragment>
            <div className='appoinmentback'>
        <div className='d-flex justify-content-center'>
        <h1>Appointment</h1>
        </div>
        <Card border="primary" style={{ width: '18rem' }} className="journelcard ">
          <Card.Body>
            
            <Card.Title>Farmer Name</Card.Title>
            <Card.Text>Date: </Card.Text>
            <Card.Text>Time: </Card.Text>
            <Card.Text>Venue: </Card.Text>
            <Card.Text>About: </Card.Text> 
              
          </Card.Body>
        </Card>

        <Card border="primary" style={{ width: '18rem' }} className="journelcard ">
          <Card.Body>
            
            <Card.Title>Farmer Name</Card.Title>
            <Card.Text>Date: </Card.Text>
            <Card.Text>Time: </Card.Text>
            <Card.Text>Venue: </Card.Text>
            <Card.Text>About: </Card.Text> 
              
          </Card.Body>
        </Card>

        </div>
         
      </Fragment>
    )
  }
}

export default InsAppointment