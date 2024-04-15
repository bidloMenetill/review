import { useState } from 'react';
import { AccordionItems } from '../../../features';
import bgFAQ from '../../../shared/img/BackgroundFAQ.png';

export const AccordionSection = () => {
  const [flag, setFlag] = useState('');
  const arr = [
    {
      id: 0,
      title: 'Title1',
      text: 'какие музыкальные жанры есть  в q-rush studio ?',
      description:
        'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. ',
    },
    {
      id: 1,
      title: 'Title2',
      text: 'какие музыкальные жанры есть  в q-rush studio ?',
      description:
        'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. ',
    },
    {
      id: 2,
      title: 'Title3',
      text: 'какие музыкальные жанры есть  в q-rush studio ?',
      description:
        'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. ',
    },
    {
      id: 3,
      title: 'Title4',
      text: 'какие музыкальные жанры есть  в q-rush studio ?',
      description:
        'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. ',
    },
    {
      id: 4,
      title: 'Title5',
      text: 'какие музыкальные жанры есть  в q-rush studio ?',
      description:
        'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. ',
    },
    {
      id: 5,
      title: 'Title6',
      text: 'какие музыкальные жанры есть  в q-rush studio ?',
      description:
        'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. ',
    },
    {
      id: 6,
      title: 'Title7',
      text: 'какие музыкальные жанры есть  в q-rush studio ?',
      description:
        'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. ',
    },
  ];

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
        {arr?.map(el => {
          return (
            <div key={el.id}>
              <AccordionItems
                title={el.title}
                text={el.text}
                description={el.description}
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
