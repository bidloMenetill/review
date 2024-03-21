import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import firstBg from '../../shared/img/servicesImg/firstFon.png';
import secondBg from '../../shared/img/servicesImg/Rectangle_53.jpg';
import thirdBg from '../../shared/img/servicesImg/secondFon.png';
import fourthBg from '../../shared/img/servicesImg/thirdFon.png';

export const Services = () => {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setShowText(true);
        if (scrollPosition > 650) {
          setShowText(false);
        }
      } else {
        setShowText(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='relative z-200 w-full h-[1080px]'>
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
        className='!transition-all'
      >
        <SwiperSlide className='!transition-all'>
          <div
            className='w-[full] h-[1080px] bg-cover bg-no-repeat bg-center'
            style={{ backgroundImage: `url(${firstBg})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide className='!transition-all'>
          <div
            className='w-[full] h-[1080px] bg-cover bg-no-repeat bg-center'
            style={{ backgroundImage: `url(${secondBg})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide className='!transition-all'>
          <img
            className='w-full h-[1080px] object-cover'
            src={thirdBg}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide className='!transition-all'>
          <img
            className='w-full h-[1080px] object-cover'
            src={fourthBg}
            alt=''
          />
        </SwiperSlide>
      </Swiper>
      <div className='absolute w-full top-[50%] z-[1] shadow-indigo-500/40'>
        <h2 className='text-[50px] mx-[90px]'>Выберите свою программу</h2>
        <hr className='mx-[90px] ' />
        <h2
          className={`${showText ? 'opacity-1 ml-[90px]' : 'opacity-0'} text-[100px] ease-out duration-300`}
        >
          Услуги
        </h2>
      </div>
    </div>
  );
};
