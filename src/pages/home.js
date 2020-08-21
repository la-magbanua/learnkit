import React from 'react'
import Hero from 'components/hero/hero'
import Sect from 'components/sect/sect'
import Feats from 'components/feats/feats'
import Testimonial from 'components/testimonial/testimonial'
import Stats from 'components/stats/stats'
import Pricing from 'components/pricing/pricing'
import CTA from 'components/cta/cta'

const Home = () => {
  return (
    <>
      <Hero />
      <Sect />
      <Testimonial />
      <Feats />
      <Stats />
      <Pricing />
      <CTA />
    </>
  )
}

export default Home
