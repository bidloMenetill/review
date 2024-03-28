import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import rectangle51 from '../../shared/img/servicesImg/Rectangle_51.png';
import rectangle54 from '../../shared/img/servicesImg/Rectangle_54.png';
import rectangle55 from '../../shared/img/servicesImg/Rectangle_55.png';
import rectangle56 from '../../shared/img/servicesImg/Rectangle_56.png';

export const Equipment = () => {
  const { t } = useTranslation();
  return (
    <section className='mt-[857px] w-[1720px] mx-auto text-[#DC6441]'>
      <p className='text-[25px] font-[500] pb-[50px]'>
        {t('servicePage.thirdSection.title')}
      </p>

      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        pagination={{ clickable: true }}
        className='mySwiper'
      >
        <div className='flex justify-center gap-0 text-white'>
          <SwiperSlide>
            <div className='w-[415px] h-[224px]'>
              <img
                className='w-[100%] h-[100%] object-cover border-solid border-2 border-[#DC6441]'
                src={rectangle51}
                alt='rectangle'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[415px] h-[224px]'>
              <img
                className='w-[100%] h-[100%] object-cover border-solid border-2 border-[#DC6441]'
                src={rectangle54}
                alt='rectangle'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[415px] h-[224px]'>
              <img
                className='w-[100%] h-[100%] object-cover border-solid border-2 border-[#DC6441]'
                src={rectangle55}
                alt='rectangle'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[415px] h-[224px]'>
              <img
                className='w-[100%] h-[100%] object-cover border-solid border-2 border-[#DC6441]'
                src={rectangle56}
                alt='rectangle'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[415px] h-[224px]'>
              <img
                className='w-[100%] h-[100%] object-cover border-solid border-2 border-[#DC6441]'
                src={rectangle56}
                alt='rectangle'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[415px] h-[224px]'>
              <img
                className='w-[100%] h-[100%] object-cover border-solid border-2 border-[#DC6441]'
                src={rectangle56}
                alt='rectangle'
              />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  );
};
