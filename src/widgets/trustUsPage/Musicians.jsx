import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import lightFon from '../../shared/img/trustUs/lightFon.svg';
import scriptonit from '../../shared/img/trustUs/scriptonit.svg';


export const Musicians = () => {
  const { t } = useTranslation();
  const musicant = [
    {
      "background": lightFon,
      "img": scriptonit,
      "name": t('trustUsPage.thirdSection.humanName'),
      "role": t('trustUsPage.thirdSection.role')
    },
    {
      "background": lightFon,
      "img": scriptonit,
      "name": t('trustUsPage.thirdSection.humanName'),
      "role": t('trustUsPage.thirdSection.role')
    },
    {
      "background": lightFon,
      "img": scriptonit,
      "name": t('trustUsPage.thirdSection.humanName'),
      "role": t('trustUsPage.thirdSection.role')
    },
    {
      "background": lightFon,
      "img": scriptonit,
      "name": t('trustUsPage.thirdSection.humanName'),
      "role": t('trustUsPage.thirdSection.role')
    },
    {
      "background": lightFon,
      "img": scriptonit,
      "name": t('trustUsPage.thirdSection.humanName'),
      "role": t('trustUsPage.thirdSection.role')
    },
  ]

  return (
    <div className="bg-cover bg-no-repeat bg-center h-[810px] flex justify-center bg-black overflow-hidden">
      <div className='container'>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          // centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: false }}
          navigation={false}
          modules={[ Autoplay]}
          className="mySwiper"
        >
          <div className="w-[2900px] flex  justify-center  text-white">
            {musicant.map((mus, index) => (
             <SwiperSlide>
              <div className="mt-[50px] px-[10px] relative text-white">
                <div
                  className="bg-cover bg-no-repeat bg-center w-[560px] h-[660px]"
                  style={{ backgroundImage: `url(${mus.background})` }}
                >
                  <img
                    className="w-[424px] h-[270px] absolute mt-[165px] ml-[68px]"
                    src={mus.img}
                    alt="scriptonit"
                  />
                  <div className="w-[281px] h-[91px] absolute text-center mt-[533px] mx-[140px]">
                    <h4 className="text-[30px] font-bold font-montserrat">
                      {mus.name}
                    </h4>
                    <p className="text-[20px] font-bold font-montserrat">{mus.role}</p>
                    <div className="w-[281px] h-[1px] bg-[#DC6441]"></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            ))}
        </div>
        </Swiper>
      </div>
    </div>
  );
};