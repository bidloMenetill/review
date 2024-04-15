import React from 'react';
import { Link } from 'react-router-dom';
import serviceBg from '../../../shared/img/servicesImg/About.png';
import rectangl from '../../../shared/img/servicesImg/Rectangle_53.jpg';
import rectangl2 from '../../../shared/img/third_studio_main_page.jpg';
import rectangl3 from '../../../shared/img/first_studio_main_page.jpg';
import { Button, scrollToTop } from '../../../shared';

export const ServiceLinks = () => {
  const arrayLinks = [
    {
      img: rectangl,
      title: 'Студия Звукозаписи',
      links: '/sound-recording',
    },
    {
      img: rectangl2,
      title: 'Музыкальные Курсы',
      links: '/music-cours',
    },
    {
      img: rectangl3,
      title: 'Репетиционная База',
      links: '/rehearsal-cost',
    },
  ];
  return (
    <section className='relative w-full h-[490px] sm:h-[1000px] tablet:h-[1450px] lg:h-[2050px] xl:h-[2500px] text-[#F5F5F5]'>
      <img
        className='absolute z-[-1] w-full h-[100%] object-cover'
        src={serviceBg}
        alt='Задний-фон'
      />
      <div className='mx-auto pt-[20px] w-[335px] mb-[232px] sm:w-[665px] tablet:w-[1000px] xl:pt-[100px] xl:w-[1720px] lg:w-[1200px]'>
        <h2 className='text-[20px] mb-[20px] sm:text-[45px] tablet:text-[75px] xl:text-[100px] xl:mb-[100px] lg:text-[90px]'>
          Услуги
        </h2>
        {arrayLinks?.map((item, index) => (
          <div
            key={index}
            className='w-full h-[120px] sm:h-[268px] tablet:h-[400px] lg:h-[500px] xl:h-[600px] bg-[rgba(0,0,0,0.60)] border-[1px] border-solid border-[#7a7a7a] rounded-[6px] lg:rounded-[30px] flex justify-between px-[10px] py-[12px] mb-[10px] sm:p-[20px] tablet:px-[40px] tablet:py-[38px] lg:px-[60px] lg:py-[58px] lg:mb-[70px]'
          >
            <img
              className='w-[175px] h-[95px] rounded-[6px] tablet:w-[550px] sm:w-[375px] sm:h-[226px] tablet:h-[320px] xl:w-[900px] lg:w-[700px] lg:h-[390px] xl:h-[490px] object-cover border-[1px] border-solid border-[#7a7a7a] lg:rounded-[30px]'
              src={item.img}
              alt='rectangl'
            />
            <div className='mx-[auto] text-center my-[13px] sm:my-[40px] tablet:my-[30px] lg:my-[50px] xl:my-[78px]'>
              <h2 className='text-[14px] mb-[20px] sm:w-[195px] sm:text-[26px] tablet:w-[300px] tablet:text-[35px] lg:text-[40px] xl:text-[64px] lg:font-[700] lg:w-[350px] xl:w-[450px] lg:mb-[80px]'>
                {item.title}
              </h2>
              <Button onClick={scrollToTop} variant='serviceButton'>
                <Link to={item.links}>Подробнее</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
