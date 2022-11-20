import React, { Component, Fragment } from 'react'
import Supply from '../components/home/Supply'
import HomeNavMenuDesktop from '../components/home/HomeNavMenuDesktop'
import HomeSlider from '../components/home/HomeSlider'
import ReJurnels from '../components/home/ReJurnels'
import About from '../components/home/About'
import FooterDesktop from '../components/common/FooterDesktop'
import HomeNevMobile from '../components/home/HomeNevMobile'
import FooterMobile from '../components/common/FooterMobile'
import axios from 'axios'
import AppURL from '../api/AppURL'

export class HomePage extends Component {

  componentDidMount(){
    window.scroll(0,0);
    this.GetVisitorDetails();
  }

  GetVisitorDetails =()=>{
    axios.get(AppURL.VisitorDetails).then().catch()
  }


  render() {
    return (
      <Fragment>
        
        <div className="Desktop">
          <HomeNavMenuDesktop />
          
        </div>

        <div className="Mobile">
          <HomeNevMobile />
        </div>

        <HomeSlider />
        <ReJurnels />
        <Supply />
        <About />

        <div className="Desktop">
          <FooterDesktop />
          
        </div>

        <div className="Mobile">
          <FooterMobile />
        </div>
        
        
      </Fragment>
    )
  }
}

export default HomePage