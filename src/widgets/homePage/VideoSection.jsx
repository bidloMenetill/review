import React from 'react';
import arrayButton from '../../shared/img/link.svg';


export const VideoSection = () => {
  return (
    <section className='pb-[150px]'>
      <section className="container">

        <h2 className="text-[#F5F5F5] mt-[100px] mb-[66px] font-[Montserrat] text-[100px] not-italic font-medium leading-[normal]">Видео</h2>
        <div className='flex justify-end mb-[30px]'><a href='#' className='!flex justify-normal items-center' target='_blank'><button className='font-[Montserrat] text-[30px] not-italic text-#F5F5F5 font-medium leading-[normal]'>смотреть все</button> <img src={arrayButton} className='ml-[10px]' alt="" /></a></div>
        <section className="flex  gap-5">
          <div className="w-[850px] h-[480px]">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/sgFsJuVcm18?si=RfOrOjLdPGVbfuRe&amp;start=2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className='flex gap-x-7 '>

            <div className='flex  flex-col'>
              <iframe className="w-[415px] h-[225px] mb-[10px] mt-[5px]  " src="https://www.youtube.com/embed/sXFiaJr9los?si=sr7IZhPiA0xw_2am&amp;start=20" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <iframe className="w-[415px] h-[225px]  mt-[10px]" src="https://www.youtube.com/embed/sXFiaJr9los?si=sr7IZhPiA0xw_2am&amp;start=20" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className='flex gap-x-4 flex-col'>
              <iframe className="w-[415px] h-[225px] mb-[10px] mt-[5px] " src="https://www.youtube.com/embed/sXFiaJr9los?si=sr7IZhPiA0xw_2am&amp;start=20" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <iframe className="w-[415px] h-[225px]  mt-[10px]" src="https://www.youtube.com/embed/sXFiaJr9los?si=sr7IZhPiA0xw_2am&amp;start=20" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};
