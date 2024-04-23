import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export const SwiperPhotoItem = ({ arrayImg }) => {
  const mobileScreen = useMediaQuery('(max-width: 576px)');
  const tabletScreen = useMediaQuery('(max-width: 1024px)');
  const baseUrlImg = import.meta.env.VITE_IMG_URL;
  return (
    <Swiper
      modules={{ Navigation }}
      navigation={true}
      slidesPerView={mobileScreen ? 1.1 : tabletScreen ? 2.3 : 3.1}
      loop={true}
      pagination={{ clickable: true }}
      className='mySwiper'
    >
      <section className='flex justify-center text-white'>
        {arrayImg?.map((el, index) => (
          <SwiperSlide key={index}>
            <div className='w-[310px] h-[177px] sm:w-[220px] md:w-[270px] md:h-[237px] xl:w-[560px] xl:h-[320px] lg:w-[410px] lg:h-[260px]'>
              <img
                className='w-[100%] h-[100%] object-cover border-solid border-[1px] rounded-[16px] border-[#E2DED3]'
                src={`${baseUrlImg}${el.image}`}
                alt='rectangle'
              />
            </div>
          </SwiperSlide>
        ))}
      </section>
    </Swiper>
  );
};
