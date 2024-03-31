import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import rush from '../../shared/img/logofooter.png';
import instagram from '../../shared/img/footer/instagram.svg';
import telegram from '../../shared/img/footer/telegram.svg';
import youTube from '../../shared/img/footer/youtube.svg';
import whatsapp from '../../shared/img/footer/whatsapp.svg';
import { useMediaQuery } from '../../shared';
import GeeksPro from './GeeksPro';
export const Footer = () => {
  const { i18n } = useTranslation();
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
      <div className=' xl:container bg-black pt-[50px] pb-[50px] '>
        <div className='text-white flex justify-around  font-montserrat  xl:text-[20px] xl:[&>ul>li]:mb-[30px] lg:text-[16px] lg:[&>ul>li]:mb-[20px] md:[&>ul>li]:mb-[10px] md:text-[12px]  [&>*]:max-w-[397px]'>
          <ul>
            <li className='  font-bold  text-orange-600'>
              <a href=''>О нас</a>
            </li>
            <li>
              <a href=''>Нам доверяют</a>
            </li>
            <li>
              <a href=''>Галерея</a>
            </li>
          </ul>
          <ul>
            <li className='   font-bold  text-orange-600'>
              <a href=''>Новости</a>
            </li>

            <li>
              <a href=''>Часто задаваемые вопросы</a>
            </li>
            <li>
              <a href=''>Информация о Партнерах</a>
            </li>
          </ul>
          <ul>
            <li className='font-bold  text-orange-600'>
              <a href=''>Услуги</a>
            </li>
            <li>
              <a href=''>Репетиционная База</a>
            </li>
            <li>
              <a href=''>Студия Звукозаписи</a>
            </li>
            <li>
              <a href=''>Музыкальные Курсы</a>
            </li>
            <li>
              <a href=''>Магазин</a>
            </li>
          </ul>
          <ul>
            <li className='  font-bold text-orange-600'>
              <a href=''>Контакты</a>
            </li>
            <li>
              <a href=''>Адрес: Чынгыза Айтматова 1а (школа Билимкана)</a>
            </li>
            <li>
              <a href=''>
                Посмотри подробную инструкцию как до нас добраться{' '}
                <span className='text-orange-500 text-[30px]'>→</span>
              </a>
            </li>
            <li>
              <a href=''>Телефон: +996 700 763736</a>
            </li>
            <li>
              <a href=''>Email: qrushstudio.music@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className='flex-row flex justify-center gap-[100px] mt-[10vh]'>
          <img src={telegram} alt='' />
          <img src={instagram} alt='' />
          <img src={youTube} alt='' />
          <img src={whatsapp} alt='' />
        </div>
      </div>
      <GeeksPro />
    </footer>
  );
};
