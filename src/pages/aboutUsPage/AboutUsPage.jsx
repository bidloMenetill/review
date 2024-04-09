import { useTranslation } from 'react-i18next';
import { AdvertisingSection } from '../../shared';
import {
  WhyQRushSection,
  Team,
  IntrodactionSectionAboutUs,
} from '../../widgets';

export const AboutUsPage = () => {
  const { t } = useTranslation();
  return (
    <section className='bg-[#020202] bg-[url("/src/shared/img/aboutMobile/bg_about.png")] bg-no-repeat sm:bg-no-repeat sm:bg-[url("/src/shared/img/about/aboutUs.png")] max-w-[1920px] flex flex-col mx-auto'>
      <IntrodactionSectionAboutUs />
      <WhyQRushSection />
      <Team />
      <AdvertisingSection
        title={t('aboutUs.fourthSection.title')}
        description={t('aboutUs.fourthSection.upperTitle')}
      />
    </section>
  );
};
