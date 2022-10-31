import React, { Component} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import S1 from '../../assest/images/1.jpg';
import S2 from '../../assest/images/2.jpg';
import S3 from '../../assest/images/3.jpg';

class HomeSlider extends Component {
  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed:3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
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
      <div className="top">


<Slider {...settings}>
          <div>
           <img className="slider-img" src={S1} />
          </div>
          <div>
          <img className="slider-img" src={S2} />
          </div>
          <div>
          <img className="slider-img" src={S3} />
          </div>

        </Slider>





             </div>
    )
  }
}

export default HomeSlider
