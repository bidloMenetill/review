import { useTranslation } from 'react-i18next';
import { AdvertisingSection } from '../../shared';
import { AboutUs, WhyQRush, Team } from '../../widgets';

export const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className='bg-no-repeat bg-[url("src/shared/img/aboutUs.png")] w-1920px flex flex-col mx-auto'>
        <AboutUs />
        <WhyQRush />
        <Team />
        <AdvertisingSection
          title={t('aboutUs.fourthSection.title')}
          description={t('aboutUs.fourthSection.upperTitle')}
        />
      </div>
    </div>
  );
};
