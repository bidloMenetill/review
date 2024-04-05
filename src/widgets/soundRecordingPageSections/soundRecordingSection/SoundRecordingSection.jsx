import React from 'react';
import { Button } from '../../../shared';
import studioRecording from '../../../shared/img/first_gallery_home_page.png';
import vector from '../../../shared/img/Polygon_1.png';

export const SoundRecordingSection = () => {
  const arrayContent = [
    { id: 0, text: 'ЗАПИСЬ ВОКАЛА' },
    { id: 1, text: 'СОЗДАНИЕ МУЗЫКИ И АРАНЖИРОВОК' },
    { id: 2, text: 'ЗАПИСЬ МЫЗЫКАЛЬНЫХ ИНСТРУМЕНТОВ' },
    {
      id: 3,
      text: 'ИЗГОТОВЛЕНИЕ РЕКЛАМНЫХ РОЛИКОВ С ЛУЧШИМИ ДИКТОРАМИ КР',
    },
    {
      id: 4,
      text: 'МНОГОКАНАЛЬНАЯ ЗАПИСЬ КОНЦЕРТОВ РЕПЕТИЦИЙ И КОНФЕРЕНЦИЙ',
    },
  ];
  return (
    <section className='relative w-full font-montserrat mb-[120px] md:mb-[164px] bg-[#0000008a] xl:h-[960px] xl:flex xl:justify-end lg:h-[960px] lg:flex lg:justify-end'>
      <div className='bg-[#0000008a]'>
        <img
          className='object-cover w-[75%] h-full mx-auto mt-[25px] mb-[50px] rounded-[16px] xl:mt-[0px] xl:absolute xl:z-[-1] xl:right-[-30px] lg:mt-[0px] lg:absolute lg:z-[-1] lg:right-[-30px]'
          src={studioRecording}
          alt='studioRecording'
        />
      </div>
      <div className='absolute w-[900px] top-[-10px] left-[2000px] lg:left-[210px] mx-auto'>
        <img className='h-full object-cover w-full' src={vector} alt='vector' />
      </div>

      <div className='mx-[20px] sm:w-[700px] text-[#fff] xl:absolute xl:left-[100px] xl:z-[2] xl:top-[175px] lg:absolute lg:left-[100px] lg:top-[175px] lg:z-10'>
        <h3 className='text-[24px] md:text-[50px] font-[500] mb-[24px]'>
          СТУДИЯ ЗВУКОЗАПИСИ
        </h3>
        {arrayContent?.map(el => (
          <ul key={el.id}>
            <li>
              <p className='text-[14px] md:text-[30px] font-[400] text-[#FFFFFF] md:text-[#B4B4B4] mb-[10px] md:mb-[24px] lg:w-full'>
                {el.text}
              </p>
            </li>
          </ul>
        ))}
        <div className='w-full text-center mt-[20px]'>
          <Button variant='orangeButton'>Отправить</Button>
        </div>
      </div>
    </section>
  );
};
