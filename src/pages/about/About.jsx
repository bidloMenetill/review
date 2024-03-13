import { useTranslation } from 'react-i18next';
import { Reserve } from '../../shared';
import { AboutUs, WhyQRush, Team } from '../../widgets';


export const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <AboutUs />
      <WhyQRush />
      <Team />
      <Reserve
        h3={t('aboutUs.fourthSection.title')}
        p={t('aboutUs.fourthSection.upperTitle')}
      />
    </div>
  );
};
