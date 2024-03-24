import { useState } from 'react';
import { Questions } from '../../features';

export const FAQ = () => {
  const [flag, setFlag] = useState('');

  return (
    <section className='text-[#FFFFFF] mt-[100px]'>
      <div className='max-w-[600px] mx-[auto] mb-[120px] xl:max-w-[1300px] lg:max-w-[900px] lg:mb-[230px]'>
        <h1 className='text-center pb-[90px] text-[30px] xl:text-[50px] lg:text-[24px]'>
          Часто задаваемые вопросы
        </h1>
        <Questions
          title='Title1'
          text={'какие музыкальные жанры есть  в q-rush studio ?'}
          description={
            'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. '
          }
          flag={flag}
          setFlag={setFlag}
        />
        <Questions
          title='Title2'
          text={'какие музыкальные жанры есть  в q-rush studio ?'}
          description={
            'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. '
          }
          flag={flag}
          setFlag={setFlag}
        />
        <Questions
          title='Title3'
          text={'какие музыкальные жанры есть  в q-rush studio ?'}
          description={
            'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. '
          }
          flag={flag}
          setFlag={setFlag}
        />
        <Questions
          title='Title4'
          text={'какие музыкальные жанры есть  в q-rush studio ?'}
          description={
            'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. '
          }
          flag={flag}
          setFlag={setFlag}
        />
        <Questions
          title='Title5'
          text={'какие музыкальные жанры есть  в q-rush studio ?'}
          description={
            'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. '
          }
          flag={flag}
          setFlag={setFlag}
        />
        <Questions
          title='Title6'
          text={'какие музыкальные жанры есть  в q-rush studio ?'}
          description={
            'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. '
          }
          flag={flag}
          setFlag={setFlag}
        />
        <Questions
          title='Title7'
          text={'какие музыкальные жанры есть  в q-rush studio ?'}
          description={
            'Рок, поп, хип-хоп, электронная музыка, джаз, блюз, кантри, классическая музыка, и т.д. '
          }
          flag={flag}
          setFlag={setFlag}
        />
      </div>
    </section>
  );
};
