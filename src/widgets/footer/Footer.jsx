import { Link } from 'react-router-dom';
import { t } from 'i18next';
import instagram from '../../shared/img/footer/instagram.svg';
import telegram from '../../shared/img/footer/telegram.svg';
import youTube from '../../shared/img/footer/youtube.svg';
import whatsapp from '../../shared/img/footer/whatsapp.svg';
import { scrollToTop } from '../../shared';
import { GeeksProSection } from './geeksProSection/GeeksProSection';

export const Footer = () => {
  const footerLinks = [
    {
      title: { title: 'О нас', route: '/about-us' },
      links: [
        { route: '/trustus', title: t('footer.aboutUs.link1') },
        { route: '/gallery', title: t('footer.aboutUs.link2') },
      ],
    },
    {
      title: { title: 'Новости', route: '/news' },
      links: [
        { route: '/faq', title: t('footer.news.link1') },
        { route: '', title: t('footer.news.link2') },
      ],
    },
    {
      title: { title: 'Услуги', route: '/services' },
      links: [
        { route: '/', title: t('footer.services.link1') },
        { route: '/', title: t('footer.services.link2') },
        { route: '/', title: t('footer.services.link3') },
        { route: '/', title: t('footer.services.link4') },
      ],
    },
  ];

  return (
    <footer className=' bg-cover bg-no-repeat bg-center max-w-full'>
      <div className=' container w-[90%] mx-auto bg-black pt-[50px] pb-[50px] '>
        <div className=' text-white flex flex-col tablet:flex-row justify-around items-start   font-montserrat  xl:text-[20px] xl:[&>ul>li]:mb-[30px] text-[12px] lg:text-[16px] [&>ul>li]:mb-[10px] lg:[&>ul>li]:mb-[20px]  tablet:mb-[6px] tablet:text-[14px] tablet:[&>ul>li]:mb-[10px] tablet:items-start tablet:[&>ul]:mb-[100px] md:text-[18px] md:[&>ul>li]:mb-[8px] md:items-start  '>
          {footerLinks.map((section, index) => (
            <ul key={index}>
              <li className='font-bold text-orange-600 hover:text-white'>
                <Link to={section.title.route} onClick={scrollToTop}>
                  {section.title.title}
                </Link>
              </li>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    to={link.route}
                    onClick={scrollToTop}
                    className='hover:text-orange-600'
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          ))}

          <ul>
            <li className='  font-bold text-orange-600 hover:text-white'>
              <Link to={'faq'}>Контакты</Link>
            </li>
            <li>
              <a
                target='_blank'
                href='https://go.2gis.com/9do9b'
                className='hover:text-orange-600'
                rel='noreferrer'
              >
                Адрес: Чынгыза Айтматова 1а (школа Билимкана)
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://go.2gis.com/9do9b'
                className='hover:text-orange-600'
                rel='noreferrer'
              >
                Посмотри подробную инструкцию как до нас добраться{' '}
                <span className='text-orange-500 xl:text-[30px] lg:text-[22px] tablet:text-[16px] md:text-[14px] sm:text-[12px]'>
                  →
                </span>
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='wa.me/996700763736'
                className='hover:text-orange-600'
              >
                Телефон: +996 700 763736
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://www.google.com/intl/ru/gmail/about/'
                className='hover:text-orange-600'
                rel='noreferrer'
              >
                Email: qrushstudio.music@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className='flex-row flex justify-center gap-[10vw] mt-[10vh] xl:[&>img]:w-[50px]  tablet:[&>img]:w-[40px] sm:[&>img]:w-[30px]  '>
          <a target='_blank' href='https://t.me/taihop' rel='noreferrer'>
            {' '}
            <img src={telegram} alt='telegram' />
          </a>
          <a
            target='_blank'
            href='https://ig.me/m/qrushstudio'
            rel='noreferrer'
          >
            <img src={instagram} alt='instagram' />
          </a>
          <a
            target='_blank'
            href='https://www.youtube.com/@qrushstudio5574'
            rel='noreferrer'
          >
            {' '}
            <img src={youTube} alt='youTube' />
          </a>
          <a target='_blank' href='wa.me/996700763736'>
            {' '}
            <img src={whatsapp} alt='whatsapp' />
          </a>
        </div>
      </div>
      <GeeksProSection />
    </footer>
  );
};
