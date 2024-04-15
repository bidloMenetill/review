import React, { useState } from 'react';
import rectangle51 from '../../../shared/img/servicesImg/Rectangle_57.png';
import rectangle54 from '../../../shared/img/servicesImg/Rectangle_58.png';
import rectangle55 from '../../../shared/img/servicesImg/Rectangle_59.png';
import {
  Button,
  CardRehearsalSection,
  useMediaQuery,
  SwiperPhotoItem,
} from '../../../shared';

export const RehearsalCostThirdSection = () => {
  const mobileScreen = useMediaQuery('(max-width: 576px)');
  const [openList, setOpenList] = useState(false);
  const changeList = () => {
    setOpenList(!openList);
  };
  const changeBackList = () => {
    setOpenList(!openList);
    window.scrollTo(0, 4350);
  };
  const arrayImg = [
    { id: 0, img: rectangle51 },
    { id: 1, img: rectangle54 },
    { id: 2, img: rectangle55 },
    { id: 3, img: rectangle51 },
    { id: 4, img: rectangle51 },
  ];
  const arrayEquipment = [
    [
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
    ],
    [
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
    ],
    [
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
    ],
  ];
  return (
    <section className='w-full mx-auto font-montserrat text-[#E2DED3] mb-[10px] md:mb-[34px] tablet:mb-[94px] lg:mb-[154px]'>
      <div className='mx-[20px] mt-[40px] sm:mx-auto sm:mt-[80px] tablet:mt-[100px] text-center'>
        <p className='text-[18px] font-[500] pb-[22px] sm:text-[27px] sm:pb-[20px] xl:text-[40px] lg:text-[23px] tablet:text-[20px]'>
          Третья комната (13 м
          <sup className='text-[14px] md:text-[20px] tablet:text-[24px]'>2</sup>
          )
        </p>
      </div>
      <section className='ml-[20px] w-[365px] sm:mx-auto sm:w-[550px] tablet:w-[1000px] md:w-[700px] xl:w-[1820px] lg:w-[1320px]'>
        <SwiperPhotoItem arrayImg={arrayImg} />
      </section>
      <div className='w-[365px] sm:w-[560px] text-left mx-[20px] md:w-[700px] tablet:w-full sm:mx-auto mt-[27px] md:mt-[30px] tablet:mt-[100px] md:text-center'>
        <p className='text-left tablet:text-center mx-auto sm:mx-0 tablet:mx-auto text-[20px] sm:text-[30px] md:w-[425px] font-[500] xl:text-[25px] xl:w-[900px] lg:text-[23px] lg:w-[700px] tablet:text-[20px] tablet:w-[600px]'>
          Стоимость групповой 2 часовой репетиции -
          <span className='font-[700] sm:font-[400]'> 400 сом\чел </span>
        </p>
        <p className='mt-[10px] sm:mt-[16px] sm:text-[#FFFFFF] text-[20px] sm:text-[25px] md:text-[30px] sm:w-[350px] tablet:w-full tablet:text-center sm:text-left tablet:text-[25px] tablet:pt-0'>
          Индивидуальные репетиции - 250\час
        </p>
        <h3 className='mt-[27px] mb-[20px] sm:mt-[38px] sm:mb-[32px] text-[20px] font-[600] sm:text-[30px] sm:text-left tablet:text-center xl:text-[30px] lg:text-[25px] tablet:text-[22px]'>
          Список оборудования
        </h3>
        <div className='max-w-[1170px] mx-auto md:flex md:justify-between text-left xl:max-w-[1570px] lg:max-w-[1270px]'>
          <section className='w-full md:flex md:justify-between gap-[146px]'>
            {mobileScreen && openList === false ? (
              <CardRehearsalSection
                openList={openList}
                changeList={changeList}
                el={arrayEquipment[0]}
              />
            ) : (
              arrayEquipment?.map((el, ind) => (
                <section key={ind}>
                  <CardRehearsalSection
                    openList={openList}
                    changeList={changeList}
                    el={el}
                  />
                </section>
              ))
            )}
          </section>
        </div>
        {mobileScreen && openList === false ? (
          <p
            className='underline underline-offset-4 text-[#F93822] text-[14px] mb-[20px]'
            onClick={() => changeList()}
          >
            Полный список
          </p>
        ) : mobileScreen && openList === true ? (
          <p
            className='underline underline-offset-4 text-[#F93822] text-[14px] mb-[20px]'
            onClick={() => changeBackList()}
          >
            Скрыть
          </p>
        ) : (
          ''
        )}
        <div className='mt-[5px] text-right sm:text-center mr-[14px]'>
          <Button variant='serviceButton'>Забронировать</Button>
        </div>
      </div>
    </section>
  );
};
