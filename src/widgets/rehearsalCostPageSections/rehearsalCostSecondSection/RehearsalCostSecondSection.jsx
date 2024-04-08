import React from 'react';
import rectangle51 from '../../../shared/img/servicesImg/Rectangle_57.png';
import rectangle54 from '../../../shared/img/servicesImg/Rectangle_58.png';
import rectangle55 from '../../../shared/img/servicesImg/Rectangle_59.png';
import {
  Button,
  // CardRehearsalSection,
  // useMediaQuery,
  SwiperPhotoItem,
} from '../../../shared';

export const RehearsalCostSecondSection = () => {
  // const mobileScreen = useMediaQuery('(max-width: 576px)');
  // const [openList, setOpenList] = useState(false);
  // const changeList = () => {
  //   setOpenList(!openList);
  // };
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
    {
      id: 2,
      title: 'Микрофоны (на выбор)',
      firstDescription: '- Shure SM57 (2 шт)',
      secondDescription: '- AKG D5',
      thirdDescription: '- Shure SM 58',
      fourthDescription: '- tBone sm58',
      fifthDescription: '- Lane (2 шт.)',
      sixthDescription: '',
    },
    {
      id: 3,
      title: 'Пульт',
      firstDescription: '- Yamaha MG 166cx',
      secondDescription: '',
      thirdDescription: '',
      fourthDescription: '',
      fifthDescription: '',
      sixthDescription: '',
    },
    {
      id: 4,
      title: 'Усилители',
      firstDescription: '- Crown xls 2500',
      secondDescription: '- Crown CDi 1000',
      thirdDescription: '',
      fourthDescription: '',
      fifthDescription: '',
      sixthDescription: '',
    },
    {
      id: 5,
      title: 'Басовый усилитель',
      firstDescription: '- Ampeg BA 115',
      secondDescription: '',
      thirdDescription: '',
      fourthDescription: '',
      fifthDescription: '',
      sixthDescription: '',
    },
    {
      id: 6,
      title: 'Цифровое Фортепиано',
      firstDescription: '- Yamaha Grand dgx 630',
      secondDescription: '',
      thirdDescription: '',
      fourthDescription: '',
      fifthDescription: '',
      sixthDescription: '',
    },
    {
      id: 7,
      title: 'Акуст система',
      firstDescription: '- Alto elvis 15.2xl',
      secondDescription: '- Сабы Electrovoice',
      thirdDescription: '',
      fourthDescription: '',
      fifthDescription: '',
      sixthDescription: '',
    },
    {
      id: 8,
      title: 'Триггер для бочки',
      firstDescription: '- TrigMic 2 Laser Pick',
      secondDescription: '',
      thirdDescription: '',
      fourthDescription: '',
      fifthDescription: '',
      sixthDescription: '',
    },
    {
      id: 9,
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
    <section className='w-full mx-auto mb-[69px] md:mb-[154px] font-montserrat text-[#E2DED3]'>
      <div className='mx-[20px] sm:text-center'>
        <p className='text-[18px] font-[500] pb-[22px] md:pb-[20px] xl:text-[40px] lg:text-[23px] tablet:text-[20px]'>
          Вторая комната (22 м
          <sup className='text-[14px] md:text-[24px]'>2</sup>)
        </p>
      </div>
      <section className='ml-[20px] w-[365px] sm:mx-auto xl:w-[1820px] lg:w-[1320px]'>
        <SwiperPhotoItem arrayImg={arrayImg} />
      </section>
      <div className='w-[365px] text-left mx-[20px] md:w-full sm:mx-auto mt-[27px] md:mt-[100px] md:text-center'>
        <p className='md:w-[900px] text-left md:text-center mx-auto text-[14px] sm:text-[18px] font-[500] xl:text-[25px] xl:w-[900px] lg:text-[23px] lg:w-[700px] tablet:text-[20px] tablet:w-[600px]'>
          Стоимость групповой 2 часовой репетиции -
          <span className='font-[700] sm:font-[400]'> 400 сом\чел </span>
        </p>
        <p className='mt-[10px] md:mt-0 sm:text-[#FFFFFF] sm:text-[25px] '>
          Индивидуальные репетиции - 250\час
        </p>
        <h3 className='mt-[27px] mb-[20px] md:mt-[38px] md:mb-[32px] text-[20px] font-[600] xl:text-[30px] lg:text-[25px] tablet:text-[22px]'>
          Список оборудования
        </h3>
        <section className=' md:w-[500px] lg:w-[1170px] xl:w-[1570px] md:mx-auto md:grid md:grid-cols-3 md:gap-x-[200px]'>
          {arrayEquipment?.map(el => (
            <ul
              key={el.id}
              className='text-[18px] text-left text-[#B4B4B4] xl:text-[25px] lg:text-[23px] tablet:text-[20px]'
            >
              <li>
                <p className='mb-[16px] mt-[16px] text-[#E2DED3]'>{el.title}</p>
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
          ))}
        </section>
        {/* {mobileScreen && openList === false ? (
          <p
            className='underline underline-offset-4 text-[#F93822] text-[14px] mb-[20px]'
            onClick={() => changeList()}
          >
            Полный список
          </p>
        ) : mobileScreen && openList === true ? (
          <p
            className='underline underline-offset-4 text-[#F93822] text-[14px] mb-[20px]'
            onClick={() => changeList()}
          >
            Скрыть
          </p>
        ) : (
          ''
        )} */}
        <div className='mt-[56px]'>
          <Button variant='orangeButton'>Отправить</Button>
        </div>
      </div>
    </section>
  );
};
