import React from 'react';

export const ServiceTitle = ({ title }) => {
  return (
    <>
      <div className='absolute blur-sm sm:blur-none top-[50%] rounded-[40px] sm:rounded-none -translate-y-1/2 z-[1] w-full h-[80px] lg:h-[400px] tablet:bg-gradient-to-b tablet:from-[#ffffff37] tablet:via-[#fff0] tablet:to-[#ffffff37] bg-gradient-to-b from-[#ffffff90] via-[#ffffff14] to-[#ffffff90] text-center flex items-center justify-center'></div>
      <h2 className='absolute w-[100%] top-[50%] text-center z-[2] -translate-y-1/2 text-[24px] lg:text-[64px] font-[500]'>
        {title}
      </h2>
    </>
  );
};
