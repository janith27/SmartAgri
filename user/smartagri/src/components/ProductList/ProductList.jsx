import React, { Component, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import AppURL from "../../api/AppURL";
// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

export default class ProductList extends Component {
  state = {
    product: [],
  };

  componentDidMount() {
    axios
      .get(AppURL.ProductData)
      .then((response) => {
        this.setState({ product: response.ProductData });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const post = this.state.product;
    const allproducts = this.state.product.map((product, idx) => {
      return (
        <Card className="image-box">
          <img className="center" src={product.img} />
          <Card.Body>
            <p className="product-name-on-card">{product.name}</p>
            <p className="product-weight-on-card">{product.description}</p>
            <p className="product-price-on-card">{product.price}</p>
          </Card.Body>
        </Card>
      );
    });

    return (
      <Fragment>
        <Row>
          <Col md={4} lg={3} sm={6} xs={12}>
            {/* {allproducts} */}
          </Col>
        </Row>
      </Fragment>
    );
  }
}
