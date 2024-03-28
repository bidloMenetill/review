import { useTranslation } from 'react-i18next';
import { Reserve } from '../../shared';
import { IntrodactionSection, WhyQRush, Team } from '../../widgets';

export const AboutUsPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className='bg-no-repeat bg-[url("src/shared/img/about/aboutUs.png")] max-w-[1920px] xl:min-w-[1720px] lg:min-w-[1300px] flex flex-col mx-auto'>
        <IntrodactionSection />
        <WhyQRush />
        <Team />
        <Reserve
          h3={t('aboutUs.fourthSection.title')}
          p={t('aboutUs.fourthSection.upperTitle')}
        />
      </div>
    </div>
  );
};
