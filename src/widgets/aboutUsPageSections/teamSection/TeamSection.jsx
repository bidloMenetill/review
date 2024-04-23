import { useEffect } from 'react';
import { useZustandStore } from '../../../app/store/store';
import { CardTeamSection } from './cardTeamSection/CardTeamSection';

export const Team = () => {
  const { aboutUsArtist, getAboutUsArtist, aboutUsTeam, getAboutUsTeam } =
    useZustandStore();
  useEffect(() => {
    getAboutUsArtist();
    getAboutUsTeam();
  }, []);
  return (
    <section className='bg-[url("/src/shared/img/aboutMobile/bg_section_2.png")] max-w-[1920px] bg-cover bg-no-repeat flex min-h-[1159px]'>
      <div className='tablet:max-w-[99%] flex flex-col justify-center text-center tablet:text-left items-center gap-y-12 lg:max-w-[1500px] mx-auto'>
        <h2
          className='text-left pt-[3%] sm:text-6xl sm:font-bold sm:text-[#E2DED3] xl:text-left text-3xl xl:text-7xl text-[#F5F5F5]
                xl:pt-16 xl:font-medium xl:leading-[122px]'
        >
          {aboutUsTeam[1]?.title}
        </h2>
        <p className='max-w-full sm:max-w-full text-dm sm:text-2xl sm:text-center xl:text-left font-medium leading-6 sm:leading-10 text-slate-100 xl:max-w-11/12 px-[3%]'>
          {aboutUsTeam[1]?.description}
        </p>
        <ul className='flex flex-wrap gap-6 sm:flex-wrap sm:gap-y-36 items-center text-center xl:flex-row lg:max-w-[1700px] mx-auto tablet:max-w-[1700px] lg:pl-0 lg:pr-0 xl:pl-0 xl:pr-0 lg:flex-row lg:gap-x-28 lg:ml-[-100px] xl:mr-[-100px] lg:mr-0 lg:max-w-11/12 xl:gap-0 justify-center lg:justify-center'>
          {aboutUsArtist?.map(item => (
            <CardTeamSection key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};
