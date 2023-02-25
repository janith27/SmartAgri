import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppURL from "../api/AppURL";

export class CheckoutOrder extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      title: "",
      first_name: "",
      last_name: "",
      address: "",
      phoneno: "",
      qty: {},
      price: 100,
      collect: "",
    };
  }

  // Farmer Register Form Submit Method
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      title: this.state.title,
      fname: this.state.fname,
      lname: this.state.lname,
      address: this.state.address,
      mobileno: this.state.mobileno,
      qty: this.state.qty,
      collect: this.state.collect,
      price: this.state.price,
    };

    axios
      .post(AppURL.PlaceOrder, data)
      .then((response) => {
        
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
    this.state.email = this.props.email;
    this.state.price=this.props.unitPrice;
    // new edit for redirect to farmer dashboard
    if (this.state.loggedIn) {
      return <Navigate to="/" />;
    }
    //end new edit

    return (
      <Fragment>
        <Container>
          <Row className="p-2">
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
                  <h4 className="section-title-login"> Place Order </h4>
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

                  <input
                    className="form-control m-2"
                    type="text"
                    placeholder="Enter Quantity"
                    onChange={(e) => {
                      this.setState({ qty: e.target.value });
                    }}
                  />
                  <input
                    className="form-control m-2"
                    type="text"
                    placeholder="Enter Full Address"
                    onChange={(e) => {
                      this.setState({ address: e.target.value });
                    }}
                  />

                  <select
                    onChange={(e) => {
                      this.setState({ collect: e.target.value });
                    }}
                    className="form-control m-2"
                  >
                    <option value="" selected disabled>
                      Collect
                    </option>
                    <option value="Collect_from_store">Collect from store</option>
                    <option value="By_Courrier_Service">By Courrier Service</option>
                  </select>

                  <Button
                    type="submit"
                    className="btn btn-block m-2 site-btn-login"
                  >
                    Place Order
                  </Button>
                </Form>
              </Col>
            </Row>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default CheckoutOrder;
