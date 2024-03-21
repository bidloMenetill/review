import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export const DigitalInformationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section className='pt-[126px] pb-[126px] lg:pt-[126px] flex justify-center items-center'>
      <section
        ref={ref}
        className='container mx-auto flex justify-center flex-col items-center align-middle'
      >
        <h4 className='text-[#F5F5F5] font-[Montserrat] text-[50px] not-italic font-medium leading-[normal]'>
          За все время
        </h4>
        <div className='flex  justify-center  mt-[60px]'>
          <div className='flex flex-col'>
            <CountUp
              duration={2.5}
              delay={0}
              separator=''
              redraw={true}
              start={isVisible ? null : 0}
              end={isVisible ? 1500 : 0}
            >
              {({ countUpRef }) => (
                <h5
                  ref={countUpRef}
                  className='font-[Montserrat] text-[88px] lg:text-[100px] not-italic font-semibold leading-[50px]  text-[#F93822]'
                />
              )}
            </CountUp>
            <p className='text-center text-[#F5F5F5] font-[Montserrat] text-[26px] pt-[40px] lg:text-[30px]  pt-[30px] not-italic font-medium leading-[34px]'>
              Записей проведено
            </p>
          </div>
          <div className='flex flex-col ml-[80px]'>
            <CountUp
              duration={2.5}
              delay={0}
              separator=''
              redraw={true}
              start={isVisible ? null : 0}
              end={isVisible ? 3000 : 0}
            >
              {({ countUpRef }) => (
                <h5
                  ref={countUpRef}
                  className='font-[Montserrat] text-[88px] lg:text-[100px] not-italic font-semibold leading-[50px]  text-[#F93822]'
                />
              )}
            </CountUp>
            <p className='text-center text-[#F5F5F5]  font-[Montserrat] text-[26px] pt-[40px] lg:text-[30px]  pt-[30px] not-italic font-medium leading-[34px]'>
              Репетиций проведено
            </p>
          </div>
          <div className='flex flex-col ml-[80px]'>
            <CountUp
              duration={2.5}
              delay={0}
              separator=''
              redraw={true}
              start={isVisible ? null : 0}
              end={isVisible ? 1000 : 0}
            >
              {({ countUpRef }) => (
                <h5
                  ref={countUpRef}
                  className='font-[Montserrat] text-[88px] lg:text-[100px] not-italic font-semibold leading-[50px]  text-[#F93822] '
                />
              )}
            </CountUp>

            <p className='text-center text-[#F5F5F5]  font-[Montserrat] text-[26px] pt-[40px] lg:text-[30px]  pt-[30px] not-italic font-medium leading-[34px]'>
              Уроков проведено
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};
