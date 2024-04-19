import { Link } from 'react-router-dom';
import instagram from '../../shared/img/footer/instagram.svg';
import telegram from '../../shared/img/footer/telegram.svg';
import youTube from '../../shared/img/footer/youtube.svg';
import whatsapp from '../../shared/img/footer/whatsapp.svg';
import { scrollToTop } from '../../shared';
import { GeeksPro } from './geeksProSection/GeeksProSection';

export const Footer = () => {
  return (
    <footer className=' bg-cover bg-no-repeat bg-center max-w-full'>
      <div className=' container w-[90%] mx-auto bg-black pt-[50px] pb-[50px] '>
        <div className=' text-white flex flex-col tablet:flex-row justify-around items-start   font-montserrat  xl:text-[20px] xl:[&>ul>li]:mb-[30px] text-[12px] lg:text-[16px] [&>ul>li]:mb-[10px] lg:[&>ul>li]:mb-[20px]  tablet:mb-[6px] tablet:text-[14px] tablet:[&>ul>li]:mb-[10px] tablet:items-start tablet:[&>ul]:mb-[100px] md:text-[18px] md:[&>ul>li]:mb-[8px] md:items-start  '>
          <ul>
            <li className='  font-bold  text-orange-600 hover:text-white'>
              <Link onClick={scrollToTop()} to={'/about-us'}>
                О нас
              </Link>
            </li>
            <li>
              <Link
                to={'/trust-us'}
                onClick={scrollToTop()}
                className='hover:text-orange-600'
              >
                Нам доверяют
              </Link>
            </li>
            <li>
              <Link
                to={'/gallery'}
                onClick={scrollToTop()}
                className='hover:text-orange-600'
              >
                Галерея
              </Link>
            </li>
          </ul>
          <ul>
            <li className='   font-bold  text-orange-600 hover:text-white'>
              <Link to={'/news'} onClick={scrollToTop()}>
                Новости
              </Link>
            </li>

            <li>
              <Link
                to={'/faq'}
                onClick={scrollToTop()}
                className='hover:text-orange-600'
              >
                Часто задаваемые вопросы
              </Link>
            </li>
            <li>
              <a href='#' className='hover:text-orange-600'>
                Информация о Партнерах
              </a>
            </li>
          </ul>
          <ul>
            <li className='font-bold  text-orange-600 hover:text-white'>
              <Link to={'/services'} onClick={scrollToTop()}>
                Услуги
              </Link>
            </li>
            <li>
              <Link
                to={'/rehearsal-cost'}
                onClick={scrollToTop()}
                className='hover:text-orange-600'
              >
                Репетиционная База
              </Link>
            </li>
            <li>
              <Link
                to={'/sound-recording'}
                onClick={scrollToTop()}
                className='hover:text-orange-600'
              >
                Студия Звукозаписи
              </Link>
            </li>
            <li>
              <Link
                to={'/music-cours'}
                onClick={scrollToTop()}
                className='hover:text-orange-600'
              >
                Музыкальные Курсы
              </Link>
            </li>
            <li>
              <Link
                to={'/shop'}
                onClick={scrollToTop()}
                className='hover:text-orange-600'
              >
                Магазин
              </Link>
            </li>
          </ul>
          <ul>
            <li className='  font-bold text-orange-600 hover:text-white'>
              <Link to={'faq'}>Контакты</Link>
            </li>
            <li>
              <a
                href='https://go.2gis.com/9do9b'
                className='hover:text-orange-600'
              >
                Адрес: Чынгыза Айтматова 1а (школа Билимкана)
              </a>
            </li>
            <li>
              <a
                href='https://go.2gis.com/9do9b'
                className='hover:text-orange-600'
              >
                Посмотри подробную инструкцию как до нас добраться{' '}
                <span className='text-orange-500 xl:text-[30px] lg:text-[22px] tablet:text-[16px] md:text-[14px] sm:text-[12px]'>
                  →
                </span>
              </a>
            </li>
            <li>
              <a href='wa.me/996700763736' className='hover:text-orange-600'>
                Телефон: +996 700 763736
              </a>
            </li>
            <li>
              <a
                href='https://www.google.com/intl/ru/gmail/about/'
                className='hover:text-orange-600'
              >
                Email: qrushstudio.music@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className='flex-row flex justify-center gap-[10vw] mt-[10vh] xl:[&>img]:w-[50px]  tablet:[&>img]:w-[40px] sm:[&>img]:w-[30px]  '>
          <a href='https://t.me/taihop'>
            {' '}
            <img src={telegram} alt='telegram' />
          </a>
          <a href='https://ig.me/m/qrushstudio'>
            <img src={instagram} alt='instagram' />
          </a>
          <a href='https://www.youtube.com/@qrushstudio5574'>
            {' '}
            <img src={youTube} alt='youTube' />
          </a>
          <a href='wa.me/996700763736'>
            {' '}
            <img src={whatsapp} alt='whatsapp' />
          </a>
        </div>
      </div>
      <GeeksPro />
    </footer>
  );
};
