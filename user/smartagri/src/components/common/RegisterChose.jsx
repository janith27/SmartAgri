import React, { Component, Fragment } from 'react'
import { Container, Button, Col, Row, Card } from 'react-bootstrap'
import Farmerimg from '../../assest/images/farmer.jpg'
import Instructorimg from '../../assest/images/instructor.jpg'
import Supplierimg from '../../assest/images/supplier.jpg'

class RegisterChose extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm mt-2" md={12} lg={12} sm={12} xs={12}>
              <Row className="text-center">

                <Col className="d-flex justify-content-center" md={4} lg={4} sm={12} xs={12}>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" className='ocupationimg' src={Farmerimg} />
                        <Card.Body>
                            <Card.Title>Continue as a Farmer</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button className="btn btn-block m-2 site-btn-userselect">Farmer</Button>
                        </Card.Body>
                    </Card>

                </Col>

                <Col className="d-flex justify-content-center" md={4} lg={4} sm={12} xs={12}>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" className='ocupationimg' src={Instructorimg} />
                        <Card.Body>
                            <Card.Title>Continue as an Instructor</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button className="btn btn-block m-2 site-btn-userselect">Instructor</Button>
                        </Card.Body>
                    </Card>

                </Col>

                <Col className="d-flex justify-content-center" md={4} lg={4} sm={12} xs={12}>

                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" className='ocupationimg' src={Supplierimg} />
                        <Card.Body>
                            <Card.Title>Continue as a Supplier</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button className="btn btn-block m-2 site-btn-userselect">Supplier</Button>
                        </Card.Body>
                    </Card>

                </Col>

              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default RegisterChose
