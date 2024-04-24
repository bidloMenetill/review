import { useEffect } from 'react';
import { useZustandStore } from '../../../app/store/store';

export const IntrodactionSectionAboutUs = () => {
  const { aboutUsTeam, getAboutUsTeam } = useZustandStore();
  const bgImage = import.meta.env.VITE_IMG_URL;
  const bgImage2 = aboutUsTeam[0]?.background[0]?.background;
  useEffect(() => {
    getAboutUsTeam();
  }, []);
  return (
    <section
      style={{
        backgroundImage: `url(${bgImage}${bgImage2})`,
      }}
      className='font-normal bg-cover bg-no-repeat 7xl text-[#F5F5F5] leading-[100px] sm:min-h-[960px]'
    >
      {/* <section className='bg-[url("/src/shared/img/about/about1.png")] max-w-[1920px] font-normal text-7xl text-[#F5F5F5] leading-[100px] sm:min-h-[960px]'> */}
      <div className='pt-2 sm:pt-24 pl-[5%] flex flex-col w-11/12 sm:w-11/12'>
        {/* <div className='hidden sm:block'>
          <h2 className='hidden sm:block text-8xl mt-[5%]'>
            {aboutUsTeam[0]?.title}
          </h2>
          <p className='hidden sm:block text-[#F5F5F5] font-medium text-3xl sm:text-2xl leading-8 max-w-[1015px] mt-[5%]'>
            {aboutUsTeam[0]?.description}
          </p>
        </div> */}
        <div className='sm:w-full flex gap-2'>
          <div className='flex sm:hidden h-[760px] pt-36 sm:pt-0'>
            {/* <div>
              <h2 className='sm:max-w-[70%] sm:hidden pt-2 text-2xl font-regular lg:font-regular lg:text-7xl lg:text-[#F5F5F5] lg:pt-14 lg:leading-[100px] xl:pt-16 xl:text-[#E2DED3] xl:font-medium xl:text-8xl xl:leading-[122px]'>
                {aboutUsTeam[0]?.title}
              </h2>
              <p className='leading-5 sm:hidden text-[#E2DED3] font-medium text-sm xl:text-2xl xl:leading-10'>
                {aboutUsTeam[0]?.description}
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
