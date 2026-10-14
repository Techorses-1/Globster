import React from 'react'
import Hero from './HeroSection/Hero'
import WhoWeAre from './WhoWeAre/WhoWeAre'
import WhatWeDoList from './WhatWeDo/Whatwedolist'
import WhyGlobsterStats from './Whyglobster/WhyGlobsterStats'
import MakeAnOrderDiagonal from './MakeAnOrder/MakeAnOrderDiagonal'
import "./Home2.scss" ;
import NewHeroSection from './HeroSection/NewHeroSection'

const Home2 = () => {
  return (
    <>
      <NewHeroSection/>
      <WhoWeAre />

      <WhatWeDoList/>

      <WhyGlobsterStats />

      <MakeAnOrderDiagonal />
    </>
  )
}

export default Home2