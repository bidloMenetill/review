import { useTranslation } from 'react-i18next';
import trustMainBg from '../../../shared/img/TrustUs/trustMainBg.jpg';

export const MainSectionTrustUs = () => {
  const { t } = useTranslation();

  return (
    <section
      className='bg-cover bg-no-repeat bg-center h-[366px] md:h-[590px] tablet:h-[966px] '
      style={{ backgroundImage: `url(${trustMainBg})` }}
    >
      <div className='max-w-[90%]  mx-auto xl:container text-[#f5f5f5] font-montserrat'>
        <div className=' max-w-[90%] mx-auto md:w-[595px] tablet:w-[877px] xl:w-[1077px] lg:w-[977px] h-[328px] absolute mt-[70px] tablet:mt-[336px]'>
          <h2 className='font-bold tablet:font-medium text-[24px] sm:text-[30px] md:text-[48px] md:fond-semibold tablet:text-[60px] xl:text-[100px] lg:text-[80px]'>
            {t('trustUsPage.firstSection.title')}
          </h2>
          <p className='font-medium mt-[25px] tablet:mt-[50px] text-[14px] sm:text-[16px] md:text-[24px] leading-[150%] tablet:text-[20px] xl:text-[25px] lg:text-[22px]'>
            {t('trustUsPage.firstSection.upperTitle')}
          </p>
        </div>
      </div>
    </section>
  );
};
