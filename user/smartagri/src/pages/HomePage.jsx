import React, { Component, Fragment } from 'react'
// import FeatureProducts from '../components/home/FeatureProducts'
// import Categories from '../components/home/Categories'

import Supply from '../components/home/Supply'

import HomeNavMenuDesktop from '../components/home/HomeNavMenuDesktop'
import HomeSlider from '../components/home/HomeSlider'

import ReJurnels from '../components/home/ReJurnels'
import About from '../components/home/About'
import FooterDesktop from '../components/common/FooterDesktop'
import HomeNevMobile from '../components/home/HomeNevMobile'
import HomeTop from '../components/home/HomeTop'

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        {/* <HomeTop /> */}
        <div className="Desktop">
          <HomeNavMenuDesktop />
          
        </div>

        <div className="Mobile">
          <HomeNevMobile />
        </div>

        <HomeSlider />

        
        
        <ReJurnels />
        {/* <Collection /> */}
        {/* <FeatureProducts /> */}
        <Supply />
        <About />
       
        {/* <Categories /> */}
        <FooterDesktop />
        
      </Fragment>
    )
  }
}

export default HomePage