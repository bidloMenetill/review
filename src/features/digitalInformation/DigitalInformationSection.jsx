import React, { useEffect, useRef, useState, useCallback } from 'react';
import CountUp from 'react-countup';

export const DigitalInformationSection = () => {
  const [hasAppeared, setHasAppeared] = useState(false);
  const ref = useRef(null);

  const handleScroll = useCallback(() => {
    if (ref.current) {
      const { top, bottom } = ref.current.getBoundingClientRect();
      const isVisible = top < window.innerHeight && bottom >= 0;
      if (isVisible && !hasAppeared) {
        setHasAppeared(true);
      }
    }
  }, [hasAppeared]);

  let timeoutId = null;

  const delayedHandleScroll = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(handleScroll, 15);
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener('scroll', delayedHandleScroll);
    return () => {
      window.removeEventListener('scroll', delayedHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [delayedHandleScroll, timeoutId]);

  return (
    <section className='pt-[70px] pb-[126px] xl:pt-[126px] flex justify-center items-center'>
      <section
        ref={ref}
        className='max-w-[90%] xl:container mx-auto flex justify-center flex-col items-center align-middle'
      >
        <h4 className='text-[#F5F5F5] font-[Montserrat] text-[50px] not-italic font-medium leading-[normal]'>
          За все время
        </h4>
        <div className='flex gap-x-[60px] xl:gap-x-[100px] lg:gap-x-[80px]  items-center justify-center  mt-[60px]'>
          <div className='inline-flex flex-col'>
            <CountUp
              duration={2.5}
              delay={0}
              separator=''
              redraw={true}
              start={hasAppeared ? null : 0}
              end={hasAppeared ? 1500 : 0}
            >
              {({ countUpRef }) => (
                <h5
                  ref={countUpRef}
                  className='font-[Montserrat] px-[40px]  text-[88px] lg:text-[100px] not-italic font-semibold leading-[50px]  text-[#F93822]'
                >
                  1500
                </h5>
              )}
            </CountUp>
            <p className='text-center text-[#F5F5F5]  font-[Montserrat] text-[23px]  lg:text-[30px]   mt-[30px] not-italic font-medium leading-[34px]'>
              Записей проведено
            </p>
          </div>
          <div className='inline-flex flex-col'>
            <CountUp
              duration={2.5}
              delay={0}
              separator=''
              redraw={true}
              start={hasAppeared ? null : 0}
              end={hasAppeared ? 3000 : 0}
            >
              {({ countUpRef }) => (
                <h5
                  ref={countUpRef}
                  className='font-[Montserrat] px-[40px]   text-[88px] lg:text-[100px] not-italic font-semibold leading-[50px]  text-[#F93822]'
                >
                  3000
                </h5>
              )}
            </CountUp>
            <p className='text-center text-[#F5F5F5]   font-[Montserrat] text-[23px]  lg:text-[30px]  mt-[30px] not-italic font-medium leading-[34px]'>
              Репетиций проведено
            </p>
          </div>
          <div className='inline-flex flex-col '>
            <CountUp
              duration={2.5}
              delay={0}
              separator=''
              redraw={true}
              start={hasAppeared ? null : 0}
              end={hasAppeared ? 1000 : 0}
            >
              {({ countUpRef }) => (
                <h5
                  ref={countUpRef}
                  className='font-[Montserrat] px-[40px]  text-[88px] lg:text-[100px] not-italic font-semibold leading-[50px]  text-[#F93822] '
                >
                  1000
                </h5>
              )}
            </CountUp>

            <p className='text-center text-[#F5F5F5]  font-[Montserrat] text-[23px]  lg:text-[30px]   mt-[30px] not-italic font-medium leading-[34px]'>
              Уроков проведено
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};
