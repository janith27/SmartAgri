import React, { Component, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import AppURL from "../../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class InsAppointment extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
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
      .get(AppURL.InstructorGetMyAppointment(this.state.email))
      .then((response) => {
        this.setState({ appointmentData: response.data });
      })
      .catch((error) => {});
  }

  updateStatus = (event) => {
    let id = event.target.getAttribute("id");
    // console.log(id);
    axios
      .put(AppURL.AppointmentStatusUpdate(id))
      .then((response) => {
        this.state({ pageRefreshStatus: true });
        toast.success("Appoinment Cancel Successfully", {
          position: "top-left",
        });
        window.location.reload(true);
      })
      .catch((error) => {
        window.location.reload(true);
      });
  };

  render() {
    const myUser = this.props.insData;
    this.state.email = myUser.email;
    // console.log(this.state.email)
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
              <Col xs={2} md={2}>
                <Card.Text>{appintData.time}</Card.Text>
              </Col>
              <Col xs={3} md={3}>
                <Card.Text>{appintData.description}</Card.Text>
              </Col>
              <Col xs={2} md={2}>
                <Card.Text>{appintData.status}</Card.Text>
              </Col>
              <Col xs={2} md={2}>
                <Button
                  variant="danger"
                  style={{ padding: "3px" }}
                  id={appintData.id}
                  onClick={this.updateStatus}
                >
                  Cancel
                </Button>
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
                <Card.Text>You have an appointment</Card.Text>
                <Row className="d-flex justify-content-center">{MyView}</Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
      </Fragment>
    );
  
  }
}

export default InsAppointment