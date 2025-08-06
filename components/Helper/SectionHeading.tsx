type Props = {
  heading: string;
};

const SectionHeading = ({ heading }: Props) => {
  return (
    <div className='w-[80%] mx-auto '>
      <h1 className='text-2xl lg:text-3xl font-bold text-white  '>{heading}</h1>
      <p className='text-sm sm:text-base md:text-lg font-medium mt-2 text-gray-200'>
        Discover the creativity behind our latest AI-generated masterpiece. Each
        image is crafted to reflect imagination, detail, and cutting-edge
        technology — giving you a glimpse of what is possible when art meets
        innovation.
      </p>
    </div>
  );
};

export default SectionHeading;
