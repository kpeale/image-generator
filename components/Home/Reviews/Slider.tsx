'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCards from './ReviewCards';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Slider = () => {
  return (
    <Carousel
      arrows={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      <div>
        <ReviewCards
          image='/images/u1.jpg'
          name='john doe'
          role='Engineer'
        />
      </div>

      <div>
        <ReviewCards
          image='/images/u2.jpg'
          name='Jessica doe'
          role='Content creator'
        />
      </div>

      <div>
        <ReviewCards
          image='/images/u3.jpg'
          name='Mary Slessor'
          role='Web Developer'
        />
      </div>
    </Carousel>
  );
};

export default Slider;
