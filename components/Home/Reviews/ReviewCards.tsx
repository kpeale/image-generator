import { QuoteIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
type Props = {
  image: string;
  name: string;
  role: string;
};

const ReviewCards = ({ image, name, role }: Props) => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <QuoteIcon className='w-10 h-10 text-yellow-300' />
      <p className='text-center mt-4 text-white text-base md:text-lg lg:text-xl font-semibold text-opacity-80'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
        expedita repudiandae quisquam asperiores ipsum magni excepturi suscipit!
        Culpa qui quas maiores at nesciunt. Unde hic tenetur odit maxime
        explicabo quod!
      </p>
      <div className='mt-8'>
        <h1 className='text-base md:text-2xl font-bold text-white text-center'>
          {name}
        </h1>
        <p className='text-sm md:text-lg font-bold text-white text-center'>
          {role}
        </p>
        <Image
          src={image}
          alt='name'
          width={80}
          height={80}
          className='mt-6 rounded-full mx-auto'
        />
      </div>
    </div>
  );
};

export default ReviewCards;
