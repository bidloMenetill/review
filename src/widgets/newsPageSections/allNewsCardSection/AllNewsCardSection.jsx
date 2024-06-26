import React, { useEffect } from 'react';
import { NewsCard } from '../../../shared';
import { useZustandStore } from '../../../app/store/store';

export const AllNewsCardSection = () => {
  const { getNewsPage, newsData } = useZustandStore();
  console.log(newsData);
  useEffect(() => {
    getNewsPage();
  }, []);
  return (
    <section className='w-[90%] xl:w-[1720px] mx-auto text-[#fff] font-montserrat'>
      <div className='w-full my-[90px] pt-[150px] sm:pt-[156px] tablet:pt-[190px]'>
        <h2 className='text-[60px] sm:text-[56px] font-[600] tablet:text-[80px] text-[#fff] tablet:font-[700]'>
          ВСЕ НОВОСТИ
        </h2>
      </div>
      <div className='w-full tablet:grid tablet:grid-cols-2 tablet:gap-[20px]'>
        {newsData &&
          newsData?.map((element, index) => (
            <div className='mb-[80px]' key={index}>
              <NewsCard
                key={element.id}
                img={element.image}
                title={element.title}
                description={element.description}
                warning={element.warning}
                date={element.created_et}
              />
            </div>
          ))}
      </div>
    </section>
  );
};
