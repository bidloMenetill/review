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
  const firstArrayEquipment = [
    {
      id: 0,
      title: 'Гитарные усилители (на выбор)',
      firstDescription: '- Peavey bandit 112 (2шт)',
      secondDescription: '- Marshall MG100DFX',
      thirdDescription: '- Marshall Haze 40',
      fourthDescription: ' Black Heart bh15-112',
      fifthDescription: '',
      sixthDescription: '',
    },
    {
      id: 1,
      title: 'Гитары (на выбор)',
      firstDescription: '- Yamaha BB 5 string',
      secondDescription: '- Washburn bass 5 string',
      thirdDescription: '- ESP ec256 (форма LesPaul)',
      fourthDescription: '- Ibanez RG',
      fifthDescription: '- Vintage (реплика Gibson SG)',
      sixthDescription: '- Простая китайская Акустика',
    },
  ];
  const secondArrayEquipment = [
    {
      id: 0,
      title: 'Микрофоны (на выбор)',
      firstDescription: '- Shure SM57 (2 шт)',
      secondDescription: '- AKG D5',
      thirdDescription: '- Shure SM 58',
      fourthDescription: '- tBone sm58',
      fifthDescription: '- Lane (2 шт.)',
      sixthDescription: '',
    },
    {
      id: 1,
      title: 'Пульт',
      firstDescription: '- Yamaha MG 166cx',
      secondDescription: '',
      thirdDescription: '',
      fourthDescription: '',
      fifthDescription: '',
      sixthDescription: '',
    },
    {
      id: 2,
      title: 'Усилители',
      firstDescription: '- Crown xls 2500',
      secondDescription: '- Crown CDi 1000',
      thirdDescription: '',
      fourthDescription: '',
      fifthDescription: '',
      sixthDescription: '',
    },
  ];
  const thirdArrayEquipment = [
    {
      id: 0,
      title: 'Басовый усилитель',
      firstDescription: '- Ampeg BA 115',
      secondDescription: '',
      thirdDescription: '',
      fourthDescription: '',
      fifthDescription: '',
      sixthDescription: '',
    },
    {
      id: 1,
      title: 'Цифровое Фортепиано',
      firstDescription: '- Yamaha Grand dgx 630',
      secondDescription: '',
      thirdDescription: '',
      fourthDescription: '',
      fifthDescription: '',
      sixthDescription: '',
    },
    {
      id: 2,
      title: 'Акуст система',
      firstDescription: '- Alto elvis 15.2xl',
      secondDescription: '- Сабы Electrovoice',
      thirdDescription: '',
      fourthDescription: '',
      fifthDescription: '',
      sixthDescription: '',
    },
    {
      id: 3,
      title: 'Триггер для бочки',
      firstDescription: '- TrigMic 2 Laser Pick',
      secondDescription: '',
      thirdDescription: '',
      fourthDescription: '',
      fifthDescription: '',
      sixthDescription: '',
    },
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
          <section className='flex justify-center text-white'>
            {arrayImg?.map(el => {
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
          </section>
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
          <section className='w-[36%]'>
            {firstArrayEquipment?.map(el => {
              return (
                <ul key={el.id} className='mb-[32px] text-[#B4B4B4]'>
                  <li>
                    <p className='mb-[16px] text-[#E2DED3]'>{el.title}</p>
                  </li>
                  <li>
                    <p>{el.firstDescription}</p>
                  </li>
                  <li>
                    <p>{el.secondDescription}</p>
                  </li>
                  <li>
                    <p>{el.thirdDescription}</p>
                  </li>
                  <li>
                    <p>{el.fourthDescription}</p>
                  </li>
                  <li>
                    <p>{el.fifthDescription}</p>
                  </li>
                  <li>
                    <p>{el.sixthDescription}</p>
                  </li>
                </ul>
              );
            })}
          </section>
          <section className='w-[28%]'>
            {secondArrayEquipment?.map(el => {
              return (
                <ul key={el.id} className='mb-[32px] text-[#B4B4B4]'>
                  <li>
                    <p className='mb-[16px] text-[#E2DED3]'>{el.title}</p>
                  </li>
                  <li>
                    <p>{el.firstDescription}</p>
                  </li>
                  <li>
                    <p>{el.secondDescription}</p>
                  </li>
                  <li>
                    <p>{el.thirdDescription}</p>
                  </li>
                  <li>
                    <p>{el.fourthDescription}</p>
                  </li>
                  <li>
                    <p>{el.fifthDescription}</p>
                  </li>
                  <li>
                    <p>{el.sixthDescription}</p>
                  </li>
                </ul>
              );
            })}
          </section>
          <section className='w-[28%]'>
            {thirdArrayEquipment?.map(el => {
              return (
                <ul key={el.id} className='mb-[32px] text-[#B4B4B4]'>
                  <li>
                    <p className='mb-[16px] text-[#E2DED3]'>{el.title}</p>
                  </li>
                  <li>
                    <p>{el.firstDescription}</p>
                  </li>
                  <li>
                    <p>{el.secondDescription}</p>
                  </li>
                  <li>
                    <p>{el.thirdDescription}</p>
                  </li>
                  <li>
                    <p>{el.fourthDescription}</p>
                  </li>
                  <li>
                    <p>{el.fifthDescription}</p>
                  </li>
                  <li>
                    <p>{el.sixthDescription}</p>
                  </li>
                </ul>
              );
            })}
          </section>
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
