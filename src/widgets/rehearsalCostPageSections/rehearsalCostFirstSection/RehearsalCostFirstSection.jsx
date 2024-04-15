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

export const RehearsalCostFirstSection = () => {
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
    <section className='w-full mx-auto font-montserrat text-[#E2DED3] mb-[10px] md:mb-[34px] tablet:mb-[94px] lg:mb-[154px]'>
      <div className='mx-[20px] mt-[40px] sm:mx-auto sm:mt-[80px] tablet:mt-[100px] text-center'>
        <p className='text-[18px] font-[500] pb-[22px] sm:text-[27px] sm:pb-[20px] xl:text-[40px] lg:text-[23px] tablet:text-[20px]'>
          Первая комната (33 м
          <sup className='text-[14px] md:text-[20px] tablet:text-[24px]'>2</sup>
          )
        </p>
        <p className='text-[14px] sm:text-[24px] font-[500] pb-[10px] sm:pb-[30px] tablet:pb-[100px] text-[#FFFFFF] sm:text-[#B4B4B4] xl:text-[32px] lg:text-[23px] tablet:text-[20px]'>
          К вашим услугам есть 3 комнаты для репетиций
        </p>
      </div>
      <section className='ml-[20px] w-[365px] sm:mx-auto sm:w-[550px] tablet:w-[1000px] md:w-[700px] xl:w-[1820px] lg:w-[1320px]'>
        <SwiperPhotoItem arrayImg={arrayImg} />
      </section>
      <div className='w-[365px] sm:w-[560px] text-left mx-[20px] md:w-[700px] tablet:w-full sm:mx-auto mt-[27px] md:mt-[30px] tablet:mt-[100px] md:text-center'>
        <p className='text-left tablet:text-center mx-auto sm:mx-0 tablet:mx-auto text-[20px] sm:text-[30px] md:w-[425px] font-[500] xl:text-[25px] xl:w-[900px] lg:text-[23px] lg:w-[700px] tablet:text-[20px] tablet:w-[600px]'>
          Стоимость групповой 2 часовой репетиции -
          <span className='sm:font-[400]'> 400 сом\чел </span>
        </p>
        <p className='mt-[10px] sm:mt-[16px] sm:text-[#FFFFFF] text-[20px] sm:text-[25px] md:text-[30px] sm:w-[350px] tablet:w-full tablet:text-center sm:text-left tablet:text-[25px] tablet:pt-0'>
          Индивидуальные репетиции - 250\час
        </p>
        <h3 className='mt-[27px] mb-[20px] sm:mt-[38px] sm:mb-[32px] text-[20px] font-[600] sm:text-[30px] sm:text-left tablet:text-center xl:text-[30px] lg:text-[25px] tablet:text-[22px]'>
          Список оборудования
        </h3>
        <section className='sm:w-[600px] md:w-[700px] tablet:w-[900px] lg:w-[1170px] xl:w-[1570px] sm:mx-auto tablet:grid tablet:grid-cols-3 tablet:gap-x-[70px] lg:gap-x-[200px]'>
          {arrayEquipment?.map(el => (
            <ul
              key={el.id}
              className='text-[18px] text-left text-[#B4B4B4] sm:text-[25px] xl:text-[25px] lg:text-[23px] tablet:text-[20px]'
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
            className='underline text-[#F93822] text-[14px] underline-offset-4 mb-[20px]'
            onClick={() => changeList()}
          >
            Полный список
          </p>
        ) : mobileScreen && openList === true ? (
          <p
            className='underline text-[#F93822] text-[14px] underline-offset-4 mb-[20px]'
            onClick={() => changeList()}
          >
            Скрыть
          </p>
        ) : (
          ''
        )} */}
        <div className='mt-[5px] sm:mt-[50px] text-right sm:mb-[39px] sm:text-right tablet:text-center mr-[14px]'>
          <Button variant='serviceButton'>Забронировать</Button>
        </div>
      </div>
    </section>
  );
};
