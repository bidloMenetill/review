import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import rectangle51 from '../../../shared/img/rectangle_70.jpg';
import rectangle54 from '../../../shared/img/fifth_gallery_home_page.png';
import rectangle55 from '../../../shared/img/Rectangle_71.png';
import rectangle56 from '../../../shared/img/servicesImg/Rectangle_57.png';

export const SecondMusicCoursSection = () => {
  const arrayImg = [
    { id: 0, img: rectangle51 },
    { id: 1, img: rectangle54 },
    { id: 2, img: rectangle55 },
    { id: 3, img: rectangle56 },
    { id: 4, img: rectangle56 },
  ];
  const firstArrayEquipment = [
    {
      id: 0,
      title: 'Индивидуальные занятия',
      firstDescription: '- 4 занятия в месяц - 4400 сом',
      secondDescription:
        '- 8 занятий в месяц - 8000 сом + бонус 2 часа самостоятельных репетиций',
      thirdDescription:
        '- 12 занятий в месяц - 12000 сом + бонус 4 часа самостоятельных репетиций',
      fourthDescription: '- 1100 сом - 1 занятие',
    },
  ];
  const secondArrayEquipment = [
    {
      id: 0,
      title: 'Групповые занятия (2-4 чел)',
      firstDescription: '- 8 занятий в месяц 4000 сом',
      secondDescription: '- При оплате 3 месяцев скидка 3000 сом',
      thirdDescription: ' 21000 сом + 10 часов репетиций',
      spanWord: '24000',
      fourthDescription: 'Адрес: Чынгыза Айтматова 1а (Билимкана)',
    },
  ];
  return (
    <section className='w-full mx-auto font-montserrat text-[#E2DED3] mb-[154px]'>
      <div className='text-center'>
        <p className='text-[35px] font-[500] pb-[38px]'>
          2 филиал (Район Магистраль\Алматинка)
        </p>
        <p className='text-[25px] font-[500] pb-[25px] text-[#B4B4B4]'>
          Курсы игры на Гитаре и Барабанах
        </p>
      </div>

      <div className='max-w-[900px] mx-auto xl:max-w-[1820px] lg:max-w-[1320px]'>
        <Swiper
          spaceBetween={0}
          slidesPerView={3.1}
          pagination={{ clickable: true }}
          className='mySwiper'
        >
          <section className='flex justify-center text-white'>
            {arrayImg?.map(el => {
              return (
                <SwiperSlide key={el.id}>
                  <div className='max-w-[280px] h-[200px] xl:max-w-[560px] xl:h-[320px] lg:max-w-[410px] lg:h-[260px]'>
                    <img
                      className='w-[100%] h-[100%] object-cover border-solid border-[1px] rounded-[16px] border-[#E2DED3]'
                      src={el.img}
                      alt='rectangle'
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </section>
        </Swiper>
      </div>
      <div className='w-full mx-auto mt-[100px] text-center'>
        <p className='text-[25px] font-[500]'>
          Стоимость групповой 2 часовой репетиции - 400 сом\чел Индивидуальные
          <br />
          репетиции - 250\час
        </p>
        <h3 className='mt-[38px] mb-[32px] text-[30px] font-[600] text-center'>
          Список оборудования
        </h3>
        <div className='max-w-[1170px] mx-auto flex justify-between text-left text-[25px] xl:max-w-[1570px] lg:max-w-[1270px]'>
          <section className='w-[45%]'>
            {firstArrayEquipment?.map(el => {
              return (
                <ul key={el.id} className='mb-[32px] text-[#B4B4B4]'>
                  <li>
                    <p className='mb-[16px] text-[#E2DED3]'>{el.title}</p>
                  </li>
                  <li>
                    <p>{el.firstDescription}</p>
                  </li>
                  <li>
                    <p>{el.secondDescription}</p>
                  </li>
                  <li>
                    <p>{el.thirdDescription}</p>
                  </li>
                  <li>
                    <p>{el.fourthDescription}</p>
                  </li>
                </ul>
              );
            })}
          </section>
          <section className='w-[35%]'>
            {secondArrayEquipment?.map(el => {
              return (
                <ul key={el.id} className='mb-[32px] text-[#E2DED3]'>
                  <li>
                    <p className='mb-[16px]'>{el.title}</p>
                  </li>
                  <li className='mb-[38px] text-[#B4B4B4]'>
                    <p>{el.firstDescription}</p>
                  </li>
                  <li className='text-[]'>
                    <p>{el.secondDescription}</p>
                  </li>
                  <li className='mb-[15px]'>
                    <p>
                      - <span className='line-through'>{el.spanWord}</span>
                      {el.thirdDescription}
                    </p>
                  </li>
                  <li>
                    <p>{el.fourthDescription}</p>
                  </li>
                </ul>
              );
            })}
          </section>
        </div>
      </div>
    </section>
  );
};
