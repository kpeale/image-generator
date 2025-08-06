import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqCards = () => {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full text-white'
      defaultValue='item-1'
    >
      <AccordionItem value='item-1'>
        <AccordionTrigger className='text-xl lg:text-2xl'>
          What is IMGIAI?
        </AccordionTrigger>
        <AccordionContent className=' text-base md:text-lg'>
          <p>
            IMGIAI is an acronym for image AI generator that generates images
            based on the propmts given by the user
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger className='text-xl lg:text-2xl'>
          Do I need to be connected to the internet to use the IMGIAI website?
        </AccordionTrigger>
        <AccordionContent className=' text-base md:text-lg'>
          <p>
            Yes, IMGIAI makes use of an API which works with internet supply.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger className='text-xl lg:text-2xl'>
          Are there any limits of request for this API?
        </AccordionTrigger>
        <AccordionContent className='text-base md:text-lg'>
          <p>
            Yes, I used a free version in Rapid API. Although, there are paid
            payment plans but the free payment plan has a limit of a thousand
            calls per hour.ext-lg
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-4'>
        <AccordionTrigger className='text-xl lg:text-2xl'>
          The image provided by IMGAI are they in jpeg format?
        </AccordionTrigger>
        <AccordionContent className=' text-base md:text-lg'>
          <p>
            No, they are in web format although it can be saved to any device
            youre using .
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqCards;
