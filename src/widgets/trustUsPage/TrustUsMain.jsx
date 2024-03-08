import trustMainBg from '../../shared/img/trustUs/trustMainBg.svg';
import { useTranslation } from 'react-i18next';

export const TrustUsMain = () => {
  const { t } = useTranslation();
  return (
    <div
      className="bg-[url('/src/shared/img/trustUs/trustMainBg.svg')] bg-cover bg-no-repeat bg-center h-[525px] "
      style={{ backgroundImage: `url(${trustMainBg})` }}
    >
      <div className=" w-[1720px] h-[283px] mx-auto text-[#f5f5f5] font-montserrat ">
        <h2 className="text-[100px] font-medium ">{t('trustUsPage.firstSection.title')}</h2>
        <p className="text-[30px]  font-medium ml-[27px]">
          {t('trustUsPage.firstSection.upperTitle')}
        </p>
      </div>
    </div>
  );
};
