
import React from 'react';
import Hero from '../components/Hero';
import ValueProp from '../components/ValueProp';
import FeatureSplit from '../components/FeatureSplit';
import VisualStoryTiles from '../components/VisualStoryTiles';
import BrandStatement from '../components/BrandStatement';
import Testimonial from '../components/Testimonial';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ValueProp />
      <FeatureSplit />
      <VisualStoryTiles />
      <BrandStatement />
      <Testimonial />
    </>
  );
};

export default Home;
