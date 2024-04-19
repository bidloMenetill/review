import React from 'react';
import rectangle51 from '../../../shared/img/rectangle_70.jpg';
import rectangle54 from '../../../shared/img/fifth_gallery_home_page.png';
import rectangle55 from '../../../shared/img/Rectangle_71.png';
import rectangle56 from '../../../shared/img/servicesImg/Rectangle_57.png';
import { SwiperPhotoItem } from '../../../shared';

export const MusicCoursesFirstSection = () => {
  const arrayImg = [
    { id: 0, img: rectangle51 },
    { id: 1, img: rectangle54 },
    { id: 2, img: rectangle55 },
    { id: 3, img: rectangle56 },
    { id: 4, img: rectangle56 },
  ];
  const arrayEquipment = [
    {
      id: 0,
      title: 'Индивидуальные занятия',
      firstDescription: '- 4 занятия в месяц - 4400 сом',
      secondDescription:
        '- 8 занятий в месяц - 8000 сом + бонус 2 часа самостоятельных репетиций',
      thirdDescription:
        '12 занятий в месяц - 12000 сом + бонус 4 часа самостоятельных репетиций',
      fourthDescription: '- 1100 сом - 1 занятие',
    },
    {
      id: 1,
      title: 'Групповые занятия (2-4 чел)',
      firstDescription: '- 8 занятий в месяц 4000 сом',
      secondDescription: '- При оплате 3 месяцев скидка 3000 сом',
      thirdDescription: ' 21000 сом + 10 часов репетиций',
      spanWord: '24000',
      fourthDescription: 'Адрес: Чынгыза Айтматова 1а (Билимкана)',
    },
  ];
  return (
    <section className='w-full mx-auto font-montserrat text-[#E2DED3] md:mb-[90px] tablet:mb-[154px]'>
      <div className='mx-[20px] text-center sm:mt-[30px] tablet:mt-[100px]'>
        <p className='text-[18px] font-[500] pb-[22px] md:pb-[38px] xl:text-[25px] lg:text-[23px] tablet:text-[20px]'>
          1 филиал (Район Азия Молл)
        </p>
        <p className='text-[14px] sm:text-[18px] font-[500] pb-[10px] md:pb-[25px] text-[#FFFFFF] sm:text-[#B4B4B4] xl:text-[25px] lg:text-[23px] tablet:text-[20px]'>
          У нас вы можете найти курсы Гитары, Барабанов, Битмейкинга
        </p>
      </div>

      <div className='ml-[20px] w-[365px] sm:mx-auto sm:w-[95%] xl:w-[1820px]'>
        <SwiperPhotoItem arrayImg={arrayImg} />
      </div>
      <div className='text-left mx-[20px] md:w-full sm:mx-auto mt-[27px] md:mt-[50px] tablet:mt-[100px] md:text-center'>
        <div className='sm:w-[90%] sm:mx-auto lg:flex lg:justify-between text-left xl:w-[1570px] lg:w-[1270px]'>
          <section className='w-[100%] tablet:flex tablet:items-center tablet:justify-between'>
            {arrayEquipment?.map(el => (
              <ul
                key={el.id}
                className='mb-[32px] sm:mx-auto tablet:max-w-[50%] text-[18px] text-[#B4B4B4] xl:text-[25px] lg:text-[23px] tablet:text-[20px]'
              >
                <li>
                  <p className='mb-[18px] text-[#FFFFFF] md:text-[#E2DED3]'>
                    {el.title}
                  </p>
                </li>
                <li>
                  <p>{el.firstDescription}</p>
                </li>
                <li>
                  <p>{el.secondDescription}</p>
                </li>
                <li>
                  <p>
                    - <span className='line-through'>{el.spanWord}</span>
                    {el.thirdDescription}
                  </p>
                </li>
                <li>
                  <p>{el.fourthDescription}</p>
                </li>
              </ul>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
};
