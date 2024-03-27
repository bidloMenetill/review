import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import rectangle51 from '../../shared/img/rectangle_70.jpg';
import rectangle54 from '../../shared/img/fifth_gallery_home_page.png';
import rectangle55 from '../../shared/img/Rectangle_71.png';
import rectangle56 from '../../shared/img/servicesImg/Rectangle_57.png';

export const MusicCours = () => {
  const arrayImg = [
    { id: 0, img: rectangle51 },
    { id: 1, img: rectangle54 },
    { id: 2, img: rectangle55 },
    { id: 3, img: rectangle56 },
    { id: 4, img: rectangle56 },
  ];
  return (
    <section className='w-full mx-auto font-montserrat text-[#E2DED3] mb-[154px]'>
      <div className='text-center'>
        <h3 className='text-[50px] font-[500] mb-[25px]'>МУЗЫКАЛЬНЫЕ КУРСЫ</h3>
        <p className='text-[25px] font-[500] pb-[25px] text-[#B4B4B4]'>
          У нас вы можете найти курсы Гитары, Барабанов, Битмейкинга
        </p>
        <p className='text-[35px] font-[500] pb-[38px]'>
          1 филиал (Район Азия Молл)
        </p>
      </div>

      <div className='max-w-[900px] mx-auto xl:max-w-[1820px] lg:max-w-[1320px]'>
        <Swiper
          spaceBetween={0}
          slidesPerView={3.1}
          pagination={{ clickable: true }}
        >
          <div className='flex justify-center text-white'>
            {arrayImg &&
              arrayImg.map(el => {
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
          </div>
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
          <div className='w-[597px]'>
            <p className='mb-[16px]'>Индивидуальные занятия</p>
            <ul className='mb-[32px] text-[#B4B4B4]'>
              <li>- 4 занятия в месяц - 4400 сом</li>
              <li>
                - 8 занятий в месяц - 8000 сом + бонус 2 часа самостоятельных
                репетиций
              </li>
              <li>
                - 12 занятий в месяц - 12000 сом + бонус 4 часа самостоятельных
                репетиций
              </li>
              <li>- 1100 сом - 1 занятие</li>
            </ul>
          </div>
          <div className='w-[564px]'>
            <p className='mb-[16px]'>Групповые занятия (2-4 чел)</p>
            <ul className='text-[#E2DED3] mb-[15px]'>
              <li className='mb-[38px] text-[#B4B4B4]'>
                - 8 занятий в месяц 4000 сом
              </li>
              <li>- При оплате 3 месяцев скидка 3000 сом</li>
              <li>
                - <span className='line-through'>24000</span> 21000 сом + 10
                часов репетиций
              </li>
              <li className='underline'>
                Адрес: Чынгыза Айтматова 1а (Билимкана)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
