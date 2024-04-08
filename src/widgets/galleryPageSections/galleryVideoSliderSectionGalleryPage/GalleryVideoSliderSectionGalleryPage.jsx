import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css';

// FIX ME: add section
export const GalleryVideoSliderSectionGalleryPage = () => {
  return (
    <section className=' w-full h-[705px]  mt-[20px] mb-[-200px]'>
      <div className='container'></div>
      <Swiper
        className='container flex justify-center  items-center gap-x-3'
        modules={[Autoplay, Navigation, Mousewheel]}
        autoplay={{
          delay: 600,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        spaceBetween={20}
        speed={3000}
        slidesPerView={3}
        initialSlide={1.2}
        centeredSlides
        navigation={false}
      >
        <div className=' flex gap-x-3'>
          <SwiperSlide className='bg-cover bg-no-repeat  !flex justify-center items-center flex-col rounded-[30px] border-[1px] border-solid border-gray-500 !w-[705px] !h-[350px]'>
            <iframe
              className='rounded-[30px] border-[2px] border-solid border-gray-500 '
              width='705'
              height='350'
              src='https://www.youtube.com/embed/vCHn86AS0pQ?si=390DQJroE4M7ybf_'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              // allowfullscreen
            ></iframe>
          </SwiperSlide>
          <SwiperSlide className='bg-cover bg-no-repeat  !flex justify-center items-center flex-col rounded-[30px] !w-[705px] !h-[350px]'>
            <iframe
              className='rounded-[30px] border-[2px] border-solid border-gray-500 '
              width='705'
              height='350'
              src='https://www.youtube.com/embed/vCHn86AS0pQ?si=390DQJroE4M7ybf_'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              // allowfullscreen
            ></iframe>
          </SwiperSlide>
          <SwiperSlide className='bg-cover bg-no-repeat  !flex justify-center items-center rounded-[30px] !w-[705px] !h-[350px]'>
            <iframe
              className='rounded-[30px] border-[2px] border-solid border-gray-500 '
              width='705'
              height='350'
              src='https://www.youtube.com/embed/vCHn86AS0pQ?si=390DQJroE4M7ybf_'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              // allowfullscreen
            ></iframe>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  );
};
