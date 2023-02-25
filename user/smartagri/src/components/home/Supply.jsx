import React, { Component, Fragment } from "react";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import ph1 from "../../assest/images/supply/urea.jpg";
import AppURL from "../../api/AppURL";
import axios from "axios";

class Supply extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);

    this.state = {
      supplyData: [],
      email: "",
      message: "",
    };
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  componentDidMount() {
    axios
      .get(AppURL.SupplyView)
      .then((response) => {
        this.setState({ supplyData: response.data });
      })
      .catch((error) => {});
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplayspeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const post = this.state.supplyData;
    const allproducts = post.map((post, idx) => {
      return (
        <Card className="image-box">
          <img className="center" src={post.image} />
          <Card.Body>
            <p className="product-name-on-card">{post.product_name}</p>
            <p className="product-weight-on-card">{post.description}</p>
            <p className="product-price-on-card">{post.price}</p>
          </Card.Body>
        </Card>
      );
    });

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>
              Supply &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={this.previous}>
                <i className="fa fa-angle-left"></i>
              </a>
              &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                <i className="fa fa-angle-right"></i>
              </a>
            </h2>
            <p>some of our exclusive supply from suppliers.</p>
          </div>
          <div>
            <Row>
              <Slider ref={(c) => (this.slider = c)} {...settings}>
                {allproducts}
                
              </Slider>
            </Row>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Supply;
