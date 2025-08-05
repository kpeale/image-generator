import React from 'react';
import Hero from './Hero/Hero';
import RecentImage from './RecentImages/RecentImage';
import About from './About/About';
import Price from './Pricing/Price';
import Reviews from './Reviews/Reviews';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <RecentImage />
      <About />
      <Price />
      <Reviews />
    </div>
  );
};

export default Home;
