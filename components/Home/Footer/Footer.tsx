import React from 'react';

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-black'>
      <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start pb-8 border-b-2 border-gray-900'>
        <div className='lg:col-span-2'>
          <p className='text-2xl sm:text-3xl md:text-4xl text-white w-[80%] font-bold'>
            We develop & create digital future
          </p>
        </div>

        <div>
          <h1 className='text-xl font-bold text-white mt-6'>Address</h1>
          <p className='text-white opacity-60 mt-4'>Port Harcourt, Nigeria</p>
          <p className='text-white opacity-60'>
            Maxwell Avenue, Mgbouba off NTA Road, Opposite Larritel Hotel
          </p>
        </div>

        <div>
          <h1 className='text-xl font-bold text-white mt-6'>Contact</h1>
          <p className='text-white opacity-60 mt-4'>Email</p>
          <p className='text-white sm:text-md text-lg font-bold opacity-60'>
            legbarak28@gmail.com
          </p>
          <p className='text-white opacity-60 mt-4'>Phone</p>
          <p className='text-white sm:text-xl text-lg font-bold opacity-60'>
            +2349022717198
          </p>
        </div>
      </div>

      <div className='w-[80%] mx-auto text-gray-300 mt-6'>
        Kpeale Legbara @ All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
