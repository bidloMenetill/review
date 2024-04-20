import { useEffect } from 'react';
import { useZustandStore } from '../../../app/store/store';

export const IntrodactionSectionAboutUs = () => {
  const { aboutUsTeam, getAboutUsTeam } = useZustandStore();
  useEffect(() => {
    getAboutUsTeam();
  }, []);
  return (
    <section className='bg-[url("/src/shared/img/about/about1.png")] max-w-[1920px] font-normal text-7xl text-[#F5F5F5] leading-[100px] sm:min-h-[960px]'>
      <div className='pt-2 sm:pt-24 pl-[5%] flex flex-col w-11/12 sm:w-11/12'>
        <div className='hidden sm:block'>
          <h2 className='text-8xl mt-[5%]'>{aboutUsTeam[0]?.title}</h2>
          <p className='text-[#F5F5F5] font-medium text-3xl sm:text-2xl leading-8 max-w-[1015px] mt-[5%]'>
            {aboutUsTeam[0]?.description}
          </p>
        </div>
        <div className='sm:w-full flex gap-2'>
          <div className='flex sm:hidden h-[760px] pt-36 sm:pt-0'>
            <div>
              <h2 className='sm:max-w-[70%] pt-2 text-2xl font-regular lg:font-regular lg:text-7xl lg:text-[#F5F5F5] lg:pt-14 lg:leading-[100px] xl:pt-16 xl:text-[#E2DED3] xl:font-medium xl:text-8xl xl:leading-[122px]'>
                {aboutUsTeam[0]?.title}
              </h2>
              <p className='leading-5 text-[#E2DED3] font-medium text-sm xl:text-2xl xl:leading-10'>
                {aboutUsTeam[0]?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
