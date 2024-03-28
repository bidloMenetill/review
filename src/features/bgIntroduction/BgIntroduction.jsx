import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import line from '../../shared/img/line_in_main.svg';
import whiteLine from '../../shared/img/white_line.svg';
import arrayLeft from '../../shared/img/array_left.svg';
import arrayRight from '../../shared/img/array_right.svg';

import bgFirst from '../../shared/img/first_main_bg.jpg';
import bgSecond from '../../shared/img/second_main_bg.jpg';
import bgThird from '../../shared/img/third_main_bg.jpg';
import bgFourth from '../../shared/img/forth_main_bg.jpg';
import bgFifth from '../../shared/img/fifth_main_bg.jpg';

export const BgIntroduction = () => {
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

  return (
    <section
      className={
        ' bg-cover   h-[100vh] w-full flex justify-center flex-col bg-center bg-no-repeat [transition:background-image_1s_ease-in-out] '
      }
      style={{
        backgroundImage: `url(${bgForIntroduction[indexIntroduction]})`,
      }}
    >
      <section className='relative'>
        <section className='w-[100%] max-w-[1720px] mx-auto relative'>
          <div className='flex justify-center items-end'>
            <h2 className='text-[#F5F5F5] font-[Montserrat]  mb-[150px] lg:mb-[10px] text-center text-[41px] xl:text-[60px] lg:text-[42px] not-italic font-bold leading-[normal]  '>
              {t('homePage.firstSection.title')}
            </h2>
          </div>
          <button
            className='arrow-left absolute flex justify-center items-center left-[60px] xl:left-[10px] lg:left-[60px] top-[200px] xl:top-[190px] lg:top-[140px]  rounded-[40px] w-[55px] h-[55px] backdrop-filter backdrop-blur-2xl bg-[rgba(255,_255,_255,_0.5)] cursor-pointer transform hover:scale-110 '
            onClick={() => handleArrowClick('left')}
            disabled={isChangingBg}
          >
            <img src={arrayLeft} alt='' className='p-[8px]' />
          </button>
          <button
            className='arrow-right absolute flex justify-center items-center right-[60px] xl:right-[10px] lg:right-[60px] top-[200px] xl:top-[190px] lg:top-[140px] rounded-[40px] w-[55px]  h-[55px] backdrop-filter backdrop-blur-2xl bg-[rgba(255,255,255,0.5)] cursor-pointer transform hover:scale-110 '
            onClick={() => handleArrowClick('right')}
            disabled={isChangingBg}
          >
            <img src={arrayRight} alt='' className='p-[1px]' />
          </button>
          <div
            className={
              'absolute -bottom-[200px] xl:-bottom-[440px] lg:-bottom-[330px] left-0  mb-[71px] pl-[96px] gap-x-[12px] flex mx-0 container'
            }
          >
            {bgForIntroduction.map((bg, index) => (
              <img
                key={bg}
                src={indexIntroduction === index ? whiteLine : line}
                alt='line'
              />
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};