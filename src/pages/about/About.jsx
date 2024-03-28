import { useTranslation } from 'react-i18next';
import { AdvertisingSection } from '../../shared';
import { AboutUsSection, WhyQRush, TeamSection } from '../../widgets';

export const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className='bg-no-repeat bg-[url("src/shared/img/aboutUs.png")] w-1920px flex flex-col mx-auto'>
        <AboutUsSection />
        <WhyQRush />
        <TeamSection />
        <AdvertisingSection
          title={t('aboutUs.fourthSection.title')}
          description={t('aboutUs.fourthSection.upperTitle')}
        />
      </div>
    </div>
  );
};
