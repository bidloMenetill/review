import { t } from 'i18next';
import instagram from '../../shared/img/footer/instagram.svg';
import telegram from '../../shared/img/footer/telegram.svg';
import youTube from '../../shared/img/footer/youtube.svg';
import whatsapp from '../../shared/img/footer/whatsapp.svg';
import { GeeksPro } from './geeksProSection/GeeksProSection';

export const Footer = () => {
  const footerLinks = [
    {
      aboutUs: [
        {
          route: '/trustus',
          title: t('footer.aboutUs.link1'),
        },
        {
          route: '/gallery',
          title: t('footer.aboutUs.link2'),
        },
      ],
    },
    {
      news: [
        {
          route: '/faq',
          title: t('footer.news.link1'),
        },
        {
          route: '',
          title: t('footer.news.link2'),
        },
      ],
    },
    {
      services: [
        {
          route: '/',
          title: t('footer.services.link1'),
        },
        {
          route: '/',
          title: t('footer.services.link2'),
        },
        {
          route: '/',
          title: t('footer.services.link3'),
        },
        {
          route: '/',
          title: t('footer.services.link4'),
        },
      ],
    },
    {
      contacts: [
        {
          route: '/',
          title: t('footer.contacts.link1'),
        },
        {
          route: '/',
          title: t('footer.contacts.link2'),
        },
        {
          route: '/',
          title: t('footer.contacts.link3'),
        },
        {
          route: '/',
          title: t('footer.contacts.link4'),
        },
      ],
    },
  ];

  return (
    <footer className=' bg-cover bg-no-repeat bg-center'>
      <div className=' container mx-auto bg-black pt-[50px] pb-[50px] '>
        <div className=' text-white flex flex-col tablet:flex-row justify-around items-start    font-montserrat  xl:text-[20px] xl:[&>ul>li]:mb-[30px] text-[12px] lg:text-[16px] [&>ul>li]:mb-[10px] lg:[&>ul>li]:mb-[20px]  tablet:mb-[6px] tablet:text-[14px] tablet:[&>ul>li]:mb-[10px] tablet:items-start tablet:[&>ul]:mb-[100px] md:text-[10px] md:[&>ul>li]:mb-[8px] md:items-start  sm:text-[6  px] sm:[&>ul>li]:mb-[5px] sm:items-start '>
          <ul>
            <li className='  font-bold  text-orange-600 hover:text-white'>
              <a href='#'>О нас</a>
            </li>
            <li>
              <a href='#' className='hover:text-orange-600'>
                Нам доверяют
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-orange-600'>
                Галерея
              </a>
            </li>
          </ul>
          <ul>
            <li className='   font-bold  text-orange-600 hover:text-white'>
              <a href='#'>Новости</a>
            </li>

            <li>
              <a href='#' className='hover:text-orange-600'>
                Часто задаваемые вопросы
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-orange-600'>
                Информация о Партнерах
              </a>
            </li>
          </ul>
          <ul>
            <li className='font-bold  text-orange-600 hover:text-white'>
              <a href='#'>Услуги</a>
            </li>
            <li>
              <a href='#' className='hover:text-orange-600'>
                Репетиционная База
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-orange-600'>
                Студия Звукозаписи
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-orange-600'>
                Музыкальные Курсы
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-orange-600'>
                Магазин
              </a>
            </li>
          </ul>
          <ul>
            <li className='  font-bold text-orange-600 hover:text-white'>
              <a href='#'>Контакты</a>
            </li>
            <li>
              <a href='#' className='hover:text-orange-600'>
                Адрес: Чынгыза Айтматова 1а (школа Билимкана)
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-orange-600'>
                Посмотри подробную инструкцию как до нас добраться{' '}
                <span className='text-orange-500 xl:text-[30px] lg:text-[22px] tablet:text-[16px] md:text-[14px] sm:text-[12px]'>
                  →
                </span>
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-orange-600'>
                Телефон: +996 700 763736
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-orange-600'>
                Email: qrushstudio.music@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className='flex-row flex justify-center gap-[100px] mt-[10vh]'>
          <img src={telegram} alt='telegram' />
          <img src={instagram} alt='instagram' />
          <img src={youTube} alt='youTube' />
          <img src={whatsapp} alt='whatsapp' />
        </div>
      </div>
      <GeeksPro />
    </footer>
  );
};
