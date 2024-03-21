import {
  DrumsMusicCourses,
  Equipment,
  GuitarMusicCourses,
  PriceList,
  RehearsalBase,
  ServiceOrder,
  Services,
  VocalMusicCourses,
} from '../../widgets';
import bgService from '../../shared/img/forth_main_bg.jpg';

export const ServicesPage = () => {
  return (
    <>
      <section className='w-full h-[1080px] mx-auto text-[#f5f5f5] font-montserrat'>
        <Services />
      </section>
      <PriceList />
      <Equipment />
      <RehearsalBase />

      <GuitarMusicCourses />

      <section
        className='relative bg-cover bg-no-repeat -mt-[0px] bg-center h-[1725px] font-montserrat'
        style={{ backgroundImage: `url(${bgService})` }}
      >
        <div className='w-[100%] h-[100%] absolute inset-0 bg-black opacity-80'></div>
        <div className='w-[100%] h-[100%] absolute mx-[auto]'>
          <DrumsMusicCourses />
          <VocalMusicCourses />
        </div>
      </section>

      <ServiceOrder />
    </>
  );
};
