import { useTranslation } from 'react-i18next';
import { QrushShopSections } from '../../widgets';
import { Advertising } from '../../shared';

export const ShopPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <QrushShopSections />
      <Advertising
        title={t('trustUsPage.fourthSection.title')}
        description={t('trustUsPage.fourthSection.upperTitle')}
      />
    </>
  );
};
