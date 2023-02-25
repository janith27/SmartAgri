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
      qty: 0,
      price: 0,
      collect: "",
      productid: "",
      productName: "",
    };
  }

  // Farmer Register Form Submit Method
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      title: this.state.title,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      address: this.state.address,
      phoneno: this.state.phoneno,
      qty: this.state.qty,
      collect: this.state.collect,
      price: this.state.price,
      productid: this.state.productid,
    };

    axios
      .post(AppURL.PlaceOrder, data)
      .then((response) => {
        this.setState({ message: response.data.message });
        toast.success("Place Order Successfully");
        document.getElementById("onboardForm").reset();
      })
      .catch((error) => {
        this.setState({ message: error.response.data.message });
        toast.error("Place Order Error");
        toast.error(this.state.message, {
          position: "top-right",
        });
      });
  };

  render() {
    this.state.email = this.props.user;
    this.state.productid = this.props.proId;
    this.state.price = this.props.proPrice;
    this.state.productName = this.props.proName;

    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Row className="text-center">
              <Col
                className="d-flex justify-content-center"
                md={12}
                lg={12}
                sm={12}
                xs={12}
              >
                <Form
                  className="onboardForm"
                  onSubmit={this.formSubmit}
                  id="fromreset"
                >
                  <h3 className="section-title-login">
                    Product Name : {this.state.productName}{" "}
                  </h3>
                  <h3 className="section-title-login">
                    Product Unit Price :Rs. {this.state.price}.00{" "}
                  </h3>
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
                          this.setState({ first_name: e.target.value });
                        }}
                      />
                    </Col>

                    <Col>
                      <input
                        className="form-control m-2"
                        type="text"
                        placeholder="Enter last name"
                        onChange={(e) => {
                          this.setState({ last_name: e.target.value });
                        }}
                      />
                    </Col>
                  </Row>
                  <input
                    className="form-control m-2"
                    type="text"
                    placeholder="Enter mobile no"
                    onChange={(e) => {
                      this.setState({ phoneno: e.target.value });
                    }}
                  />

                  <input
                    className="form-control m-2"
                    type="number"
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
                    <option value="Collect_from_store">
                      Collect from store
                    </option>
                    <option value="By_Courrier_Service">
                      By Courrier Service
                    </option>
                  </select>
                  <Link
                to={
                  "/checkoutcomplete/" +
                  this.state.productid   +
                  "/" +
                  this.state.price +
                  "/" +
                  this.state.productName +
                  "/" +
                  this.state.qty
                }
              >
                  <Button
                    type="submit"
                    className="btn btn-block m-2 site-btn-login"
                  >
                    Place Order
                  </Button>
                  </Link>
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
