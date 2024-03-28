import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import bgNews from '../../../shared/img/main_page_bg.jpg';
import firstCardBg from '../../../shared/img/first_news_bg.png';
import secondCardBg from '../../../shared/img/second_news_bg.jpg';
import thirdCardBg from '../../../shared/img/third_news_bg.jpg';
import qRush from '../../../shared/img/q_rush_news_section.svg';
import '../../../app/styles/index.css';
import arrayButton from '../../../shared/img/link.svg';
const cards = [
  {
    bgImage: firstCardBg,
    title: 'РОЗЫГРЫШ',
    subtitle: 'ХОЧУ РЕПЕТИЦИЮ В',
    image: qRush,
    date: 'до 31.10.2023 (вторник)',
  },
  {
    bgImage: secondCardBg,
    title: 'Q · RUSH FEST',
    subtitle: '',
  },
  {
    bgImage: thirdCardBg,
    title: '',
    subtitle:
      'Всем привет, фоточки прилетели! ищите себя на фото с QrushFest. Ссылка в шапке профиля ',
  },
  {
    bgImage: secondCardBg,
    title: '',
    subtitle:
      'Всем привет, фоточки прилетели! ищите себя на фото с QrushFest. Ссылка в шапке профиля ',
  },
];
export const NewsSectionHomePage = () => {
  return (
    <section
      className='bg-cover bg-no-repeat w-full h-[700px] xl:h-[907px] lg:h-[800px]  bg-center '
      style={{ backgroundImage: `url(${bgNews})` }}
    >
      <div className='mx-auto max-w-[90%] xl:container pt-[100px] pb-[66px]'>
        <h2 className='text-[#F5F5F5] font-[Montserrat]  text-[80px] lg:text-[100px] not-italic font-medium leading-[normal]'>
          Новости
        </h2>
        <div className='flex justify-end mb-[30px]'>
          <a
            href='#'
            className='!flex justify-normal items-center'
            target='_blank'
          >
            <button className='font-[Montserrat] text-[30px] not-italic text-#F5F5F5 font-medium leading-[normal] transition-colors duration-300 hover:text-[#F93822]'>
              смотреть все
            </button>{' '}
            <img src={arrayButton} className='ml-[10px]' alt='' />
          </a>
        </div>
        <Swiper
          className='gap-x-3'
          spaceBetween={15}
          slidesPerView={2}
          navigation={false}
        >
          <div className='mt-[65px] flex gap-x-3'>
            {cards.map((card, index) => (
              <SwiperSlide
                key={index}
                className={`bg-cover bg-no-repeat flex justify-center items-center flex-col rounded-[30px]  border-[1px] border-[solid] border-[#F5F5F5] !w-[600px] xl:!w-[860px] lg:!w-[700px] !h-[370px] xl:!h-[450px]`}
                style={{ backgroundImage: `url(${card.bgImage})` }}
              >
                <div className='flex justify-center flex-col py-[55px] text-center '>
                  <div className='flex justify-center flex-col'>
                    {card.title && (
                      <p className='text-[#FFF] font-[Montserrat] pb-[30px] text-[30px] not-italic font-semibold leading-[normal]'>
                        {card.title}
                      </p>
                    )}
                    {card?.subtitle && (
                      <h5 className='text-[#FFF] font-[Montserrat] text-[40px] not-italic font-semibold leading-[normal]'>
                        {card.subtitle}
                      </h5>
                    )}
                    {card.image && (
                      <div
                        className='w-[400px] h-200px bg-no-repeat bg-cover'
                        style={{ backgroundImage: `url(${card.image})` }}
                      ></div>
                    )}
                  </div>
                  {card.date && (
                    <p className='text-[#FFF] font-[Montserrat] mt-[80px] text-[20px] not-italic font-semibold leading-[normal]'>
                      {card.date}
                    </p>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};
