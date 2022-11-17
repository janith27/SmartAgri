import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Login from '../../assest/images/login.png'

class InstructorReg extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <Row className="p-2">
              <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                <Row className="text-center">
                  <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                    <Form className="onboardForm">
                      <h4 className="section-title-login"> INSTRUCTOR REGISTER </h4>
                        
                        <Form.Select aria-label="Default select example " className="form-control m-2">
                          <option value="mr">Mr.</option>
                          <option value="miss">Miss.</option>
                          <option value="mrs">Mrs.</option>
                        </Form.Select>
                        
                        <Row>
                          <Col>
                          <input className="form-control m-2" type="text" placeholder="First Name" />
                          </Col>

                          <Col>
                          <input className="form-control m-2" type="text" placeholder="Last Name" />
                          </Col>
                        </Row>
            
                        <input className="form-control m-2" type="number" placeholder="Mobile Phone Number" />

                        <Row>
                          <Col>
                          <input className="form-control m-2" type="text" placeholder="Village" />
                          </Col>

                          <Col>
                          <input className="form-control m-2" type="text" placeholder="City" />
                          </Col>
                        </Row>
                        
                        <div className="form-control m-2">
                        <Row>
                          <Col><label className="m-2">Experties Crops:</label></Col>
                          <Col>
                            <Form.Group className=" m-2" controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" label="Paddy" />
                            </Form.Group>
                          </Col>

                          <Col>
                            <Form.Group className="m-2" controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" label="Coconut" />
                            </Form.Group>
                          </Col>
                        </Row>
                        </div>
                        
                        <Form.Select aria-label="Default select example " className="form-control m-2">
                          <option value="dip">Dip.</option>
                          <option value="bsc">BSc.</option>
                          <option value="msc">MSc.</option>
                        </Form.Select>

                        
                        <input className="form-control m-2" type="email" placeholder="Enter Your Email" />

                        <input className="form-control m-2" type="text" placeholder="Enter NIC Number" />

                        <input className="form-control m-2" type="password" placeholder="Enter Your Password" />

                        <input className="form-control m-2" type="password" placeholder="Confirm Your Password" />


                        <Button className="btn btn-block m-2 site-btn-login"> Register </Button>
                        
                      <br></br> <br></br>
                      <hr />
                      <p> <b> Forget My Password? </b><Link><b> Froget Password </b> </Link> </p>

                      <p> <b> Already Have An Account ? </b><Link to="/login"><b> Login </b> </Link> </p>

                    </Form>


                  </Col>

                  <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                      <img className="onboardBanner" src={Login} />
                  </Col>
                </Row>

              </Col>
            </Row>
        </Container>
      </Fragment>
      
    )
  }
}

export default InstructorReg