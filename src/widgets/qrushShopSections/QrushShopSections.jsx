import React from 'react';
import { BgQrushShop } from '../../features';
import { ShopCardsSection } from '../../entities';
import { SwiperShopCardsSection } from '../../entities/swiperShopCardsSection/SwiperShopCardsSection';
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
