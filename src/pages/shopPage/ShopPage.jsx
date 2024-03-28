import React from 'react';
import { useTranslation } from 'react-i18next';
import { QrushShopSections } from '../../widgets';

export const ShopPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <QrushShopSections />
    </div>
  );
};
