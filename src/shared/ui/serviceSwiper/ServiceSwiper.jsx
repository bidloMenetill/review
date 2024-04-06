import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import firstBg from '../../img/servicesImg/firstFon.png';
import secondBg from '../../img/servicesImg/Rectangle_53.jpg';
import thirdBg from '../../img/servicesImg/secondFon.png';
import fourthBg from '../../img/servicesImg/thirdFon.png';

export const ServiceSwiper = () => {
  const arrayImg = [
    { id: 0, img: firstBg },
    { id: 1, img: secondBg },
    { id: 2, img: thirdBg },
    { id: 3, img: fourthBg },
  ];
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      allowTouchMove={false}
      modules={[Autoplay]}
      className='!transition-all ease-out duration-300'
    >
      {arrayImg.map(el => (
        <SwiperSlide
          key={el.id}
          className='!transition-all ease-out duration-300'
        >
          <img
            className='w-full h-[230px] sm:h-[1080px] object-cover ease-in duration-300'
            src={el.img}
            alt='firstBg'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
