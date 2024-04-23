import React from 'react';

export const MusicCoursesSwiperSection = ({ item }) => {
  return (
    <section className='relative w-[1720px] mx-auto h-[150px] mb-[20px] sm:h-[200px] sm:mb-[50px] tablet:mb-[250px] text-[#f5f5f5] font-montserrat'>
      <div className='w-full mb-[0px] sm:mb-[55px] pt-[35px] sm:pt-[100px]'>
        <h2 className='w-[280px] text-[32px] ml-[16px] sm:w-[355px] sm:text-[40px] font-[600] sm:ml-[15px] tablet:w-[835px] tablet:text-[80px] text-[#fff] tablet:font-[700] tablet:ml-[80px]'>
          {item.service_name}
        </h2>
      </div>
    </section>
  );
};
