import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import firstBg from '../../../shared/img/servicesImg/firstFon.png';
import secondBg from '../../../shared/img/servicesImg/Rectangle_53.jpg';
import thirdBg from '../../../shared/img/servicesImg/secondFon.png';
import fourthBg from '../../../shared/img/servicesImg/thirdFon.png';

export const ServiceSection = () => {
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

  const arrayImg = [
    { id: 0, img: firstBg },
    { id: 1, img: secondBg },
    { id: 2, img: thirdBg },
    { id: 3, img: fourthBg },
  ];
  return (
    <section className='w-full h-[1080px] mx-auto text-[#f5f5f5] font-montserrat'>
      <div className='relative w-full ease-out duration-300'>
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
          {arrayImg &&
            arrayImg.map(el => {
              return (
                <SwiperSlide
                  key={el.id}
                  className='!transition-all ease-out duration-300'
                >
                  <img
                    className='w-full h-[1080px] object-cover ease-in duration-300'
                    src={el.img}
                    alt='firstBg'
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <div className='absolute w-full top-[55%] z-[1]'>
          <h2 className='text-[24px] mb-[20px] mx-[90px] xl:text-[50px] lg:text-[40px]'>
            Выберите свою программу
          </h2>
          <hr className='mx-[90px] shadow-[0px_0px_600px_240px_#000000]' />
          <h2
            className={`${showText ? 'opacity-1 ml-[90px]' : 'opacity-0'} text-[60px] ease-out duration-300 xl:text-[100px] lg:text-[80px]`}
          >
            Услуги
          </h2>
        </div>
      </div>
    </section>
  );
};
