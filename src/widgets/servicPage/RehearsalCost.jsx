import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import rectangle51 from '../../shared/img/servicesImg/Rectangle_57.png';
import rectangle54 from '../../shared/img/servicesImg/Rectangle_58.png';
import rectangle55 from '../../shared/img/servicesImg/Rectangle_59.png';

export const RehearsalCost = () => {
  return (
    <section className='w-full mx-auto font-montserrat text-[#E2DED3] mb-[154px]'>
      <div className='text-center'>
        <h3 className='text-[50px] font-[500] mb-[25px]'>РЕПЕТИЦИОННАЯ БАЗА</h3>
        <p className='text-[25px] font-[500] pb-[25px] text-[#B4B4B4]'>
          К вашим услугам есть 3 комнаты для репетиций
        </p>
        <p className='text-[35px] font-[500] pb-[38px]'>
          Первая комната (33 м<sup className='text-[24px]'>2</sup>)
        </p>
      </div>

      <div className='pl-[100px]'>
        <Swiper
          spaceBetween={200}
          slidesPerView={3.4}
          pagination={{ clickable: true }}
          className='mySwiper'
        >
          <div className='flex justify-center text-white'>
            <SwiperSlide>
              <div className='w-[560px] h-[320px]'>
                <img
                  className='w-[100%] h-[100%] object-cover border-solid border-[1px] rounded-[16px] border-[#E2DED3]'
                  src={rectangle51}
                  alt='rectangle'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-[560px] h-[320px]'>
                <img
                  className='w-[100%] h-[100%] object-cover border-solid border-[1px] rounded-[16px] border-[#E2DED3]'
                  src={rectangle54}
                  alt='rectangle'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-[560px] h-[320px]'>
                <img
                  className='w-[100%] h-[100%] object-cover border-solid border-[1px] rounded-[16px] border-[#E2DED3]'
                  src={rectangle55}
                  alt='rectangle'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-[560px] h-[320px]'>
                <img
                  className='w-[100%] h-[100%] object-cover border-solid border-[1px] rounded-[16px] border-[#E2DED3]'
                  src={rectangle51}
                  alt='rectangle'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-[560px] h-[320px]'>
                <img
                  className='w-[100%] h-[100%] object-cover border-solid border-[1px] rounded-[16px] border-[#E2DED3]'
                  src={rectangle51}
                  alt='rectangle'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-[560px] h-[320px]'>
                <img
                  className='w-[100%] h-[100%] object-cover border-solid border-[1px] rounded-[16px] border-[#E2DED3]'
                  src={rectangle51}
                  alt='rectangle'
                />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      <div className='w-full mx-auto mt-[100px] text-center'>
        <p className='text-[25px] font-[500]'>
          Стоимость групповой 2 часовой репетиции - 400 сом\чел Индивидуальные
          <br />
          репетиции - 250\час
        </p>
        <h3 className='mt-[38px] mb-[32px] text-[30px] font-[600] text-center'>
          Список оборудования
        </h3>
        <div className='max-w-[1170px] mx-auto flex justify-between text-left text-[25px] xl:max-w-[1570px] lg:max-w-[1270px]'>
          <div className='w-[490px]'>
            <p className='mb-[16px]'>Гитарные усилители (на выбор)</p>
            <ul className='mb-[32px] text-[#B4B4B4]'>
              <li> - Peavey bandit 112 (2шт)</li>
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
