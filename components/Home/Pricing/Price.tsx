import { Check } from 'lucide-react';
import React from 'react';
import PriceCards from './PriceCards';

const Price = () => {
  return (
    <div
      className='pt-16 pb-16 bg-gray-950'
      id='pricing'
    >
      <div className='w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
        <div>
          <h1 className='uppercase text-white mb-6 font-bold'>
            Flexible & affordable
          </h1>
          <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-white'>
            Our Pricing Plans
          </h1>
          <p className='text-white font-medium text-opacity-70'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            sint vitae molestias aliquam maiores, atque fuga, pariatur voluptas
            rem sed quaerat eum quidem? sunt.
          </p>
          <div className='mt-8'>
            <div className='flex items-center space-x-3 mb-3'>
              <Check className='w-6 h-6 text-green-500' />
              <p className='text-lg text-white font-semibold text-opacity-60'>
                High Quality Services
              </p>
            </div>
            <div className='flex items-center space-x-3 mb-3'>
              <Check className='w-6 h-6 text-green-500' />
              <p className='text-lg text-white font-semibold text-opacity-60'>
                24/7 Customer Support
              </p>
            </div>
            <div className='flex items-center space-x-3 mb-3'>
              <Check className='w-6 h-6 text-green-500' />
              <p className='text-lg text-white font-semibold text-opacity-60'>
                Affordable Rates
              </p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div
            data-aos='fade-right'
            data-aos-anchor-placement='top-center'
          >
            <PriceCards
              price='4'
              user='1'
              type='Silver pack'
            />
          </div>

          <div
            data-aos='fade-right'
            data-aos-anchor-placement='top-center'
            data-aos-delay='100'
          >
            <PriceCards
              price='8'
              user='3'
              type='Golden pack'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
