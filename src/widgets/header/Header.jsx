import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import logo from '../../shared/img/rush1.svg';
import { Button } from '../../shared';

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
      route: '/trustus',
      link: t('header.headerLink.linkTitle3'),
    },
    {
      route: '/news',
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
      <nav className=' mx-auto flex justify-between items-center container '>
        <Link to={'/'} className='mr-[4vw]'>
          <img
            src={logo}
            className='xl:w-[203px] xl:h-[100px] w-[160px]  lg:w-[181px] h-[60px] lg:h-[80px] flex align-center'
            alt='Q-RUSH logo'
          />
        </Link>

        <ul className='  flex flex-row justify-around items-center   text-gray-100  font-montserrat leading-normal  xl:text-[24px] xl:gap-[46px] text-[12px] lg:text-[16px] gap-[22px] lg:gap-[33px] '>
          {headerLinks.map((routes, index) => (
            <li key={index}>
              <Link to={routes.route}>{routes.link}</Link>
            </li>
          ))}
        </ul>

        <div className=' flex items-center justify-between  font-montserrat  leading-normal'>
          <ul className='  uppercase flex  gap-[5px] ml-[4%] text-gray-500  xl:text-[23px] text-[12px] lg:text-[18px]'>
            {Object.keys(locales).map(locale => (
              <li key={locale}>
                <button
                  className={`focus:text-gray-100 hover:text-orange-500 ${
                    i18n.resolvedLanguage === locale
                      ? 'text-white'
                      : 'text-gray-500'
                  }`}
                  // FIX ME: remove
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
          <Button
            className={
              'headerButton  xl:w-[200px] xl:h-[60px] xl:text-[20px] xl:px-[24px]  xl:ml-[20px] w-[120px] lg:w-[160px] h-[40px] lg:h-[50px] text-[14px] lg:text-[16px] ml-[12px] lg:ml-[15px]  px-[16px] lg:px-[20px]'
            }
            txt={t('header.headerButton')}
          />
        </div>
      </nav>
    </header>
  );
};
