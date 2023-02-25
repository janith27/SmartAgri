import React, { Component, Fragment } from "react";
import { Col, Row, Card,Button } from "react-bootstrap";
import axios from "axios";
import AppURL from "../../../api/AppURL";
import { Link } from "react-router-dom";

class JournelView extends Component {
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
        <Card
          border="primary"
          style={{ width: "18rem" }}
          className="journelcard "
        >
          <Card.Body>
            <Row>
              <Col xs={3} md={3}>
                <Card.Img src={journalData.image} />
              </Col>
              <Col xs={7} md={7}>
                <Card.Title>{journalData.name}</Card.Title>
                <Card.Text>{journalData.description}</Card.Text>
              </Col>
              <Col xs={2} md={2}>
              <Link to={"/journalview/" + journalData.id}>
                      <Button >
                        View
                      </Button>
                    </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      );
    });
    return (
      <Fragment>
        <Col>
          {/* <div className="d-flex justify-content-center"> */}
          <Row>
            <h1>Journels</h1>
          </Row>
          <Row className="d-flex justify-content-center">{MyView}</Row>
          {/* </div> */}
        </Col>
      </Fragment>
    );
  }
}

export default JournelView;
