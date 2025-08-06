import Image from 'next/image';
import React from 'react';
import FaqCards from './FaqCards';

const Faq = () => {
  return (
    <div
      className='pt-16 pb-16 bg-gray-950'
      id='faq'
    >
      <div className='w-[80%] mx-auto mt-16 grid-cols-1 grid md:grid-cols-2 gap-10 items-center'>
        <div
          data-aos='zoom-out'
          data-aos-anchor-placement='top-center'
        >
          <Image
            src='/images/faq.png'
            width={500}
            height={500}
            alt='faq'
          />
        </div>

        <div>
          <FaqCards />
        </div>
      </div>
    </div>
  );
};

export default Faq;
