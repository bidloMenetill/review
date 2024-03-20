import { useState } from 'react';
import { Questions } from '../../features';
import { useMediaQuery } from '../../shared';

export const FAQ = () => {
  const isWideScreen = useMediaQuery(
    '(min-width: 1024px) and (max-width: 1480px)'
  );
  const isMobileScreen = useMediaQuery(
    '(min-width: 768px) and (max-width: 1024px)'
  );
  const isIphoneScreen = useMediaQuery(
    '(min-width: 430px) and (max-width: 768px)'
  );
  const [flag, setFlag] = useState('');

  return (
    <section className='text-[#FFFFFF] mt-[100px]'>
      <div
        className={`${isWideScreen ? 'max-w-[1024px] mb-[230px]' : isMobileScreen ? 'max-w-[768px] mb-[230px]' : isIphoneScreen ? 'max-w-[430px] mb-[100px]' : 'w-[1724px]  mb-[230px]'} h-[650px] mx-[auto]`}
      >
        <h1
          className={`${isWideScreen ? 'text-[30px]' : isMobileScreen ? 'text-[24px]' : isIphoneScreen ? 'text-[18px]' : 'text-[50px]'} text-center pb-[90px]`}
        >
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
      </div>
    </section>
  );
};
