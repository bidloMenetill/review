import React from 'react';
import { BgQrushShop } from '../../features';
import { ShopCardsSection, SwiperShopCardsSection } from '../../entities';

export const QrushShopSections = () => {
  return (
    <>
      <BgQrushShop />
      {window.innerWidth <= 1023 ? (
        <SwiperShopCardsSection />
      ) : (
        <ShopCardsSection />
      )}
    </>
  );
};
