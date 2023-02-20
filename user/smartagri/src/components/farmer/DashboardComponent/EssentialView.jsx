import React, { Component, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Supply from "../../home/Supply";
import axios from "axios";
import AppURL from "../../../api/AppURL";

class EssentialView extends Component {
  constructor() {
    super();
    this.state = {
      appointmentData: [],
      email: "",
      message: "",
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.AppointmentView(this.state.email))
      .then((response) => {
        this.setState({ appointmentData: response.data });
      })
      .catch((error) => {});
  }
  render() {
    const myUser = this.props.user;
    this.state.email = myUser.email;
    console.log(myUser.city);
    const appintData = this.state.appointmentData;
    const MyView = appintData.map((appintData, i) => {
      return (
        <Card
          border="primary"
          style={{ width: "18rem" }}
          className="crophistorycard"
        >
          <Card.Body>
            <Row>
              <Col xs={3} md={3}>
                <Card.Text>{appintData.date}</Card.Text>
              </Col>
              <Col xs={3} md={3}>
                <Card.Text>{appintData.time}</Card.Text>
              </Col>
              <Col xs={3} md={3}>
                <Card.Text>{appintData.description}</Card.Text>
              </Col>
              <Col xs={3} md={3}>
                <Card.Text>{appintData.status}</Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      );
    });

    return (
      <Fragment>
        <Row>
          <Col>
            <Card className="text-center cardappointment">
              <Card.Body>
                <Card.Title>Appointment</Card.Title>
                <Card.Text>You have an appointment</Card.Text>
                <Row className="d-flex justify-content-center">{MyView}</Row>
                <Link to="/farmerappointmentcreate" className="h4 btn">
                  <Button variant="primary">Create Appointment</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Supply />
        </Row>
      </Fragment>
    );
  }
}

export default EssentialView;
