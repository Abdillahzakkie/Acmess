import React from 'react';
import Hero from './hero/Hero';
import LatestProduct from './LatestProducts';
import Cta from './cta/Cta';
import Feature from './feature/Feature';
import Testimonials from './testimonials/Testimonials';


const HomeScreen = () => {
  return (
    <>
        <Hero />
        <Feature />
        <LatestProduct />
        <Testimonials />
        <Cta />
    </>
  )
}

export default HomeScreen;