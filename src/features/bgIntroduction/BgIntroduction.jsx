import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import bgFirst from '../../shared/img/first_main_bg.jpg';
import bgSecond from '../../shared/img/second_main_bg.jpg';
import bgThird from '../../shared/img/third_main_bg.jpg';
import bgFourth from '../../shared/img/forth_main_bg.jpg';
import bgFifth from '../../shared/img/fifth_main_bg.jpg';
import { useMediaQuery } from '../../shared';
import { useZustandStore } from '../../app/store/store';

export const BgIntroduction = () => {
  const { getHomePage } = useZustandStore();
  const { t } = useTranslation();
  const bgForIntroduction = useMemo(
    () => [bgFirst, bgSecond, bgThird, bgFourth, bgFifth],
    []
  );
  const [indexIntroduction, setIndexIntroduction] = useState(0);
  const [isChangingBg, setIsChangingBg] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [intervalActive, setIntervalActive] = useState(true);

  useEffect(() => {
    getHomePage();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isChangingBg && intervalActive) {
        setIndexIntroduction(
          prevIndex => (prevIndex + 1) % bgForIntroduction.length
        );
      }
    }, 4000);

    return () => {
      clearInterval(interval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [bgForIntroduction.length, timeoutId, isChangingBg, intervalActive]);

  const handleArrowClick = direction => {
    if (isChangingBg) return;

    setIsChangingBg(true);
    clearTimeout(timeoutId);
    setIntervalActive(false);

    if (direction === 'left') {
      setIndexIntroduction(prevIndex =>
        prevIndex === 0 ? bgForIntroduction.length - 1 : prevIndex - 1
      );
    } else if (direction === 'right') {
      setIndexIntroduction(prevIndex =>
        prevIndex === bgForIntroduction.length - 1 ? 0 : prevIndex + 1
      );
    }

    setTimeout(() => {
      setIsChangingBg(false);
      setIntervalActive(true);
    }, 400);

    const newTimeoutId = setTimeout(() => {
      setIsChangingBg(false);
      setIntervalActive(true);
    }, 1000);

    setTimeoutId(newTimeoutId);
  };
  const phonesWidth = useMediaQuery('(max-width: 576px)');
  return (
    <section
      className={
        ' bg-cover h-[290px] sm:h-[100vh] w-full flex justify-center flex-col bg-center bg-no-repeat [transition:background-image_1s_ease-in-out] '
      }
      style={{
        backgroundImage: `url(${bgForIntroduction[indexIntroduction]})`,
      }}
    >
      <section className='w-[100%] max-w-[1720px]  mx-auto  relative'>
        <div className='flex justify-center items-end'>
          <h2 className='text-[#F5F5F5] font-[Montserrat] mt-[53px] sm:mt-none max-w-[322px] sm:max-w-none  mb-[150px] lg:mb-none text-center text-[24px] xl:text-[60px] lg:text-[42px] tablet:text-[32px]  not-italic font-bold sm:font-bold leading-[normal]  '>
            {phonesWidth
              ? 'Добро пожаловать в мир музыки'
              : t('homePage.firstSection.title')}
          </h2>
        </div>
        <button
          className='arrow-right absolute flex justify-center items-center left-[25px] tablet:left-[40px] xl:left-[10px] lg:left-[60px] top-[110px] tablet:top-[150px]  xl:top-[190px] lg:top-[140px] rounded-[40px] w-[33px] sm:w-[55px] h-[33px] sm:h-[55px] backdrop-filter backdrop-blur-2xl bg-[rgba(255,255,255,0.5)] cursor-pointer transform lg:hover:scale-110 '
          onClick={() => handleArrowClick('left')}
          disabled={isChangingBg}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-[27px] sm:w-[40px] h-[27px] sm:h-[37px]'
            width='36'
            height='36'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M15.75 4.5L8.25 12L15.75 19.5'
              stroke='black'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <button
          className='arrow-right absolute flex justify-center items-center right-[25px] tablet:right-[40px] xl:right-[10px] lg:right-[60px] top-[110px] tablet:top-[150px]  xl:top-[190px] lg:top-[140px] rounded-[40px] w-[33px] sm:w-[55px] h-[33px] sm:h-[55px] backdrop-filter backdrop-blur-2xl bg-[rgba(255,255,255,0.5)] cursor-pointer transform lg:hover:scale-110 '
          onClick={() => handleArrowClick('right')}
          disabled={isChangingBg}
        >
          <svg
            className='w-[20px] sm:w-[35px] h-[20px] sm:h-[30px]'
            width='35'
            height='30'
            viewBox='0 0 10 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.25 1.5L8.75 9L1.25 16.5'
              stroke='black'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <div
          className={
            'absolute -bottom-[7vh]  lg:-bottom-[34vh] left-0   mb-[71px] pl-[20px] sm:pl-[96px] gap-x-[12px] flex mx-0 container'
          }
        >
          {bgForIntroduction.map((bg, index) => (
            <div
              className={`w-[30px] sm:w-[104px] h-1 rounded-sm  ${indexIntroduction === index ? 'bg-[#F93822] w-[50px] sm:w-[104px] sm:bg-[#FFF]' : 'bg-[#FFF]  sm:bg-[#4B4B4B]'} `}
              key={index}
            />
          ))}
        </div>
      </section>
    </section>
  );
};
