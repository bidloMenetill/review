import rush from '../../shared/img/logofooter.png';
import instagram from '../../shared/img/footer/instagram.svg';
import telegram from '../../shared/img/footer/telegram.svg';
import youTube from '../../shared/img/footer/youtube.svg';
import whatsapp from '../../shared/img/footer/whatsapp.svg';
import { useMediaQuery } from '../../shared';

export const Footer = () => {
  const isLaptopScreen = useMediaQuery(
    '(min-width: 1024px) and (max-width:1440px)'
  );
  const isTabletScreen = useMediaQuery(
    '(min-width:768px) and (max-width: 1024px)'
  );
  const isMobileScreen = useMediaQuery(
    '(min-width:430px) and (max-width:768px)'
  );

  return (
    <footer
      className={`${isLaptopScreen ? 'max-w-[1440px] ' : isTabletScreen ? 'max-w-[1024px] ' : isMobileScreen ? 'max-w-[768px] ' : ''}  max-w-full h-[982px] `}
    >
      <div className='h-[704px]  bg-black pt-[50px] pb-[50px] '>
        <div className='text-white flex justify-around  font-montserrat text-[20px] ml-[50px]'>
          <ul>
            <li className=' w-[397px] font-bold text-[25px] pb-[32px] text-orange-600'>
              <a href=''>О нас</a>
            </li>
            <li className='pb-[32px]'>
              <a href=''>Нам доверяют</a>
            </li>
            <li>
              <a href=''>Галерея</a>
            </li>
          </ul>
          <ul>
            <li className='  w-[397px] font-bold text-[25px]  pb-[32px] text-orange-600'>
              <a href=''>Новости</a>
            </li>

            <li className='pb-[32px]'>
              <a href=''>Часто задаваемые вопросы</a>
            </li>
            <li>
              <a href=''>Информация о Партнерах</a>
            </li>
          </ul>
          <ul>
            <li className=' w-[397px] font-bold text-[25px]  pb-[32px] text-orange-600'>
              <a href=''>Услуги</a>
            </li>
            <li className='pb-[32px]'>
              <a href=''>Репетиционная База</a>
            </li>
            <li className='pb-[32px]'>
              <a href=''>Студия Звукозаписи</a>
            </li>
            <li className='pb-[32px]'>
              <a href=''>Музыкальные Курсы</a>
            </li>
            <li>
              <a href=''>Магазин</a>
            </li>
          </ul>
          <ul>
            <li className=' w-[397px] font-bold text-[25px]  pb-[32px] text-orange-600'>
              <a href=''>Контакты</a>
            </li>
            <li className='pb-[32px]'>
              <a href=''>Адрес: Чынгыза Айтматова 1а (школа Билимкана)</a>
            </li>
            <li className='pb-[32px]'>
              <a href=''>
                Посмотри подробную инструкцию как до нас добраться{' '}
                <span className='text-orange-500 text-[30px]'>→</span>
              </a>
            </li>
            <li className='pb-[32px]'>
              <a href=''>Телефон: +996 700 763736</a>
            </li>
            <li>
              <a href=''>Email: qrushstudio.music@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className='flex-row flex justify-center gap-[100px] mt-[30px]'>
          <img src={telegram} alt='' />
          <img src={instagram} alt='' />
          <img src={youTube} alt='' />
          <img src={whatsapp} alt='' />
        </div>
      </div>
      <div className='h-[278px] text-white bg-black/90 flex flex-col justify-center items-center font-montserrat text-[20px]'>
        <span className='mb-[10px]'>
          2024 Q Rush Studio Политика Конфидициальности
        </span>
        <span>Made By GEEKS PRO</span>
      </div>
    </footer>
  );
};
