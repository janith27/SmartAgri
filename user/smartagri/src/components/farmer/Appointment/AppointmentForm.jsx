import React, { Component, Fragment } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import axios from "axios";
import AppURL from "../../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";

class AppointmentForm extends Component {
  constructor() {
    super();
    this.state = {
      insEmail: "",
      fEmail: "",
      date: "",
      description: "",
      time: "",
    };
  }

  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      farmer_email: this.state.fEmail,
      instructor_email: this.state.insEmail,
      date: this.state.date,
      time: this.state.time,
      description: this.state.description,
    };

    axios
      .post(AppURL.CreateAppointment, data)
      .then((response) => {
        toast.success("Appointment Submit Successfully");
        document.getElementById("croplogform").reset();
      })
      .catch((error) => {
        this.setState({ message: error.response.data.message });
        toast.error(this.state.message, {
          position: "top-right",
        });
      });
  };

  render() {
    this.state.fEmail = this.props.fEmail;
    // console.log(this.props.fEmail);

    this.state.insEmail = this.props.insEmail;
    // console.log(this.props.insEmail);

    return (
      <Fragment>
        <div className="cropdetail d-flex justify-content-center">
          <Row>
            <Col>
              <h1>Appointment</h1>

              <Form
                id="croplogform"
                onSubmit={this.formSubmit}
                className="onboardForm"
              >
                <Form.Control
                  className="form-control m-2"
                  as="textarea"
                  rows={3}
                  placeholder="Enter Description"
                  onChange={(e) => {
                    this.setState({ description: e.target.value });
                  }}
                />
                <input
                  className="form-control m-2"
                  type="date"
                  placeholder="Enter Date"
                  onChange={(e) => {
                    this.setState({ date: e.target.value });
                  }}
                />
                <input
                  className="form-control m-2"
                  type="time"
                  placeholder="Enter Time"
                  onChange={(e) => {
                    this.setState({ time: e.target.value });
                  }}
                />
                <Button
                  id="sendBtn"
                  type="submit"
                  className="btn btn-block m-2 site-btn-login"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default AppointmentForm;
