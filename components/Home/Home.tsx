import React from 'react';
import Hero from './Hero/Hero';
import RecentImage from './RecentImages/RecentImage';
import About from './About/About';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <RecentImage />
      <About />
    </div>
  );
};

export default Home;
