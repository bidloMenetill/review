import React from 'react';
import { ServiceSwiper, ServiceTitle } from '../../../shared';

export const MusicCoursSwiperSection = () => {
  return (
    <section className='relative w-full h-[700px] sm:h-[1080px] mx-auto text-[#f5f5f5] font-montserrat'>
      <ServiceSwiper />
      <ServiceTitle title={'МУЗЫКАЛЬНЫЕ КУРСЫ'} />
    </section>
  );
};
