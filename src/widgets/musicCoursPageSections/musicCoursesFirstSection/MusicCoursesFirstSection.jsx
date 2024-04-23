import React from 'react';
import { CardMusicSection, SwiperPhotoItem } from '../../../shared';
import { MusicCoursesItem } from './musicCoursesItem/MusicCoursesItem';

export const MusicCoursesFirstSection = ({ item }) => {
  // const arrayMusicCourses = item.description[0].mc_name;
  // const arrayImg = item.description[0].image;
  console.log(item);
  return (
    <section className='w-full mx-auto font-montserrat text-[#E2DED3] md:mb-[90px] tablet:mb-[154px]'>
      {/* <div className='mx-[20px] text-center sm:mt-[30px] tablet:mt-[100px]'>
        <p className='text-[18px] font-[500] pb-[22px] md:pb-[38px] xl:text-[25px] lg:text-[23px] tablet:text-[20px]'>
          {item.service_name}
        </p>
        <p className='text-[14px] sm:text-[18px] font-[500] pb-[10px] md:pb-[25px] text-[#FFFFFF] sm:text-[#B4B4B4] xl:text-[25px] lg:text-[23px] tablet:text-[20px]'>
          {item.description[0].title}
        </p>
      </div>

      <div className='ml-[20px] w-[365px] sm:mx-auto sm:w-[95%] xl:w-[1820px]'>
        <SwiperPhotoItem arrayImg={arrayImg} />
      </div>
      <div className='text-left mx-[20px] md:w-full sm:mx-auto mt-[27px] md:mt-[50px] tablet:mt-[100px] md:text-center'>
        <div className='sm:w-[90%] sm:mx-auto lg:flex lg:justify-between text-left xl:w-[1570px] lg:w-[1270px]'>
          <section className='w-[100%] tablet:grid tablet:grid-cols-2 tablet:gap-[200px]'>
            {arrayMusicCourses?.map(el => (
              <div
                key={el.id}
                className='mb-[32px] sm:mx-auto text-[18px] text-[#B4B4B4] xl:text-[25px] lg:text-[23px] tablet:text-[20px]'
              >
                <h2 className='text-[#F5F5F5] mb-[8px] tablet:mb-[16px]'>
                  {el.course_name}
                </h2>
                <CardMusicSection description={el.description} />
              </div>
            ))}
          </section>
        </div>
      </div> */}
      {item.description?.map(item => (
        <MusicCoursesItem item={item} />
      ))}
    </section>
  );
};
