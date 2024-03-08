import { DrumsMusicCourses, Equipment, GuitarMusicCourses, PriceList, RehearsalBase, ServiceOrder, Services, VocalMusicCourses } from '../../widgets';
import bgService from '../../shared/img/forth_main_bg.jpg';


export const ServicesPage = () => {
  return (
    <>
      <section className="bg-cover bg-no-repeat -mt-[0px] bg-center h-[3500px] font-montserrat" style={{ backgroundImage: `url(${bgService})` }}>
        <Services />
        <PriceList />
        <Equipment />
        <RehearsalBase />
      </section>

      <GuitarMusicCourses />

      <section className="relative bg-cover bg-no-repeat -mt-[0px] bg-center h-[1725px] font-montserrat" style={{ backgroundImage: `url(${bgService})` }}>
        <div className="w-[100%] h-[100%] absolute inset-0 bg-black opacity-80"></div>
        <div className="w-[100%] h-[100%] absolute mx-[auto]">
          <DrumsMusicCourses />
          <VocalMusicCourses />
        </div>
      </section>

      <ServiceOrder />

    </>

  );
};
