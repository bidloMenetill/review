import { useEffect } from 'react';
import { usePages } from '../../../app/store/store';

export const Advertising = props => {
  const { getAdverts, adverts1, adverts2 } = usePages();
  useEffect(() => {
    getAdverts();
  }, []);
  return (
    <section className='bg-cover bg-no-repeat  bg-center h-[130px] md:h-[258px] tablet:h-[300px]  bg-gradient-to-t from-[#160503] from-0% via-black to-[#160503] text-center '>
      <div className='min-w-[343px] max-w-[90%] mx-auto xl:container flex justify-center items-center font-montserrat text-[#e2ded3]'>
        <div className=' text-center flex justify-center flex-col md:mt-[37px] tablet:mt-0'>
          <h3 className='font-medium mt-[34px] md:w-[727px] tablet:w-full tablet:mt-[89px] text-[14px] sm:text-[18px] md:text-[27px] tablet:text-[30px] xl:text-[35px]'>
            {adverts1.text}
          </h3>

          <p className='font-bold md:font-medium mt-[10px] tablet:mt-[25px] lg:mt-[36px] text-center leading-[normal] text-[14px] sm:text-[18px] md:text-[27px] tablet:text-[30px] xl:text-[35px]'>
            {adverts2.text}
          </p>
        </div>
      </div>
    </section>
  );
};
