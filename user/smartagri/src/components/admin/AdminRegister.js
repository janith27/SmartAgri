import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Login from "../../assest/images/login.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppURL from "../../api/AppURL";

class AdminRegister extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      message: "",
      role: "0",
      loggedIn: false,
      city: "admin",
    };
  }

  // Farmer Register Form Submit Method
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      city: this.state.city,
      role: this.state.role,
    };

    axios
      .post(AppURL.AdminRegister, data)
      .then((response) => {
        //for direct access to farmer dashboard my new add
        localStorage.setItem("token", response.data.token);
        this.setState({ loggedIn: true });
        //end new edit

        this.setState({ message: response.data.message });

        toast.success(this.state.message, {
          position: "top-right",
        });
        //  document.getElementById("fromreset").reset();
      })
      .catch((error) => {
        this.setState({ message: error.response.data.message });
        toast.error(this.state.message, {
          position: "top-right",
        });
      });
  };

  render() {
    // new edit for redirect to farmer dashboard
    if (this.state.loggedIn) {
      return <Navigate to="/admindashboard" />;
    }
    //end new edit

    return (
      <Fragment>
        <Container>
          <Row className="p-2">
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
                  md={6}
                  lg={6}
                  sm={12}
                  xs={12}
                >
                  <Form
                    className="onboardForm"
                    onSubmit={this.formSubmit}
                    id="fromreset"
                  >
                    <h4 className="section-title-login"> ADMIN REGISTER </h4>
                    <Row>
                      <Col>
                        <input
                          className="form-control m-2"
                          type="text"
                          placeholder="Enter Name"
                          onChange={(e) => {
                            this.setState({ name: e.target.value });
                          }}
                        />
                      </Col>
                    </Row>
                    <input
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Email"
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                    <input
                      className="form-control m-2"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />
                    <input
                      className="form-control m-2"
                      type="password"
                      placeholder="Confirm Password"
                      onChange={(e) => {
                        this.setState({
                          password_confirmation: e.target.value,
                        });
                      }}
                    />
                    <Button
                      type="submit"
                      className="btn btn-block m-2 site-btn-login"
                    >
                      Register
                    </Button>
                    <br></br> <br></br>
                  </Form>
                </Col>

                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={Login} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default AdminRegister;
