import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export const SwiperPhotoItem = ({ arrayImg }) => {
  const mobileScreen = useMediaQuery('(max-width: 576px)');
  const tabletScreen = useMediaQuery('(max-width: 1024px)');
  return (
    <Swiper
      slidesPerView={mobileScreen ? 1.1 : tabletScreen ? 2.3 : 3.1}
      loop={true}
      pagination={{ clickable: true }}
      className='mySwiper'
    >
      <section className='flex justify-center text-white'>
        {arrayImg?.map(el => (
          <SwiperSlide key={el.id}>
            <div className='w-[310px] h-[177px] sm:w-[220px] md:w-[270px] md:h-[237px] xl:w-[560px] xl:h-[320px] lg:w-[410px] lg:h-[260px]'>
              <img
                className='w-[100%] h-[100%] object-cover border-solid border-[1px] rounded-[16px] border-[#E2DED3]'
                src={el.img}
                alt='rectangle'
              />
            </div>
          </SwiperSlide>
        ))}
      </section>
    </Swiper>
  );
};
