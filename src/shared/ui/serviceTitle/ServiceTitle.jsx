import React from 'react';

export const ServiceTitle = ({ title }) => {
  return (
    <div className='absolute top-[50%] -translate-y-1/2 z-[3] w-full h-[80px] lg:h-[400px] bg-gradient-to-b from-[#ffffff37] via-[#fff0] to-[#ffffff37] text-center flex items-center justify-center'>
      <h2 className='text-[24px] lg:text-[64px] font-[500]'>{title}</h2>
    </div>
  );
};
