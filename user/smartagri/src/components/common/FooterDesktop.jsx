import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import AnyUserMsgform from './AnyUserMsgform'


export class FooterDesktop extends Component {
     render() {
          return (
               <Fragment>
                    <div className="footerback m-0 mt-5 pt-3 shadow-sm"> 
                         <Container>
                              <Row className="p-2">
                                   <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                                        <Row className="text-center">
                                             <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                                  
                                                  <AnyUserMsgform />


                                             </Col>

                                             <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                                  <br></br><br></br>
                                                  <p className="section-title-contact">
                                                       Matara, Sri Lanka.
                                                       Email: smartagricsp@gmail.com
                                                  </p>

                                                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5258.455176085379!2d80.57887392242732!3d5.939424640001683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1391b4a29e707%3A0xd54277175e326bc2!2sUniversity%20of%20Ruhuna!5e0!3m2!1sen!2slk!4v1668424747005!5m2!1sen!2slk" 
                                                  width="300" height="300" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>

                                             </Col>
                                        </Row>

                                   </Col>
                              </Row>
                         </Container>

                         <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
                              <Container>
                                   <Row>
                                        <h6 className="text-white">© Copyright 2022 by SmartAgri, All Rights Reserved</h6>
                                   </Row>
                              </Container>
                         </Container> 
                         
                    </div>

               </Fragment>
          )
     }
}
export default FooterDesktop