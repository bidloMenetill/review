import { useTranslation } from 'react-i18next';
import { PreviewSectionTrustUs, MainSectionTrustUs } from '../../widgets';
import { Advertising } from '../../shared';

export const TrustUsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <MainSectionTrustUs />
      <PreviewSectionTrustUs />
      <Advertising
        title={t('trustUsPage.fourthSection.title')}
        description={t('trustUsPage.fourthSection.upperTitle')}
      />
    </>
  );
};
