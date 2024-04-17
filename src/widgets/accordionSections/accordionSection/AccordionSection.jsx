import { useState, useEffect } from 'react';
import { AccordionItems } from '../../../features';
import bgFAQ from '../../../shared/img/BackgroundFAQ.png';
import { useZustandStore } from '../../../app/store/store';

export const AccordionSection = () => {
  const [flag, setFlag] = useState('');
  const { getFaqPage, faqData, getMusicCourcePage, musicCourceData } =
    useZustandStore();
  useEffect(() => {
    getFaqPage();
    getMusicCourcePage();
  }, []);

  return (
    <section className='relative text-[#FFFFFF]'>
      <img
        className='object-cover w-full h-[764px] sm:h-[960px]'
        src={bgFAQ}
        alt='bgFAQ'
      />

      <div className='absolute font-[600] sm:font-normal w-full top-[260px] mx-[16px] text-left tablet:text-center'>
        <h2 className='text-[48px] sm:text-[100px] w-[360px] lg:w-full'>
          Часто задаваемые вопросы
        </h2>
      </div>
      <div className='max-w-[600px] pt-[32px] mx-[16px] mb-[50px] sm:mx-auto sm:mb-[120px] xl:max-w-[1300px] lg:max-w-[900px] lg:mb-[80px]'>
        <h2 className='font-[600] pb-[23px] text-[30px] sm:w-full text-center sm:pb-[90px] sm:text-[24px] xl:text-[50px] lg:text-[40px] '>
          Вопросы и ответы
        </h2>
        {faqData?.map(el => {
          return (
            <div key={el.id}>
              <AccordionItems
                title={el.id}
                text={el.question_ru}
                description={el.answer_ru}
                flag={flag}
                setFlag={setFlag}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
