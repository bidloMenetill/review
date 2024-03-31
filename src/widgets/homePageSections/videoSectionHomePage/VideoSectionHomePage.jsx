import React from 'react';
import arrayButton from '../../../shared/img/link.svg';

export const VideoSectionHomePage = () => {
  return (
    <section className='pb-[70px] xl:pb-[150px]'>
      <section className='mx-auto max-w-[90%] xl:container'>
        <h2 className='text-[#F5F5F5] mt-[100px] mb-[66px] font-[Montserrat] text-[80px] lg:text-[100px] not-italic font-medium leading-[normal]'>
          Видео
        </h2>
        <div className='flex justify-end mb-[30px]'>
          <a
            href='#'
            className='!flex justify-normal items-center'
            target='_blank'
          >
            <button className='font-[Montserrat] text-[30px] not-italic text-#F5F5F5 font-medium leading-[normal] transition-colors duration-300 hover:text-[#F93822]'>
              смотреть все
            </button>{' '}
            <img src={arrayButton} className='ml-[10px]' alt='' />
          </a>
        </div>
        <section className='grid grid-rows-[170px_140px] xl:grid-rows-[200px_230px] grid-cols-4 gap-5'>
          <div className='col-start-1 col-end-3 row-start-1 row-end-3'>
            <iframe
              className='w-full h-full'
              src='https://www.youtube.com/embed/sgFsJuVcm18?si=RfOrOjLdPGVbfuRe&amp;start=2'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>

          <div className='col-start-3 col-end-4 row-start-1 row-end-2'>
            <iframe
              className='w-full h-full '
              src='https://www.youtube.com/embed/sXFiaJr9los?si=sr7IZhPiA0xw_2am&amp;start=20'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </div>
          <div>
            <iframe
              className='w-full h-full xl:w-[415px] h-[225px]  mt-[10px]'
              src='https://www.youtube.com/embed/sXFiaJr9los?si=sr7IZhPiA0xw_2am&amp;start=20'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </div>
          <div className=''>
            <iframe
              className='w-full h-full'
              src='https://www.youtube.com/embed/sXFiaJr9los?si=sr7IZhPiA0xw_2am&amp;start=20'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </div>
          <div>
            <iframe
              className='w-full h-full'
              src='https://www.youtube.com/embed/sXFiaJr9los?si=sr7IZhPiA0xw_2am&amp;start=20'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </div>
        </section>
      </section>
    </section>
  );
};
