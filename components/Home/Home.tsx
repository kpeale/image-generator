'use client';
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import RecentImage from './RecentImages/RecentImage';
import About from './About/About';
import Price from './Pricing/Price';
import Reviews from './Reviews/Reviews';
import Faq from './Faq/Faq';
import Footer from './Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,

        anchorPlacement: 'top-bottom',
      });
    };
    initAOS();
  }, []);
  return (
    <div className='overflow-hidden'>
      <Hero />
      <RecentImage />
      <About />
      <Price />
      <Reviews />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
