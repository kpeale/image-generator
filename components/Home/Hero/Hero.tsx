import { Button } from '@/components/ui/button';
import React from 'react';

const Hero = () => {
  return (
    <div className='w-[95%] min-h-screen relative mx-auto mt-[20vh] '>
      <div className='relative z-10 text-white flex-col items-center justify-center'>
        <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6l xl:text-7xl font-bold text-center bg-gradient-to-r from-orange-300 to-cyan-500 bg-clip-text text-transparent'>
          Create Beautiful Image with <br />
          Artificial Intelligence
        </h1>
        <p className='mt-3 text-sm md:text-base font-semibold text-center text-gray-300'>
          Get started with our AI-powered image generator tools
        </p>
        {/* input box */}
        <div className='h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between mx-auto my-0'>
          <input
            type='text'
            placeholder='Generate Your Dream Image '
            className='h-full rounded-lg outline-none w-full text-black block flex-1 placeholder:text-xs sm:placeholder:text-base'
          />
          <Button
            variant={'default'}
            size={'lg'}
          >
            Generate
          </Button>
        </div>

        <div className='flex items-center justify-center mt-6 gap-3 flex-wrap  '>
          <p>Popular Tag: </p>
          <Button variant={'secondary'}>Creative</Button>
          <Button variant={'secondary'}>Hyperreality</Button>
          <Button variant={'secondary'}>Steampunk</Button>
          <Button variant={'secondary'}>Animation</Button>
          <Button variant={'secondary'}>Business</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
