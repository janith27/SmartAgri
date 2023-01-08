import React, { Component,Fragment } from 'react'
import { Col, Row,Card } from 'react-bootstrap'
class JournelView extends Component {
  render() {
    return (
      <Fragment>
        <div className='d-flex justify-content-center'>
        <h1>Journels</h1>
        </div>
        <Card border="primary" style={{ width: '18rem' }} className="journelcard ">
          <Card.Body>
            <Row>
            <Col xs={3} md={3}><Card.Img src="holder.js/100px180" /></Col>
            <Col xs={9} md={9}>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            </Col>
            </Row>
          </Card.Body>
        </Card>


        <Card border="primary" style={{ width: '18rem' }} className="journelcard ">
          <Card.Body>
            <Row>
            <Col xs={3} md={3}><Card.Img src="holder.js/100px180" /></Col>
            <Col xs={9} md={9}>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            </Col>
            </Row>
          </Card.Body>
        </Card>
        
         
      </Fragment>
    )
  }
}

export default JournelView