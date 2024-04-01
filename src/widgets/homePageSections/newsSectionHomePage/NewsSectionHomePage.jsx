import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import bgNews from '../../../shared/img/main_page_bg.jpg';
import firstCardBg from '../../../shared/img/first_news_bg.png';
import secondCardBg from '../../../shared/img/second_news_bg.jpg';
import thirdCardBg from '../../../shared/img/third_news_bg.jpg';
import qRush from '../../../shared/img/q_rush_news_section.svg';
import '../../../app/styles/index.css';

import ViewAllLink from '../../../shared/ui/viewAllLink/ViewAllLink';
import { CardNewsHomePage } from './cardNewsHomePage/CardNewsHomePage';

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
    subtitle: null,
    image: null,
    date: null,
  },
  {
    bgImage: thirdCardBg,
    title: null,
    subtitle:
      'Всем привет, фоточки прилетели! ищите себя на фото с QrushFest. Ссылка в шапке профиля ',
    image: null,
    date: null,
  },
  {
    bgImage: firstCardBg,
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
          <ViewAllLink linkAddress={'news'} />
        </div>
        <Swiper spaceBetween={30} slidesPerView={1.5} navigation={false}>
          <ul className='mt-[65px] flex'>
            {cards.map((item, index) => (
              <SwiperSlide
                style={{ backgroundImage: `url(${item.bgImage})` }}
                className='bg-cover bg-no-repeat flex justify-center items-center flex-col rounded-[30px]  border-[1px] border-[solid] border-[#F5F5F5] !w-[600px] xl:!w-[860px] lg:!w-[700px] !h-[370px] xl:!h-[450px]'
              >
                <CardNewsHomePage item={item} key={index} />
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
    </section>
  );
};
