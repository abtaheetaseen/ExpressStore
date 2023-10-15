import React from 'react'
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import FeatureProducts from './components/FeatureProducts';

const Home = () => {
  const data = {
    name: 'Express Store',
  }
  return (
    <>
    <HeroSection myData={data}/>
    <FeatureProducts />
    <Services />
    </>
  )
};

export default Home
