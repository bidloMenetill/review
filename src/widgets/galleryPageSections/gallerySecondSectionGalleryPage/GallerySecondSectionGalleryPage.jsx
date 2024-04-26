import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import firstCardBg from '../../../shared/img/first_news_bg.png';
import secondCardBg from '../../../shared/img/second_news_bg.jpg';
import thirdCardBg from '../../../shared/img/third_news_bg.jpg';

export const GallerySecondSectionGalleryPage = () => {
  const SliderImage = [
    firstCardBg,
    secondCardBg,
    thirdCardBg,
    thirdCardBg,
    firstCardBg,
  ];
  return (
    <section className='bg-center max-w-full'>
      <section className='max-w-full xl:container items-center mx-auto mt-[100px]'>
        <Swiper
          className='gap-x-3'
          spaceBetween={15}
          slidesPerView={2}
          navigation={true}
          modules={[Navigation]}
        >
          <div className='mt-[65px] flex gap-x-3'>
            {SliderImage.map((image, index) => (
              <SwiperSlide
                key={index}
                className='bg-cover bg-no-repeat   flex-col rounded-[30px] border-[2px]  border-solid border-gray-500   !w-[600px] xl:!w-[860px] lg:!w-[700px] !h-[370px] xl:!h-[450px]'
                style={{ backgroundImage: `url(${image})` }}
              ></SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>
    </section>
  );
};
