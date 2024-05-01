import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Button, useMediaQuery } from '../../../shared';

export const CardsSwiperShopCardsSection = ({ card, properties }) => {
  const isMobile = useMediaQuery('(min-width: 450px) and (max-width: 575px)');
  const scrollRef = useRef();

  const handleWheelScroll = event => {
    if (event.deltaY > 0) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div
      className={`max-w-[728px] h-[343px] sm:max-w-[1110px] md:max-w-[1464px] mt-[56px] mx-auto sm:h-[534px] md:h-[700px] md:mt-[100px] relative ${isMobile ? 'max-w-[870px] h-[452px]' : ''}`}
      key={card.id}
      onWheel={handleWheelScroll}
      ref={scrollRef}
    >
      <Swiper
        modules={[Navigation, Mousewheel]}
        speed={2000}
        navigation={false}
        mousewheel={true}
        breakpoints={{
          320: {
            slidesPerView: 1.1,
            spaceBetween: 10,
            slideToClickedSlide: true,
          },
          400: {
            slidesPerView: 1.1,
            spaceBetween: 10,
            slideToClickedSlide: true,
          },
          480: {
            slidesPerView: 1.1,
            spaceBetween: 10,
            slideToClickedSlide: true,
          },
          768: {
            slidesPerView: 1.1,
            spaceBetween: 10,
            slideToClickedSlide: true,
          },
        }}
      >
        <div
          className={`max-w-[728px] h-[343px] md:max-w-[1464px] px-[16px] sm:px-[16px] md:px-[36px] sm:max-w-[1110px] mx-auto  flex justify-between items-center sm:gap-x-[10px] mt-[30px] absolute  ${isMobile ? 'max-w-[870px] h-[452px]' : ''}`}
        >
          <SwiperSlide>
            <div
              className={`w-[340px] h-[343px] mx-auto sm:w-[524px] sm:h-[534px] md:w-[691px] md:h-[700px]  ${isMobile ? 'w-[409px] h-[452px]' : ''}`}
            >
              <img
                className={`w-[340px] h-[343px] mx-auto border-[0.50px] border-[solid] border-[#e2ded3] rounded-[16px] sm:w-[524px] sm:h-[534px] md:w-[691px] md:h-[700px] ${isMobile ? 'w-[409px] h-[452px]' : ''}`}
                src={card.img}
                alt='cardImg'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`w-[340px] h-[343px] flex justify-center flex-col items-center border-[0.50px] border-[solid] border-[#e2ded3] rounded-[16px] px-[8px] sm:w-[524px] sm:h-[534px] md:w-[691px] md:h-[700px] ${isMobile ? 'w-[409px] h-[452px]' : ''}`}
            >
              <div
                className={`w-[278px] h-[258px] sm:w-[424px] sm:h-[400px] md:w-[560px] md:h-[525px] mx-auto ${isMobile ? 'w-[334px] h-[339px]' : ''}`}
              >
                <h2
                  className={`w-[220px] sm:w-[350px] md:w-[440px] font-bold text-[#E2DED3] text-[14px] sm:text-[22px] md:text-[27px] ${isMobile ? 'text-[18px] w-[295px]' : ''}`}
                >
                  {card.instrumentName}
                </h2>
                <ul
                  className={`text-[12px] sm:text-[18px] md:text-[23px] font-medium mt-[8px] md:mt-[15px] ml-[24px] ${isMobile ? 'text-[16px]' : ''}`}
                >
                  {properties.map(property => (
                    <li key={property}>
                      <p>{card[property]}</p>
                    </li>
                  ))}
                </ul>
                <div
                  className={`w-[278px] mx-auto font-montserrat sm:w-[424px] md:w-[344px] md:h-[45px] flex justify-around flex-col items-center gap-x-[3px] mt-[15px] ${isMobile ? 'w-[334px]' : ''}`}
                >
                  <p
                    className={`font-semibold flex-none text-[#d9d9d9] opacity-70 text-[14px] sm:text-[16px] md:text-[27px] md:font-semibold mt-[8px] md:mt-[15px] ${isMobile ? 'text-[14px]' : ''}`}
                  >
                    Цена: {card.price}
                  </p>
                  <div className='mt-[16px] md:mt-[31px] text-center'>
                    <Button variant='buyButton'>Купить</Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};
