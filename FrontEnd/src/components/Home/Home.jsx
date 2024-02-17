import React from 'react'
import HomeSection from './HomeComponent/HomeSection'
import HomeImages from './HomeComponent/HomeImages'
import HomeAbout from './HomeComponent/HomeAbout'
import HomeCartProduct from './HomeComponent/HomeCartProduct'
import HomeCv from './HomeComponent/HomeCv'
import HomeCountr from './HomeComponent/HomeCountr'

const Home = () => {
  return (
    <div>
      <HomeSection />
      <HomeImages />
      <HomeAbout />
      <HomeCartProduct />
      <HomeCv />
      <HomeCountr />
    </div>
  )
}

export default Home