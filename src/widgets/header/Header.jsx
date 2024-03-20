import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import logo from '../../shared/img/rush.png';

import HeaderButton from '../../shared/ui/button/HeaderButton';

const locales = {
  ru: { title: 'Ru' },
  en: { title: 'En' },
  kg: { title: 'Kg' },
};
export const Header = () => {
  const { i18n } = useTranslation();
  return (
    <header className='bg-black/50   w-full h-[100px] backdrop-opacity-10 backdrop-invert flex items-center justify-center absolute top-0 backdrop-blur-50'>
      <nav className=' w-[1720px]  flex justify-between items-center'>
        <Link to={'/'}>
          <img src={logo} alt='Q-RUSH logo' />
        </Link>

        <ul className=' flex justify-evenly items-center  text-gray-100 gap-[25px] font-montserrat font-[50px] text-[20px] leading-normal '>
          <li>
            <Link to={'/aboutus'}>{t('aboutUs.section.link1')}</Link>
          </li>
          <li>
            <Link to={'/services'}>{t('aboutUs.section.link2')}</Link>
          </li>
          <li>
            <Link to={'/trustus'}>{t('aboutUs.section.link3')}</Link>
          </li>
          <li>
            <Link to={'/galery'}>{t('aboutUs.section.link4')}</Link>
          </li>
          <li>
            <Link>{t('aboutUs.section.link5')}</Link>
          </li>
        </ul>

        <div className='flex items-center justify-aroundfont-montserrat text-[23px] leading-normal'>
          <ul className='flex gap-[16px] mr-[50px]  text-gray-500 '>
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

          <HeaderButton txt='связаться' />
        </div>
      </nav>
    </header>
  );
};
