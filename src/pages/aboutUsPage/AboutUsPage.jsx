import { useTranslation } from 'react-i18next';
import { AdvertisingSection } from '../../shared';
import { WhyQRush, Team, IntrodactionSectionAboutUs } from '../../widgets';

export const AboutUsPage = () => {
  const { t } = useTranslation();
  return (
    <section className='bg-no-repeat bg-[url("src/shared/img/about/aboutUs.png")] max-w-[1920px] xl:min-w-[1720px] lg:min-w-[1300px] flex flex-col mx-auto'>
      <IntrodactionSectionAboutUs />
      <WhyQRush />
      <Team />
      <AdvertisingSection
        title={t('aboutUs.fourthSection.title')}
        description={t('aboutUs.fourthSection.upperTitle')}
      />
    </section>
  );
};
