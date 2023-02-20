import React, { Component, Fragment } from "react";
import { Col, Row, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import AppURL from "../../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

function AppointmentCreateForm({fEmail, insEmail}) {
  // const insEmail = useParams();
  // console.log(insEmail.keyemail);
  console.log(fEmail);
console.log(insEmail)
  return (
    <Fragment>
      <div className="cropdetail d-flex justify-content-center">
        <Row>
          <Col>
            <h1>Appointment</h1>

            <Form
              id="croplogform"
              // onSubmit={this.formSubmit}
              className="onboardForm"
            >
              <Form.Control
                className="form-control m-2"
                as="textarea"
                rows={3}
                placeholder="Enter Description"
                //   onChange={(e) => {
                //     this.setState({ description: e.target.value });
                //   }}
              />
              <input
                className="form-control m-2"
                type="date"
                placeholder="Enter Date"
                //   onChange={(e) => {
                //     this.setState({ date: e.target.value });
                //   }}
              />
              <input
                className="form-control m-2"
                type="time"
                placeholder="Enter Time"
                //   onChange={(e) => {
                //     this.setState({ time: e.target.value });
                //   }}
              />
              <Button
                id="sendBtn"
                type="submit"
                className="btn btn-block m-2 site-btn-login"
              >
                {" "}
                Submit{" "}
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </Fragment>
  );
}

export default AppointmentCreateForm;
