import React, { Component, Fragment } from 'react'
import { Container, Row, Card} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class NewArival extends Component {

  constructor(props){
    super(props);
    this.next=this.next.bind(this);
    this.previous=this.previous.bind(this)
  }

  next(){
    this.slider.slickNext();
  }

  previous(){
    this.slider.slickPrev();
  }

  render() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplayspeed:3000,
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
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
         <div className="section-title text-center mb-55">
            <h2>New Arival &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={this.previous}>
                <i className="fa fa-angle-left"></i>
              </a>
              &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                <i className="fa fa-angle-right"></i>
              </a>
            </h2>
            <p>some of our exclusive collection, you may like</p>
         </div>
            <Row>
            <Slider ref={c=>(this.slider=c)} {...settings}>
                <div>
                    <Card className="image-box">
                     <img className="center" src=""/>
                        <Card.Body>
                            <p className="product-name-on-card">janith maduranga</p>
                            <p className="product-price-on-card">Price</p> 
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className="image-box">
                     <img className="center" src=""/>
                        <Card.Body>
                            <p className="product-name-on-card">janith maduranga</p>
                            <p className="product-price-on-card">Price</p> 
                        </Card.Body>
                    </Card>
                </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
            </Slider>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default NewArival
