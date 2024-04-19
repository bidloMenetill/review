import { useTranslation } from 'react-i18next';
import { Advertising } from '../../shared';
import { AllNewsCardSection } from '../../widgets';

export const NewsPage = () => {
  const { t } = useTranslation();
  return (
    <section>
      <AllNewsCardSection />
      <Advertising
        title={t('trustUsPage.fourthSection.title')}
        description={t('trustUsPage.fourthSection.upperTitle')}
      />
    </section>
  );
};
