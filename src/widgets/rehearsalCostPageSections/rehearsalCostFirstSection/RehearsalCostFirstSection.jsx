import React, { useState } from 'react';
import { Button, CardRehearsalSection, SwiperPhotoItem } from '../../../shared';

export const RehearsalCostFirstSection = ({ item }) => {
  const [openList, setOpenList] = useState(false);
  const changeList = () => {
    setOpenList(!openList);
  };
  const arrayImg = item.description[0].image;
  const arrayEquipment = item.description[0].tech_name;
  return (
    <section className='w-full mx-auto font-montserrat text-[#E2DED3] mb-[10px] md:mb-[34px] tablet:mb-[94px] lg:mb-[154px]'>
      <div className='mx-[20px] mt-[40px] sm:mx-auto sm:mt-[80px] tablet:mt-[100px] text-center'>
        <p className='text-[18px] font-[500] pb-[22px] sm:text-[27px] sm:pb-[20px] xl:text-[40px] lg:text-[23px] tablet:text-[20px]'>
          {item.service_name}
        </p>
        <p className='text-[14px] sm:text-[24px] font-[500] pb-[10px] sm:pb-[30px] tablet:pb-[100px] text-[#FFFFFF] sm:text-[#B4B4B4] xl:text-[32px] lg:text-[23px] tablet:text-[20px]'>
          {item.description[0].title}
        </p>
      </div>
      <section className='ml-[20px] w-[90%] sm:mx-auto sm:w-[95%] xl:w-[1820px]'>
        <SwiperPhotoItem arrayImg={arrayImg} />
      </section>
      <div className='w-[365px] sm:w-[560px] text-left mx-[20px] md:w-[700px] tablet:w-full tablet:mx-auto mt-[27px] md:mt-[30px] tablet:mt-[100px] md:text-center'>
        <p
          id={item.id}
          className='text-left tablet:text-center mx-auto sm:mx-0 tablet:mx-auto text-[20px] sm:text-[30px] md:w-[425px] font-[500] xl:text-[25px] xl:w-[900px] lg:text-[23px] lg:w-[700px] tablet:text-[20px] tablet:w-[600px]'
        >
          {item.description[0].desc1}
        </p>
        <p className='mt-[10px] sm:mt-[16px] sm:text-[#FFFFFF] text-[20px] sm:text-[25px] md:text-[30px] sm:w-[350px] tablet:w-full tablet:text-center sm:text-left tablet:text-[25px] tablet:pt-0'>
          {item.description[0].list_tech}
        </p>
        <h3 className='mt-[27px] mb-[20px] sm:mt-[38px] sm:mb-[32px] text-[20px] font-[600] sm:text-[30px] sm:text-left tablet:text-center xl:text-[30px] lg:text-[25px] tablet:text-[22px]'>
          Список оборудования
        </h3>
        <section className='sm:w-[95%] xl:w-[1570px] tablet:mx-auto tablet:grid tablet:grid-cols-3 tablet:gap-x-[70px] lg:gap-x-[200px]'>
          {arrayEquipment?.map(item => (
            <ul
              key={item.id}
              className='text-[18px] text-left text-[#B4B4B4] sm:text-[25px] xl:text-[25px] lg:text-[23px] tablet:text-[20px]'
            >
              <li>
                <p className='mb-[16px] mt-[16px] text-[#E2DED3]'>
                  {item.tech_name}
                </p>
              </li>
              <CardRehearsalSection
                item={item.description}
                openList={openList}
              />
            </ul>
          ))}
        </section>
        <p
          className='tablet:hidden underline text-[#F93822] text-[24px] md:text-[28px] underline-offset-4 mb-[20px] mt-[20px] text-left'
          onClick={() => changeList()}
        >
          {openList ? <a href={`#${item.id}`}>Скрыть</a> : 'Полный список'}
        </p>
        <div className='mt-[5px] sm:mt-[50px] text-right sm:mb-[39px] sm:text-right tablet:text-center mr-[14px]'>
          <Button variant='serviceButton'>Забронировать</Button>
        </div>
      </div>
    </section>
  );
};
