import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import bgNews from '../../shared/img/main_page_bg.jpg';
import firstCardBg from '../../shared/img/first_news_bg.png';
import secondCardBg from '../../shared/img/second_news_bg.jpg';
import thirdCardBg from '../../shared/img/third_news_bg.jpg';
import qRush from '../../shared/img/q_rush_news_section.svg';
import instagram from '../../shared/img/instagram_news.svg';
import '../../app/styles/index.css';
import arrayButton from '../../shared/img/link.svg';
export const NewsSection = () => {
  return (
    <section
      className='bg-cover bg-no-repeat w-full h-[907px]  bg-center '
      style={{ backgroundImage: `url(${bgNews})` }}
    >
      <div className='container pt-[100px] pb-[66px]'>
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
      </div>
      <Swiper
        className='container flex justify-center  items-center gap-x-3'
        spaceBetween={15}
        slidesPerView={2}
        navigation={false}
      >
        <div className='mt-[65px] flex gap-x-3'>
          <SwiperSlide
            className='bg-cover bg-no-repeat   flex-col rounded-[30px] !w-[860px] !h-[450px]'
            style={{ backgroundImage: `url(${firstCardBg})` }}
          >
            <div className='flex justify-center flex-col py-[55px] text-center'>
              <div className='flex justify-center  flex-col '>
                <p className='text-[#FFF] font-[Montserrat] pb-[30px] text-[30px] not-italic font-semibold leading-[normal]'>
                  РОЗЫГРЫШ
                </p>
                <h5 className='text-[#FFF] font-[Montserrat] text-[40px] not-italic font-semibold leading-[normal]'>
                  ХОЧУ РЕПЕТИЦИЮ В
                </h5>
                <h4></h4>
                <div
                  className='w-[400px] [h-200px] bg-no-repeat bg-cover '
                  style={{ backgroundImage: `url(${qRush})` }}
                ></div>
              </div>
              <img src={qRush} className='-mt-[20px]' alt='' />
              <p className='text-[#FFF] font-[Montserrat] mt-[80px] text-[20px] not-italic font-semibold leading-[normal]'>
                до 31.10.2023 (вторник)
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className='bg-cover bg-no-repeat  !flex justify-center items-center flex-col rounded-[30px] !w-[860px] !h-[450px]'
            style={{ backgroundImage: `url(${secondCardBg})` }}
          >
            <h3 className='text-[#F5F5F5] font-[Montserrat] text-[50px] not-italic font-semibold leading-[normal]'>
              Q · RUSH FEST
            </h3>
          </SwiperSlide>
          <SwiperSlide
            className='bg-cover bg-no-repeat  !flex justify-center items-center rounded-[30px] !w-[860px] !h-[450px]'
            style={{ backgroundImage: `url(${thirdCardBg})` }}
          >
            <p className='text-[#FFF] text-center font-[Montserrat] text-[30px] not-italic font-semibold leading-[30px]'>
              Всем привет, фоточки прилетели! ищите себя на фото с QrushFest.
              Ссылка в шапке профиля{' '}
              <span>
                <img
                  src={instagram}
                  className='inline-block cursor-pointer'
                  alt=''
                />
              </span>
            </p>
          </SwiperSlide>
          <SwiperSlide
            className='bg-cover bg-no-repeat  !flex justify-center items-center rounded-[30px] !w-[860px] !h-[450px]'
            style={{ backgroundImage: `url(${firstCardBg})` }}
          >
            <p className='text-[#FFF] text-center font-[Montserrat] text-[30px] not-italic font-semibold leading-[30px]'>
              Всем привет, фоточки прилетели! ищите себя на фото с QrushFest.
              Ссылка в шапке профиля{' '}
              <span>
                <img
                  src={instagram}
                  className='inline-block cursor-pointer'
                  alt=''
                />
              </span>
            </p>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  );
};
