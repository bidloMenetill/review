import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import logo from '../../shared/img/rush.png';

import HeaderButton from '../../shared/ui/button/HeaderButton';
import { useMediaQuery } from '../../shared';

const locales = {
  ru: { title: 'RU' },
  en: { title: 'EN' },
  kg: { title: 'KG' },
};
export const Header = () => {
  const { i18n } = useTranslation();

  const isLaptopScreen = useMediaQuery(
    '(min-width:1024px) and (max-width: 1440px)'
  );
  const isTabletScreen = useMediaQuery(
    '(min-width:768px) and (max-width: 1024px)'
  );
  const isMobileScreen = useMediaQuery(
    '(min-width:430px) and (max-width:768px)'
  );

  return (
    <header
      className={` ${isLaptopScreen ? 'max-w-[1440px] ' : isTabletScreen ? 'max-w-[1024px] ' : isMobileScreen ? 'max-w-[768px] ' : ''} max-w-full h-[100px] bg-black/50 backdrop-opacity-10 backdrop-invert flex items-center justify-center  top-0 backdrop-blur-50 sticky`}
    >
      <nav className=' w-[1720px]  flex justify-between items-center'>
        <Link to={'/'}>
          <img src={logo} alt='Q-RUSH logo' />
        </Link>

        <ul
          className={`${isLaptopScreen ? 'gap-[44px] font-[38px] text-[14px]' : isTabletScreen ? 'max-w-[1024px] ' : isMobileScreen ? 'max-w-[768px] ' : ''} flex justify-end items-center  text-gray-100 gap-[56px] font-montserrat font-[50px] text-[20px] leading-normal `}
        >
          <li>
            <Link to={'/aboutus'}>{t('header.headerLink.linkTitle1')}</Link>
          </li>
          <li>
            <Link to={'/services'}>{t('header.headerLink.linkTitle2')}</Link>
          </li>
          <li>
            <Link to={'/qsa'}>{t('header.headerLink.linkTitle3')}</Link>
          </li>
          <li>
            <Link to={'/trustus'}>{t('header.headerLink.linkTitle4')}</Link>
          </li>
          <li>
            <Link to={'/galery'}>{t('header.headerLink.linkTitle5')}</Link>
          </li>
          <li>
            <Link>{t('header.headerLink.linkTitle6')}</Link>
          </li>
        </ul>

        <div className='flex items-center justify-around font-montserrat text-[23px]  leading-normal'>
          <ul className='flex gap-[16px] w-[136px] uppercase   text-gray-500 '>
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

          <HeaderButton title={t('header.headerButton')} />
        </div>
      </nav>
    </header>
  );
};
