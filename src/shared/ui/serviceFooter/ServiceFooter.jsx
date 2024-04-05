import React from 'react';

export const ServiceFooter = ({ description, number }) => {
  return (
    <section className='h-[200px] md:h-[300px] w-full mx-auto bg-gradient-to-t from-[#160503] from-0% via-black to-[#160503] text-center'>
      <div className='py-[55px] md:py-[87px] text-center'>
        <p className='text-[#E2DED3] text-[14px] md:text-[18px] font-[500] w-[300px] md:w-[680px] mb-[36px] mx-auto xl:text-[30px] xl:w-[1380px] lg:text-[20px] lg:w-[800px]'>
          {description}
        </p>
        <p className='text-[#E2DED3] text-[14px] md:text-[18px] font-[500] xl:text-[30px] lg:text-[20px]'>
          {number}
        </p>
      </div>
    </section>
  );
};
