import React from 'react';
import blueGuitar from '../../shared/img/shop/blueGuitar.png';
import drumStickBg from '../../shared/img/shop/drumSticksBg.jpg';
import qrushShop from '../../shared/img/shop/qrushShop.png';
import { AnimationText } from '../../shared';
import { ShopCards } from './ShopCards';

export const QrushShop = () => {
  return (
    <div>
      <div className='max-w-[1920px] flex items-center   bg-[#000] mx-auto'>
        <div
          className='w-[50%] h-[620px] lg:h-[800px] xl:h-[960px] bg-[#000]'
          style={{
            backgroundImage: `url(${blueGuitar})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className='flex justify-center items-center absolute '>
          <AnimationText qrushImg={qrushShop} />
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
