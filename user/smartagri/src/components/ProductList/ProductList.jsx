import React, { Component, Fragment } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import AppURL from "../../api/AppURL";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default class ProductList extends Component {
  state = {
    product: [],
  };

  componentDidMount() {
    axios
      .get(AppURL.SupplyView)
      .then((response) => {
        this.setState({ product: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const post = this.state.product;
    const allproducts = post.map((post, idx) => {
      return (
        <Col classname="p-0" x={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
            <img className="center" src={post.image} />
            <Card.Body>
              <p className="product-name-on-card">{post.product_name}</p>
              <p className="product-weight-on-card">{post.description}</p>
              <p className="product-price-on-card">{post.price}</p>
              <Link
                to={
                  "/checkout/" +
                  post.id +
                  "/" +
                  post.price +
                  "/" +
                  post.product_name
                }
              >
                <Button variant="primary">BUY NOW</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      );
    });

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <Row>{allproducts}</Row>
        </Container>
      </Fragment>
    );
  }
}
