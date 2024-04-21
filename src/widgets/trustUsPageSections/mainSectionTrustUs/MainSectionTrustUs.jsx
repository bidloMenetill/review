import { useEffect } from 'react';
import { useZustandStore } from '../../../app/store/store';

export const MainSectionTrustUs = () => {
  const { getTrustUsMainSection, trustUs } = useZustandStore();

  useEffect(() => {
    getTrustUsMainSection();
  }, []);
  return (
    <section className='bg-cover bg-no-repeat bg-center h-[145px] sm:h-[] md:h-[185px] tablet:h-[235px] lg:h-[300px] xl:h-[355px]'>
      <div className='max-w-[90%]  mx-auto xl:container text-[#e2ded3] font-montserrat'>
        <div className=' w-[232px] md:w-[332px] tablet:w-[432px] mt-[25px] md:mt-[35px] tablet:mt-[55px] lg:mt-[75px]'>
          <h2 className='font-bold tablet:font-medium text-[48px] md:fond-semibold tablet:text-[60px] xl:text-[100px] lg:text-[80px]'>
            {trustUs.title}
          </h2>
        </div>
      </div>
    </section>
  );
};
