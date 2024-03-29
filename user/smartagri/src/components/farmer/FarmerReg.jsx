import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
// import { Link } from 'react-router-dom'
import Login from "../../assest/images/login.png";
import axios from "axios";
import AppURL from "../../api/AppURL";
import Citylist from "../../components/dropdownlist/Citylist.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class FarmerReg extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      message: "",
      role: "1",
      loggedIn: false,
      title: "",
      fname: "",
      lname: "",
      street1: "",
      street2: "",
      city: "",
      mobileno: "",
      crop: "",
    };
  }

  // Farmer Register Form Submit Method
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.fname,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      role: this.state.role,
      title: this.state.title,
      fname: this.state.fname,
      lname: this.state.lname,
      street1: this.state.street1,
      street2: this.state.street2,
      city: this.state.city,
      mobileno: this.state.mobileno,
      crop: this.state.crop,
    };

    axios
      .post(AppURL.FarmerRegister, data)
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
      return <Navigate to="/farmerdashboard" />;
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
                    <h4 className="section-title-login"> FARMER REGISTER </h4>
                    <select
                      onChange={(e) => {
                        this.setState({ title: e.target.value });
                      }}
                      className="form-control m-2"
                    >
                      <option value="" selected disabled>
                        Title
                      </option>
                      <option value="Mr">Mr</option>
                      <option value="Miss">Miss</option>
                      <option value="Mrs">Mrs</option>
                    </select>
                    {/* <input className="form-control m-2" type="text" placeholder="Enter title" onChange={(e)=>{this.setState({title:e.target.value})}} /> */}
                    <Row>
                      <Col>
                        <input
                          className="form-control m-2"
                          type="text"
                          placeholder="Enter first name"
                          onChange={(e) => {
                            this.setState({ fname: e.target.value });
                          }}
                        />
                      </Col>

                      <Col>
                        <input
                          className="form-control m-2"
                          type="text"
                          placeholder="Enter last name"
                          onChange={(e) => {
                            this.setState({ lname: e.target.value });
                          }}
                        />
                      </Col>
                    </Row>
                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter mobile no"
                      onChange={(e) => {
                        this.setState({ mobileno: e.target.value });
                      }}
                    />
                    <Row>
                      <Col>
                        <input
                          className="form-control m-2"
                          type="text"
                          placeholder="Enter street1 name"
                          onChange={(e) => {
                            this.setState({ street1: e.target.value });
                          }}
                        />
                      </Col>

                      <Col>
                        <input
                          className="form-control m-2"
                          type="text"
                          placeholder="Enter street2 name"
                          onChange={(e) => {
                            this.setState({ street2: e.target.value });
                          }}
                        />
                      </Col>
                    </Row>
                    {/* <input className="form-control m-2" type="text" placeholder="Enter city" onChange={(e)=>{this.setState({city:e.target.value})}} /> */}
                    {/* new add */}
                    <select
                      onChange={(e) => {
                        this.setState({ city: e.target.value });
                      }}
                      className="form-control m-2"
                    >
                      <option value="" selected disabled>
                        Select City
                      </option>
                      {Citylist.map((getcity) => (
                        <option value={getcity.value}>{getcity.cname}</option>
                      ))}
                    </select>
                    {/* end new add */}
                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter crop"
                      onChange={(e) => {
                        this.setState({ crop: e.target.value });
                      }}
                    />
                    <input
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Your Email"
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                    <input
                      className="form-control m-2"
                      type="password"
                      placeholder="Your New Password"
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />
                    <input
                      className="form-control m-2"
                      type="password"
                      placeholder="Confirm Your Password"
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
                      {" "}
                      Register{" "}
                    </Button>
                    <br></br> <br></br>
                    <hr />
                    <p>
                      {" "}
                      <b> Already Have An Account ? </b>
                      <Link to="/login">
                        <b> Login </b>{" "}
                      </Link>{" "}
                    </p>
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

export default FarmerReg;
