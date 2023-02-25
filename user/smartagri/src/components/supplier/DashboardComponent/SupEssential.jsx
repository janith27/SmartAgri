import axios from "axios";
import React, { Component, Fragment } from "react";
import AppURL from "../../../api/AppURL";
import { Col, Row, Card, Button } from "react-bootstrap";

class SupEssential extends Component {



  
  componentDidMount() {
    window.scroll(0, 0);
  }
  constructor() {
    super();
    this.state = {
      itemData: [],
      email: "",
      message: "",
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.MySupply(this.state.email))
      .then((response) => {
        this.setState({ itemData: response.data });
      })
      .catch((error) => {});
  }
  render() {
    this.state.email = this.props.user.email;
    console.log(this.state.uData);
    const orData = this.state.orderData;
    const MyView = orData.map((orData, i) => {
      return (
        <div>
          <div className="searchItemss">
            <img src={orData.image} alt="" className="siImg" />
            <div className="siDec">
              <h4 className="siTitles">{orData.product_name}</h4>
              <span className="siSubtitle">
             
              </span>
              <span className="siimportant">Rs.{orData.price}</span>
              <span className="siFinal">{orData.qty}</span>
            </div>
          </div>
        </div>
      );
    });

    return (
      <Fragment>
        <Row>
          <Col>
            <Card className="text-center cardappointment">
              <Card.Body>
                <Card.Text>My Items</Card.Text>
                <Row className="d-flex justify-content-center">{MyView}</Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default SupEssential;
