import { useTranslation } from 'react-i18next';
import trustMainBg from '../../shared/img/trustUs/trustMainBg.jpg';

export const TrustUsMain = () => {
  const { t } = useTranslation();
  return (
    <div
      className="bg-[url('/src/shared/img/trustUs/trustMainBg.jpg')] bg-cover bg-no-repeat bg-center h-[960px] "
      style={{ backgroundImage: `url(${trustMainBg})` }}
    >
      <div className=' w-[1720px] mx-auto text-[#f5f5f5] font-montserrat customClass'>
        <div className='w-[1077px] h-[328px] absolute mt-[336px] title'>
          <h2 className='text-[100px] font-medium '>
            {t('trustUsPage.firstSection.title')}
          </h2>
          <p className='text-[30px]  font-medium mt-[50px]'>
            {t('trustUsPage.firstSection.upperTitle')}
          </p>
        </div>
      </div>
    </div>
  );
};
