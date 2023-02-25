import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

import AppURL from "../../api/AppURL";
import axios from "axios";

class ReJurnels extends Component {
  constructor() {
    super();
    this.state = {
      journalDatas: [],
      email: "",
      message: "",
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.JournalView)
      .then((response) => {
        this.setState({ journalDatas: response.data });
      })
      .catch((error) => {});
  }
  render() {
    const journalData = this.state.journalDatas;
    const MyView = journalData.map((journalData, i) => {
      return (
        <Col classname="p-0" x={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
            <img className="center w-75" src={journalData.image} />
            <Card.Body>
              <p className="product-name-on-card">{journalData.name}</p>
            </Card.Body>
          </Card>
        </Col>
      );
    });

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Recent Jurnels</h2>
            <p>some of our exclusive Jurnels when published by Instructors</p>
          </div>
          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default ReJurnels;
