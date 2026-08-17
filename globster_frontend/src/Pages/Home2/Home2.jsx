import React from 'react'
import Hero from './HeroSection/Hero'
import WhoWeAre from './WhoWeAre/WhoWeAre'
import WhatWeDoList from './WhatWeDo/Whatwedolist'
import WhyGlobsterStats from './Whyglobster/WhyGlobsterStats'
import MakeAnOrderDiagonal from './MakeAnOrder/MakeAnOrderDiagonal'
import "./Home2.scss" ;
import Footer2 from './Footer2/Footer2'

const Home2 = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />

      <WhatWeDoList/>

      <WhyGlobsterStats />

      <MakeAnOrderDiagonal />
      {/* <Footer2/> */}
    </>
  )
}

export default Home2