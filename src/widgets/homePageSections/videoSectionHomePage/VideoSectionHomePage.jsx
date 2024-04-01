import React from 'react';

import ViewAllLink from '../../../shared/ui/viewAllLink/ViewAllLink';

export const VideoSectionHomePage = () => {
  return (
    <section className='pb-[70px] xl:pb-[150px]'>
      <section className='mx-auto max-w-[90%] xl:container'>
        <h2 className='text-[#F5F5F5] mt-[100px] mb-[66px] font-[Montserrat] text-[80px] lg:text-[100px] not-italic font-medium leading-[normal]'>
          Видео
        </h2>
        <div className='flex justify-end mb-[30px]'>
          <ViewAllLink linkAddress={'gallery'} />
        </div>
        <section className='grid grid-rows-[165px_165px] xl:grid-rows-[225px_225px] grid-cols-4 gap-5'>
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
          <div className='col-start-4 col-end-5 row-start-1 row-end-2'>
            <iframe
              className='w-full h-full'
              src='https://www.youtube.com/embed/sXFiaJr9los?si=sr7IZhPiA0xw_2am&amp;start=20'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </div>
          <div className='col-start-3 col-end-4 row-start-2 row-end-3'>
            <iframe
              className='w-full h-full'
              src='https://www.youtube.com/embed/sXFiaJr9los?si=sr7IZhPiA0xw_2am&amp;start=20'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </div>
          <div className='col-start-4 col-end-5  row-start-2 row-end-3'>
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
