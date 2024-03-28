import { useTranslation } from 'react-i18next';
import { PreviewSectionTrustUs, MainSectionTrustUs } from '../../widgets';
import { AdvertisingSection } from '../../shared';

export const TrustUsPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <MainSectionTrustUs />
      <PreviewSectionTrustUs />
      <AdvertisingSection
        title={t('trustUsPage.fourthSection.title')}
        description={t('trustUsPage.fourthSection.upperTitle')}
      />
    </div>
  );
};
