import { useTranslation } from 'react-i18next';
import trustMainBg from '../../../shared/img/TrustUs/trustMainBg.jpg';

export const MainSectionTrustUs = () => {
  const { t } = useTranslation();

  return (
    <section
      className='bg-cover bg-no-repeat bg-center h-[966px] '
      style={{ backgroundImage: `url(${trustMainBg})` }}
    >
      <div className='max-w-[90%] mx-auto xl:container text-[#f5f5f5] font-montserrat'>
        <div className='w-[877px] xl:w-[1077px] lg:w-[977px] h-[328px] absolute mt-[336px]'>
          <h2 className='font-medium  text-[60px] xl:text-[100px] lg:text-[80px]'>
            {t('trustUsPage.firstSection.title')}
          </h2>
          <p className='font-medium mt-[50px] text-[20px] xl:text-[25px] lg:text-[22px]'>
            {t('trustUsPage.firstSection.upperTitle')}
          </p>
        </div>
      </div>
    </section>
  );
};
