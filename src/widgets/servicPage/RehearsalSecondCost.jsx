import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import rectangle51 from '../../shared/img/servicesImg/Rectangle_57.png';
import rectangle54 from '../../shared/img/servicesImg/Rectangle_58.png';
import rectangle55 from '../../shared/img/servicesImg/Rectangle_59.png';

export const RehearsalSecondCost = () => {
  const arrayImg = [
    { id: 0, img: rectangle51 },
    { id: 1, img: rectangle54 },
    { id: 2, img: rectangle55 },
    { id: 3, img: rectangle51 },
    { id: 4, img: rectangle51 },
  ];
  return (
    <section className='w-full mx-auto mb-[154px] font-montserrat text-[#E2DED3]'>
      <div className='text-center'>
        <p className='text-[35px] font-[500] pb-[38px]'>
          Вторая комната (22 м<sup className='text-[24px]'>2</sup>)
        </p>
      </div>

      <div className='max-w-[900px] mx-auto xl:max-w-[1820px] lg:max-w-[1320px]'>
        <Swiper
          spaceBetween={0}
          slidesPerView={3.1}
          pagination={{ clickable: true }}
          className='mySwiper'
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
          Стоимость групповой 2 часовой репетиции - 400 сом\чел <br />
          Индивидуальные репетиции - 250\час
        </p>

        <h3 className='mt-[38px] mb-[32px] text-[30px] font-[600] text-center'>
          Список оборудования
        </h3>
        <div className='max-w-[1170px] mx-auto flex justify-between text-left text-[25px] xl:max-w-[1570px] lg:max-w-[1270px]'>
          <div className='w-[490px]'>
            <p className='mb-[16px]'>Гитарные усилители (на выбор)</p>
            <ul className='mb-[32px] text-[#B4B4B4]'>
              <li>
                <p> - Peavey bandit 112 (2шт)</p>
              </li>
              <li> - Marshall MG100DFX</li>
              <li> - Marshall Haze 40</li>
              <li> - Black Heart bh15-112</li>
            </ul>
            <p className='mb-[16px]'>Гитары (на выбор)</p>
            <ul className='text-[#B4B4B4]'>
              <li> - Yamaha BB 5 string</li>
              <li> - Washburn bass 5 string</li>
              <li> - ESP ec256 (форма LesPaul)</li>
              <li> - Ibanez RG</li>
              <li> - Vintage (реплика Gibson SG)</li>
              <li> - Простая китайская Акустика</li>
            </ul>
          </div>
          <div className='w-[390px]'>
            <p className='mb-[16px]'>Микрофоны (на выбор)</p>
            <ul className='text-[#B4B4B4] mb-[15px]'>
              <li> - Shure SM57 (2 шт)</li>
              <li> - AKG D5</li>
              <li> - Shure SM 58</li>
              <li> - tBone sm58</li>
              <li> - Lane (2 шт.)</li>
            </ul>
            <p className='mb-[16px]'>Пульт</p>
            <ul className='text-[#B4B4B4] mb-[15px]'>
              <li> - Yamaha MG 166cx</li>
            </ul>
            <p className='mb-[16px]'>Усилители</p>
            <ul className='text-[#B4B4B4]'>
              <li> - Crown xls 2500</li>
              <li> - Crown CDi 1000</li>
            </ul>
          </div>
          <div className='w-[400px]'>
            <p className='mb-[16px]'>Басовый усилитель</p>
            <ul className='text-[#B4B4B4] mb-[15px]'>
              <li> - Ampeg BA 115</li>
            </ul>
            <p className='mb-[16px]'>Цифровое Фортепиано</p>
            <ul className='text-[#B4B4B4] mb-[15px]'>
              <li> - Yamaha Grand dgx 630</li>
            </ul>
            <p className='mb-[16px]'>Акуст система</p>
            <ul className='text-[#B4B4B4] mb-[15px]'>
              <li> - Alto elvis 15.2xl</li>
              <li> - Сабы Electrovoice</li>
            </ul>
            <p className='mb-[16px]'>Триггер для бочки</p>
            <ul className='text-[#B4B4B4]'>
              <li> - TrigMic 2 Laser Pick</li>
            </ul>
          </div>
        </div>
        <button
          type='submit'
          className='bg-[#F93822] rounded-[30px] py-[20px] px-[100px] mt-[56px]'
        >
          Отправить
        </button>
      </div>
    </section>
  );
};
