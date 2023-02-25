import axios from "axios";
import React, { Component, Fragment } from "react";
import AppURL from "../../../api/AppURL";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class MyOrders extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  constructor() {
    super();
    this.state = {
      orderData: {},
      uData: {},
      message: "",
    };
  }
  componentDidMount() {
    axios.get(AppURL.SupplierGetOrders(this.state.uData.email));
    console
      .log(this.state.uData.email)
      .then((response) => {
        this.setState({ orderData: response.data });
      })
      .catch((error) => {});
  }
  render() {
    this.state.uData = this.props.user;
    // console.log(this.state.uData);
    const orData = this.state.orderData;
    const MyView = orData.map((orData, i) => {
      return (
        <Card
          border="primary"
          style={{ width: "18rem" }}
          className="crophistorycard"
        >
          <Card.Body>
            <Row>
              <Card.Text>{orData.first_name}</Card.Text>
              <Card.Text>{orData.last_name}</Card.Text>
              <Card.Text>{orData.address}</Card.Text>
              <Card.Text>{orData.collect}</Card.Text>
              <Card.Text>{orData.email}</Card.Text>
              <Card.Text>{orData.phoneno}</Card.Text>
              <Card.Text>{orData.price}</Card.Text>
              <Card.Text>{orData.qty}</Card.Text>
              <Card.Text>{orData.productid}</Card.Text>
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

export default MyOrders;
