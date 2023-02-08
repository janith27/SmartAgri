import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnyUserMsgform from "./AnyUserMsgform";

class FooterMobile extends Component {
  render() {
    return (
      <Fragment>
        <div className="footerback m-0 mt-5 pt-3 shadow-sm">
          <Container>
            <Row className="p-1">
              <Col
                className="shadow-sm bg-white mt-2"
                md={12}
                lg={12}
                sm={12}
                xs={12}
              >
                <Row className="text-center">
                  <Col
                    className="d-flex justify-content-center"
                    md={12}
                    lg={12}
                    sm={12}
                    xs={12}
                  >
                    
                    <AnyUserMsgform />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

          <Container fluid={true} className="text-center pt-3 pb-1 bg-white">
            <Container>
              <Row className="p-2">
                <p className="section-title-contact">
                  Matara, Sri Lanka. Email: smartagricsp@gmail.com
                </p>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5258.455176085379!2d80.57887392242732!3d5.939424640001683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1391b4a29e707%3A0xd54277175e326bc2!2sUniversity%20of%20Ruhuna!5e0!3m2!1sen!2slk!4v1668424747005!5m2!1sen!2slk"
                  width="300"
                  height="300"
                  styles="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </Row>
            </Container>
          </Container>

          <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
            <Container>
              <Row>
                <h6 className="text-white">
                  © Copyright 2022 by SmartAgri, All Rights Reserved
                </h6>
              </Row>
            </Container>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FooterMobile;
