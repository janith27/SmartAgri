import React, { Component, Fragment } from 'react'
// import FeatureProducts from '../components/home/FeatureProducts'
// import Categories from '../components/home/Categories'

import Supply from '../components/home/Supply'
//import HomeTop from '../components/home/HomeTop'
import HomeNavMenuDesktop from '../components/home/HomeNavMenuDesktop'
import HomeSlider from '../components/home/HomeSlider'
// import DrawerAppBar from '../components/home/DrawerAppBar'
import ReJurnels from '../components/home/ReJurnels'
import About from '../components/home/About'
import FooterDesktop from '../components/common/FooterDesktop'
// import NevMobile from '../components/home/NevMobile'

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <HomeSlider />
        {/* <NevMobile /> */}
        <HomeNavMenuDesktop />
       
        {/* <DrawerAppBar/> */}
        {/* <HomeTop /> */}
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