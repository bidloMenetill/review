import { useState } from 'react';
import { AccordionItems } from '../../../features';

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
    <section className='text-[#FFFFFF] mx-[20px] mt-[12px] sm:mt-[100px]'>
      <div className='max-w-[600px] mx-[auto] mb-[50px] sm:mb-[120px] xl:max-w-[1300px] lg:max-w-[900px] lg:mb-[230px]'>
        <h2 className='text-left w-[195px] pb-[23px] text-[20px] sm:w-full sm:text-center sm:pb-[90px] sm:text-[24px] xl:text-[50px] lg:text-[40px] '>
          Часто задаваемые вопросы
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
