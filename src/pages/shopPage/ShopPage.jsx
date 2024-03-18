import React from 'react';
import { QrushShop } from '../../entities/shop/QrushShop';
import { Reserve } from '../../shared';

export const ShopPage = () => {
  return (
    <div>
      <QrushShop />
      <Reserve
        h3='Превзойдите ожидания и создайте свою легенду прямо здесь. '
        p='Превзойдите ожидания и создайте свою легенду прямо здесь. Забронируйте свое место в Q Rush Studio прямо сейчас, нажав на кнопку ниже, или свяжитесь с Вадимом по номеру +996 700 763736.'
        customButton='1'
      />
    </div>
  );
};
