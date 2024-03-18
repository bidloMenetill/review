import { useTranslation } from 'react-i18next';
import trustMainBg from '../../shared/img/TrustUs/trustMainBg.jpg';
import { useMediaQuery } from '../../shared';

export const TrustUsMain = () => {
  const { t } = useTranslation();

  const isWideScreen1 = useMediaQuery(
    '(min-width: 1620px) and (max-width:1820px)'
  );
  const isWideScreen2 = useMediaQuery(
    '(min-width: 1320px) and (max-width:1620px)'
  );
  const isWideScreen3 = useMediaQuery(
    '(min-width: 1024px) and (max-width:1320px)'
  );

  return (
    <div
      className="bg-[url('/src/shared/img/trustUs/trustMainBg.jpg')] bg-cover bg-no-repeat bg-center h-[960px]"
      style={{ backgroundImage: `url(${trustMainBg})` }}
    >
      <div
        className={`container text-[#f5f5f5] font-montserrat ${isWideScreen1 ? 'w-[1420px]' : isWideScreen2 ? 'w-[1220px]' : isWideScreen3 ? 'w-[920px]' : ''}`}
      >
        <div
          className={`w-[1077px] h-[328px] absolute mt-[336px] ${isWideScreen3 ? 'w-[877px]' : ''}`}
        >
          <h2
            className={` font-medium ${isWideScreen2 ? 'text-[80px]' : isWideScreen3 ? 'text-[70px]' : 'text-[100px]'}`}
          >
            {t('trustUsPage.firstSection.title')}
          </h2>
          <p
            className={` font-medium mt-[50px] ${isWideScreen2 ? 'text-[28px]' : isWideScreen3 ? 'text-[26px]' : 'text-[30px]'}`}
          >
            {t('trustUsPage.firstSection.upperTitle')}
          </p>
        </div>
      </div>
    </div>
  );
};
