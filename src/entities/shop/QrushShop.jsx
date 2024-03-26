import React from 'react';
import blueGuitar from '../../shared/img/shop/blueGuitar.png';
import drumStickBg from '../../shared/img/shop/drumSticksBg.jpg';
import qrushShop from '../../shared/img/shop/qrushShop.png';
import { ShopCards } from './ShopCards';

export const QrushShop = () => {
  return (
    <div>
      <div className='max-w-[1920px] flex  bg-[#000] mx-auto'>
        <div
          className='w-[50%] h-[620px] lg:h-[800px] xl:h-[960px] bg-[#000]'
          style={{
            backgroundImage: `url(${blueGuitar})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className='max-w-[90%] mx-auto flex justify-center items-center'>
          <img
            className='w-[870px] h-[164px] xl:w-[1470px] xl:h-[244px] lg:w-[1170px] lg:h-[204px] absolute'
            src={qrushShop}
            alt='qrushShop'
          />
        </div>
        <div
          className='w-[50%] h-[620px] lg:h-[800px] xl:h-[960px]'
          style={{
            backgroundImage: `url(${drumStickBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
      <ShopCards />
    </div>
  );
};
