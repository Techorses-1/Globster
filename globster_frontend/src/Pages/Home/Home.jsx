import React from 'react'
import Hero from './HeroSection/Hero'
import WhoWeAre from './WhoWeAre/WhoWeAre'
// import WhatWeDoSplit from './WhatWeDo/WhatWeDoSplit'
import WhatWeDoList from './WhatWeDo/Whatwedolist'
// import WhyGlobsterTimeline from './Whyglobster/Whyglobstertimeline'
import WhyGlobsterStats from './Whyglobster/WhyGlobsterStats'
// import WhyGlobsterProof from './Whyglobster/WhyGlobsterProof'
// import MakeAnOrderSplit from './MakeAnOrder/MakeAnOrderSplit'
import MakeAnOrderDiagonal from './MakeAnOrder/MakeAnOrderDiagonal'
import "./Home.scss" ;

const Home = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />

      {/* <WhatWeDoSplit/> */}
      <WhatWeDoList/>

      {/* <WhyGlobsterTimeline /> */}
      <WhyGlobsterStats />
      {/* <WhyGlobsterProof /> */}

      {/* <MakeAnOrderSplit /> */}
      <MakeAnOrderDiagonal />
    </>
  )
}

export default Home