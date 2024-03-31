import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import Rectangle_143 from '../../../shared/img/news2/Rectangle 143.png';
import Rectangle_144 from '../../../shared/img/news2/Rectangle 144.png';
import Rectangle_145 from '../../../shared/img/news2/Rectangle 145.png';
import Rectangle_146 from '../../../shared/img/news2/Rectangle 146.png';
import Rectangle_147 from '../../../shared/img/news2/Rectangle 147.png';
import Rectangle_148 from '../../../shared/img/news2/Rectangle 148.png';
import Rectangle_149 from '../../../shared/img/news2/Rectangle 149.png';
import Rectangle_150 from '../../../shared/img/news2/Rectangle 150.png';
import Rectangle_151 from '../../../shared/img/news2/Rectangle 151.png';

export const FiestSection = () => {
  const feastSectionImages = [
    {
      id: 1,
      img: Rectangle_143,
    },
    {
      id: 2,
      img: Rectangle_144,
    },
    {
      id: 3,
      img: Rectangle_145,
    },
    {
      id: 4,
      img: Rectangle_146,
    },
    {
      id: 5,
      img: Rectangle_147,
    },
    {
      id: 6,
      img: Rectangle_148,
    },
    {
      id: 7,
      img: Rectangle_149,
    },
    {
      id: 8,
      img: Rectangle_150,
    },
    {
      id: 9,
      img: Rectangle_151,
    },
  ];
  return (
    <section className='mx-auto tablet:w-[1024px] tablet:h-[358px] h-[676px] flex mt-[10%] tablet:mt-[4%] xl:mt-[10%] xl:min-w-[1720px] xl:min-h-[676px]'>
      <div className='max-w-[520px] tablet:w-[275px] h-[676px] tablet:max-h-[358px] xl:min-w-[520px] xl:min-h-[676px]'>
        <p className='text-[#E2DED3] font-medium text-[25px] xl:text-[25px] tablet:text-[15px] text-center py-[51%] xl:py-[51%] tablet:py-[5%] px-[10%] tablet:px-[5%] bg-[#F93822] tablet:h-[358px] xl:min-h-[676px]'>
          Всем привет, фоточки прилетели!) ищите себя на фото с QrushFest.
          Ссылка в шапке профиля 
        </p>
      </div>
      <Swiper
        modules={[Autoplay, Navigation, Mousewheel]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        speed={2000}
        slidesPerView={2.5}
        initialSlide={1.2}
        loop={true}
        navigation={false}
        mousewheel={true}
      >
        <div className='flex max-w-[1403px] gap-[4%] xl:min-w-[1403px] tablet:leading-3 tablet:w-[743px] tablet:h-[358px] overflow-x-hidden text-[white] tablet:gap-0'>
          {feastSectionImages?.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                className='max-w-[520px] tablet:w-[275px] h-full tablet:h-[358px] xl:min-w-[520px] xl:h-full'
                src={item.img}
                alt={`feastSectionImage${item.id}`}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};
