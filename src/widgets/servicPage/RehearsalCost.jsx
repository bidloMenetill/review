import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import rectangle51 from '../../shared/img/servicesImg/Rectangle_57.png';
import rectangle54 from '../../shared/img/servicesImg/Rectangle_58.png';
import rectangle55 from '../../shared/img/servicesImg/Rectangle_59.png';

export const RehearsalCost = () => {
  const arrayImg = [
    { id: 0, img: rectangle51 },
    { id: 1, img: rectangle54 },
    { id: 2, img: rectangle55 },
    { id: 3, img: rectangle51 },
    { id: 4, img: rectangle51 },
  ];
  const arrayEquipment = [
    {
      id: 0,
      title: 'Гитарные усилители (на выбор)',
      firstDescription: '- Peavey bandit 112 (2шт)',
      secondDescription: '- Marshall MG100DFX',
      type: [
        '- Peavey bandit 112 (2шт)',
        '- Marshall MG100DFX',
        '- Marshall Haze 40',
        '- Black Heart bh15-112',
      ],
    },
    {
      id: 1,
      title: 'Гитары (на выбор)',
      type: [
        '- Peavey bandit 112 (2шт)',
        '- Marshall MG100DFX',
        '- Marshall Haze 40',
        '- Black Heart bh15-112',
      ],
    },
    {
      id: 2,
      title: 'Микрофоны (на выбор)',
      type: [
        '- Shure SM57 (2 шт)',
        '- AKG D5',
        '- Shure SM 58',
        '- tBone sm58',
        '- Lane (2 шт.)',
      ],
    },
    {
      id: 3,
      title: 'Пульт',
      type: ['- Yamaha MG 166cx'],
    },
    {
      id: 4,
      title: 'Усилители',
      type: ['- Crown xls 2500', '- Crown CDi 1000'],
    },
    {
      id: 5,
      title: 'Басовый усилитель',
      type: ['- Ampeg BA 115'],
    },
    {
      id: 6,
      title: 'Цифровое Фортепиано',
      type: ['- Yamaha Grand dgx 630'],
    },
    {
      id: 7,
      title: 'Акуст система',
      type: ['- Alto elvis 15.2xl', '- Сабы Electrovoice'],
    },
    {
      id: 8,
      title: 'Триггер для бочки',
      type: ['- TrigMic 2 Laser Pick'],
    },
  ];
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
          Стоимость групповой 2 часовой репетиции - 400 сом\чел Индивидуальные
          <br />
          репетиции - 250\час
        </p>
        <h3 className='mt-[38px] mb-[32px] text-[30px] font-[600] text-center'>
          Список оборудования
        </h3>
        <div className='max-w-[1170px] mx-auto flex justify-between text-left text-[25px] xl:max-w-[1570px] lg:max-w-[1270px]'>
          {/* <div className='w-[490px]'> */}
          {arrayEquipment &&
            arrayEquipment.map(el => {
              return (
                <ul key={el.id} className='mb-[32px] w-[28%]'>
                  <p className='mb-[16px]'>{el.title}</p>
                  {el.type.map((type, indx) => {
                    return (
                      <p key={indx} className='text-[#B4B4B4]'>
                        {type}
                      </p>
                    );
                  })}
                </ul>
              );
            })}
          {/* <p className='mb-[16px]'>Гитарные усилители (на выбор)</p>
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
          </div> */}
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
