import React, { Component, Fragment } from "react";
import { Col, Row, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import AppURL from "../../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class AppointmentForm extends Component {
  constructor() {
    super();
    this.state = {
      insData: {},
      ins: "",
      uEmail: "",
      date: "",
      description: "",
      time: "",
    };
  }

  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      farmer_email: this.state.uEmail,
      instructor_email: this.state.ins,
      date: this.state.date,
      time: this.state.time,
      description: this.state.description,
    };

    axios
      .post(AppURL.CreateAppointment, data)
      .then((response) => {
        toast.success("Log Submit Successfully");
        //  this.setState({message:response.data.message})

        //  toast.success(this.state.message,{
        //       position: "top-right"
        //  });
        document.getElementById("croplogform").reset();
      })
      .catch((error) => {
        this.setState({ message: error.response.data.message });
        toast.error(this.state.message, {
          position: "top-right",
        });
      });
  };

  componentDidMount() {
    window.scroll(0, 0);
    axios
      .get(AppURL.UserData)
      .then((response) => {
        //  this.setUser(response.data)
        this.setState({ uEmail: response.data.email });
      })
      .catch((error) => {});
  }

  render() {
    this.setState.insData = this.props.data;
    console.log(this.props.data.email);
    this.state.ins = this.props.data.email;
    // this.state.uEmail = this.props.user.email;
    //  console.log(this.state.uEmail);
    //  this.state.insData.map((email)=>
    //   console.log(email)
    //  );

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
}

export default AppointmentForm;
