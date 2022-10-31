import React, { Component, Fragment } from 'react'
import FeatureProducts from '../components/home/FeatureProducts'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import NewArival from '../components/home/NewArival'
//import HomeTop from '../components/home/HomeTop'
import HomeNavMenuDesktop from '../components/home/HomeNavMenuDesktop'
import HomeSlider from '../components/home/HomeSlider'
// import NevMobile from '../components/home/NevMobile'

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <HomeSlider />
        {/* <NevMobile /> */}
        <HomeNavMenuDesktop />
        {/* <HomeTop /> */}
        <FeatureProducts />
        <NewArival />
        <Collection />
        <Categories />
      </Fragment>
    )
  }
}

export default HomePage