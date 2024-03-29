import React, { Component, Fragment } from "react";
import { Col, Row, Card } from "react-bootstrap";
import AppURL from "../../../api/AppURL";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

class AppointmentCreate extends Component {
  constructor() {
    super();
    this.state = {
      InsData: [],
      ucity: "",
    };
  }

  // get instructor
  componentDidMount() {
    axios
      .get(AppURL.GetInstructorData(this.state.ucity))
      .then((response) => {
        this.setState({
          InsData: response.data,
        });
      })
      .catch((error) => {});
  }

  render() {
    const myUser = this.props.famData;
    this.state.ucity = myUser.city;
    const uname = myUser.name;
    console.log(myUser.city);

    const InsList = this.state.InsData;
    const MyView = InsList.map((InsList, i) => {
      return (
        <Link to={"/appointmentform/" + InsList.email}>
          <div>
            <Card
              border="primary"
              style={{ width: "18rem" }}
              className="appointmentcard "
            >
              <Card.Body>
                <Row>
                  <Col xs={3} md={3}>
                    <Card.Img src="holder.js/100px180" />
                  </Col>
                  <Col xs={7} md={7}>
                    <Card.Title>
                      {InsList.title}. {InsList.fname} {InsList.lname}
                    </Card.Title>
                    <Card.Text>Contact No: {InsList.mobileno}</Card.Text>
                    <Card.Text>Email: {InsList.email}</Card.Text>
                    <Card.Text>Specialized Crop: {InsList.crop}</Card.Text>
                    <Card.Text>
                      Heights Education level: {InsList.edu}
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Link>
      );
    });

    return (
      <Fragment>
        <div className="title">
          <h2>Sugusted Instructors to you {uname}</h2>
        </div>
        <Row className="d-flex justify-content-center">{MyView}</Row>
      </Fragment>
    );
  }
}

export default AppointmentCreate;
