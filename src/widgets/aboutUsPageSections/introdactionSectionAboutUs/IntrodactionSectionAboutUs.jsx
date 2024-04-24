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
      <div className='pt-2 sm:pt-24 sm:w-full gap-2 pl-[5%] flex flex-col w-11/12 sm:w-11/12'>
        <div className='h-[760px] pt-36 sm:pt-0'>
          <h2 className='sm:max-w-[70%] pt-2 text-2xl font-regular lg:font-regular lg:text-7xl lg:text-[#F5F5F5] lg:pt-14 lg:leading-[100px] xl:pt-16 xl:text-[#E2DED3] xl:font-medium xl:text-8xl xl:leading-[122px] text-8xl mt-[5%]'>
            {aboutUsTeam[0]?.title}
          </h2>
          <p className='leading-5 text-[#E2DED3] font-medium text-sm xl:text-2xl xl:leading-10 text-[#F5F5F5] font-medium text-3xl sm:text-2xl leading-8 max-w-[1015px] mt-[5%]'>
            {aboutUsTeam[0]?.description}
          </p>
        </div>
      </div>
    </section>
  );
};
