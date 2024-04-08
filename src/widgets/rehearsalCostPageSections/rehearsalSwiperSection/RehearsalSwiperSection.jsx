import React from 'react';
import { ServiceSwiper, ServiceTitle } from '../../../shared';

export const RehearsalSwiperSection = () => {
  return (
    <section className='relative w-full h-[230px] sm:h-[1080px] mx-auto text-[#f5f5f5] font-montserrat'>
      <ServiceSwiper />
      <ServiceTitle title={'РЕПЕТИЦИОННАЯ БАЗА'} />
    </section>
  );
};
