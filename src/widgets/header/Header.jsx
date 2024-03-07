import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../shared/img/rush.png';
import Button from '../../shared/ui/button/Button';


const locales = {
  ru: { title: 'Ru' },
  en: { title: 'En' },
  kg: { title: 'Kg' },
};
export const Header = () => {
  const { i18n } = useTranslation();
  return (
    <header className="bg-gray-700 w-[100vw] h-[100px] bg-opacity-50 flex justify-center">
      <nav className=" w-[1720px]  flex justify-between items-center">
        <Link to={'/'}>
          <img src={logo} alt="Q-RUSH logo" />
        </Link>

        <ul className=" flex justify-evenly items-center  text-gray-100 gap-[25px] font-montserrat font-[50px] text-[20px] leading-normal ">
          <li>
            <Link to={'/aboutus'}>О нас</Link>
          </li>
          <li>
            <Link to={'/services'}>Услуги</Link>
          </li>
          <li>
            <Link to={'/trustus'}>Нам доверяют</Link>
          </li>
          <li>
            <a href="">Галерея</a>
          </li>
          <li>
            <a href="">Контакты</a>
          </li>
        </ul>

        <div className="flex items-center justify-aroundfont-montserrat text-[23px] leading-normal">
          <ul className="flex gap-[16px] mr-[50px]  text-gray-500 ">
            {Object.keys(locales).map((locale) => (
              <li key={locale}>
                <button
                  className={`focus:text-gray-100 hover:text-orange-500 ${i18n.resolvedLanguage === locale ? 'text-white' : 'text-gray-500'}`}

                  style={{
                    fontWeight:
                      i18n.resolvedLanguage === locale ? 'bold' : 'normal',
                  }}
                  type="submit"
                  onClick={() => i18n.changeLanguage(locale)}
                >
                  {locales[ locale ].title}
                </button>
              </li>
            ))}
          </ul>

          <Button txt="связаться" />
        </div>
      </nav>
    </header>
  );
};
