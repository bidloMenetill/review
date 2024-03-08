import { TrustUsMain, Preview, Musicians } from '../../widgets';
import { Reserve } from '../../shared';
import { useTranslation } from 'react-i18next';


export const TrustUs = () => {
  const { t } = useTranslation();
  return (
    <div>
      <TrustUsMain />
      <Preview />
      <Musicians />
      <Reserve
        h3 = {t('trustUsPage.fourthSection.title')}
        p = {t('trustUsPage.fourthSection.upperTitle')}
      />
    </div>
  );
};
