import { useTranslation } from 'react-i18next';
import { Reserve } from '../../shared';
import { WhyQRush, Team, IntrodactionSectionAboutUs } from '../../widgets';

export const AboutUsPage = () => {
  const { t } = useTranslation();
  return (
    <section className='bg-no-repeat bg-[url("src/shared/img/about/aboutUs.png")] max-w-[1920px] xl:min-w-[1720px] lg:min-w-[1300px] flex flex-col mx-auto'>
      <IntrodactionSectionAboutUs />
      <WhyQRush />
      <Team />
      <Reserve
        h3={t('aboutUs.fourthSection.title')}
        p={t('aboutUs.fourthSection.upperTitle')}
      />
    </section>
  );
};
