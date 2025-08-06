/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Loader } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';

const Hero = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const handleImageGeneration = async () => {
    setLoading(true);
    const options = {
      method: 'POST',
      url: 'https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php',
      headers: {
        'x-rapidapi-key': '84ec066791msh7231cb03ec33cd1p16b5afjsn102915719077',
        'x-rapidapi-host':
          'ai-text-to-image-generator-flux-free-api.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      data: {
        prompt,
        style_id: 4,
        size: '1-1',
      },
    };
    try {
      const response = await axios.request(options);
      setImage(response.data.final_result[0].origin);

      console.log('API response:', response.data); // <-- ADD THIS

      toast.success('Image generated successfully');
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error('error.response.data.message');
      } else {
        toast.error('An unexpected error occured');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadImage = () => {
    const link = document.createElement('a');
    link.target = '_blank';
    link.href = image;
    link.download = 'generated-img.jpg';
    link.click();
  };
  return (
    <div className='w-[95%] min-h-screen relative mx-auto mt-[20vh] '>
      <div className='relative z-10 text-white flex-col items-center justify-center'>
        <h1
          className='text-2xl sm:text-4xl md:text-5xl lg:text-6l xl:text-7xl font-bold text-center bg-gradient-to-r from-orange-300 to-cyan-500 bg-clip-text text-transparent'
          data-aos='fade-up'
        >
          Create Beautiful Image with <br />
          Artificial Intelligence
        </h1>
        <p
          data-aos='fade-up'
          data-aos-delay='100'
          className='mt-3 text-sm md:text-base font-semibold text-center text-gray-300'
        >
          Get started with our AI-powered image generator tools
        </p>
        {/* input box */}
        <div className='h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between mx-auto my-0'>
          <input
            type='text'
            placeholder='Generate Your Dream Image '
            className='h-full rounded-lg outline-none w-full text-black block flex-1 placeholder:text-xs sm:placeholder:text-base'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            variant={'default'}
            size={'lg'}
            onClick={handleImageGeneration}
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
        {loading && (
          <div>
            <Loader className='animate-spin mt-6 flex items-center justify-center mx-auto my-0 ' />
          </div>
        )}
        {image && (
          <div className='mt-8 flex flex-col items-center justify-center mx-auto my-0'>
            <img
              src={image}
              alt='ai image'
              className='max-w-full h-[500px] rounded-lg shadow-lg '
              loading='lazy'
            />
            <Button
              className='mt-4 mb-4 bg-orange-500 hover:bg-orange-800'
              onClick={handleDownloadImage}
            >
              Download
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
