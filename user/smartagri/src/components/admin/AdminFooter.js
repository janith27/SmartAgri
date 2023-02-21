import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

function AdminFooter() {
  return (
    <Fragment>
      <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
        <Col>
          <Row>
            <h6 className="text-white">
              © Copyright 2022 by SmartAgri, All Rights Reserved
            </h6>
          </Row>
        </Col>
      </Container>
    </Fragment>
  );
}

export default AdminFooter;
