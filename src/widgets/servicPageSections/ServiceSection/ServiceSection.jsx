import React from 'react';
import { motion } from 'framer-motion';
import { ServiceSwiper } from '../../../shared';

export const ServiceSection = () => {
  return (
    <section className='relative w-full h-[230px] sm:h-[1080px] mx-auto text-[#f5f5f5] font-montserrat'>
      <div className='w-full h-full ease-out duration-300'>
        <ServiceSwiper />
        <div className='absolute w-full h-full top-[20%] sm:top-[40%] z-[1]'>
          <h2 className='sm:text-[#f5f5f5] text-[24px] mb-[10px] sm:mb-[20px] mx-[20px] sm:mx-[90px] xl:text-[50px] lg:text-[40px]'>
            Выберите свою программу
          </h2>
          <div className='shadow-[0px_0px_66px_45px_#000000] sm:shadow-none'></div>
          <hr className='border-0 mx-[20px] sm:border-[1px] sm:mx-[90px] sm:shadow-[0px_0px_600px_240px_#000000]' />
          <div className='mx-[20px] sm:mx-[90px]'>
            <motion.h2
              initial={{ opacity: 0, marginLeft: -90 }}
              whileInView={{
                opacity: 1,
                marginLeft: 0,
                transition: { delay: 0.5 },
              }}
              viewport={{ amount: 0.2 }}
              className='text-[24px] font-[600] mx-[20px] sm:mx-[90px] sm:text-[60px] xl:text-[100px] lg:text-[80px]'
            >
              Услуги
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
};
