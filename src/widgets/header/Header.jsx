import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import logo from '../../shared/img/rush.png';

const locales = {
  ru: { title: 'RU' },
  en: { title: 'EN' },
  kg: { title: 'KG' },
};
export const Header = () => {
  const { i18n } = useTranslation();
  const headerLinks = [
    {
      route: '/aboutus',
      link: t('header.headerLink.linkTitle1'),
    },
    {
      route: '/services',
      link: t('header.headerLink.linkTitle2'),
    },
    {
      route: '/news',
      link: t('header.headerLink.linkTitle3'),
    },
    {
      route: '/trustus',
      link: t('header.headerLink.linkTitle4'),
    },
    {
      route: '/gallery',
      link: t('header.headerLink.linkTitle5'),
    },
    {
      route: '/faq',
      link: t('header.headerLink.linkTitle6'),
    },
  ];

  return (
    <header className='   h-[100px] bg-black/50 backdrop-opacity-10 backdrop-invert flex items-center justify-center  top-0 backdrop-blur-50 sticky bg-cover bg-no-repeat bg-center'>
      <nav className=' mx-auto flex justify-between items-center container  xl:container lg:container md:container '>
        <Link to={'/'} className='mr-[4vw]'>
          <img
            src={logo}
            className='xl:w-[203px] xl:h-[100px] lg:w-[181px] lg:h-[80px] flex align-center'
            alt='Q-RUSH logo'
          />
        </Link>

        <ul className='  flex flex-row justify-around items-center   text-gray-100  font-montserrat leading-normal text-[24px] gap-[56px]  xl:text-[20px] xl:gap-[46px]  lg:text-[12px] lg:gap-[33px] '>
          {headerLinks.map(routes => (
            <li>
              <Link to={routes.route}>{routes.link}</Link>
            </li>
          ))}
        </ul>

        <div className=' flex items-center justify-between  font-montserrat  leading-normal'>
          <ul className='  uppercase flex  gap-[5px] ml-[4%] text-gray-500  xl:text-[23px] lg-[18px]'>
            {Object.keys(locales).map(locale => (
              <li key={locale}>
                <button
                  className={`focus:text-gray-100 hover:text-orange-500 ${
                    i18n.resolvedLanguage === locale
                      ? 'text-white'
                      : 'text-gray-500'
                  }`}
                  style={{
                    fontWeight:
                      i18n.resolvedLanguage === locale ? 'bold' : 'normal',
                  }}
                  type='submit'
                  onClick={() => i18n.changeLanguage(locale)}
                >
                  {locales[locale].title}
                </button>
              </li>
            ))}
          </ul>

          <button
            type='button'
            className='ml-[36px] xl:w-[200px] xl:h-[60px] lg:w-[160px] lg:h-[48px] bg-white font-normal xl:text-[20px]  lg:text-[14px] rounded-full text-orange-600 text-center justify-center relative  transition-all  after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0    after:bg-orange-600 after:duration-500 hover:text-white  hover:after:h-full hover:after:rounded-full'
          >
            <span className='relative z-10'> {t('header.headerButton')}</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
