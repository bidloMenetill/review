import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, scrollToTop } from '../../../shared';
import { useZustandStore } from '../../../app/store/store';
import { useFilteredData } from '../../../shared/hooks/useFilteredData';
import { useFilteredNestedData } from '../../../shared/hooks/useFilteredNestedData';

export const ServiceLinks = () => {
  const { homePageData, getHomePage } = useZustandStore();
  const ImageURL = import.meta.env.VITE_IMG_URL;
  useEffect(() => {
    getHomePage();
  }, []);
  const filteredData = useFilteredData(homePageData, 4);
  const filteredNestedData = useFilteredNestedData(
    filteredData,
    'background',
    7
  );
  const filteredImg = useFilteredNestedData(filteredData, 'background', 8);
  const filteredImgSecond = useFilteredNestedData(
    filteredData,
    'background',
    9
  );
  const filteredImgThird = useFilteredNestedData(
    filteredData,
    'background',
    10
  );
  const filteredText = useFilteredNestedData(filteredData, 'next_text', 8);
  const filteredTextSecond = useFilteredNestedData(
    filteredData,
    'next_text',
    9
  );
  const filteredTextThird = useFilteredNestedData(
    filteredData,
    'next_text',
    10
  );
  const studioData = {
    background: ImageURL + filteredNestedData[0]?.background,
    title: filteredData[0]?.title,
    firstImg: ImageURL + filteredImg[0]?.background,
    secondImg: ImageURL + filteredImgSecond[0]?.background,
    thirdImg: ImageURL + filteredImgThird[0]?.background,
    firstSubTitle: filteredText[0]?.text,
    secondSubTitle: filteredTextSecond[0]?.text,
    thirdSubTitle: filteredTextThird[0]?.text,
  };
  const arrayLinks = [
    {
      img: studioData.secondImg,
      title: studioData.secondSubTitle,
      links: '/sound-recording',
    },
    {
      img: studioData.thirdImg,
      title: studioData.thirdSubTitle,
      links: '/music-courses',
    },
    {
      img: studioData.firstImg,
      title: studioData.firstSubTitle,
      links: '/rehearsal-cost',
    },
  ];
  return (
    <section className='relative w-full h-[600px] sm:h-[1200px] tablet:h-[1100px] lg:h-[1250px] text-[#F5F5F5]'>
      <img
        className='absolute z-[-1] w-full h-[100%] object-cover'
        src={studioData.background}
        alt='Задний-фон'
      />
      <div className='mx-auto pt-[145px] sm:pt-[134px] w-[335px] mb-[232px] tablet:mb-[150px] sm:w-[665px] tablet:w-[1000px] tablet:pt-[250px] xl:w-[1720px] lg:w-[1200px]'>
        <h2 className='text-[20px] mb-[20px] sm:text-[45px] tablet:text-[75px] xl:text-[100px] xl:mb-[100px] lg:text-[90px]'>
          {studioData.title}
        </h2>
        <section className='tablet:flex tablet:justify-between tablet:gap-[20px]'>
          {arrayLinks &&
            arrayLinks?.map((item, index) => (
              <div
                key={index}
                className='w-full h-[120px] sm:h-[268px] tablet:h-[500px] lg:h-[600px] xl:h-[700px] bg-[rgba(0,0,0,0.60)] border-[1px] border-solid border-[#7a7a7a] rounded-[6px] lg:rounded-[30px] flex justify-between tablet:block px-[10px] py-[12px] mb-[10px] sm:p-[20px] tablet:p-[20px] tablet:w-[33%]'
              >
                <img
                  className='w-[175px] h-[95px] rounded-[6px] tablet:w-[550px] sm:w-[375px] sm:h-[226px] tablet:h-[320px] xl:w-[900px] lg:w-[700px] lg:h-[390px] xl:h-[490px] object-cover border-[1px] border-solid border-[#7a7a7a] lg:rounded-[30px]'
                  src={item.img}
                  alt='rectangl'
                />
                <div className='mx-[auto] text-center my-[13px] sm:my-[40px] tablet:mt-[20px]'>
                  <h2 className='text-[14px] mb-[20px] sm:w-[195px] sm:text-[26px] tablet:w-[300px] tablet:text-[30px] lg:font-[700] tablet:mx-auto lg:w-[350px] xl:w-[450px] tablet:mb-[20px]'>
                    {item.title}
                  </h2>
                  <Link to={item.links}>
                    <Button onClick={scrollToTop} variant='serviceButton'>
                      Подробнее
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
        </section>
      </div>
    </section>
  );
};
