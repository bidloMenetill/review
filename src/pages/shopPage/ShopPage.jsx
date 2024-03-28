import React from 'react';
import { useTranslation } from 'react-i18next';
import { QrushShop } from '../../entities/shop/QrushShop';

export const ShopPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <QrushShop />
    </div>
  );
};
