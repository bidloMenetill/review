import { useTranslation } from 'react-i18next';
import { Advertising } from '../../shared';
import { ServiceSection, ServiceLinks } from '../../widgets';

export const ServicesPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <ServiceSection />
      <ServiceLinks />
      <Advertising
        title={t('trustUsPage.fourthSection.title')}
        description={t('trustUsPage.fourthSection.upperTitle')}
      />
    </>
  );
};
