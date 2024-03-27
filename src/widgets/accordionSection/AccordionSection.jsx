import { useState } from 'react';
import { AccordionItems } from '../../features';

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
    <section className='text-[#FFFFFF] mt-[100px]'>
      <div className='max-w-[600px] mx-[auto] mb-[120px] xl:max-w-[1300px] lg:max-w-[900px] lg:mb-[230px]'>
        <h1 className='text-center pb-[90px] text-[30px] xl:text-[50px] lg:text-[24px]'>
          Часто задаваемые вопросы
        </h1>
        {arr &&
          arr.map(el => {
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
