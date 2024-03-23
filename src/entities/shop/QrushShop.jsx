import React from 'react';
import previewBg from '../../shared/img/TrustUs/trustPreviewBg.jpg';
import shopFirstImg from '../../shared/img/shop/shopFirstImg.jpg';
import imageGrid from '../../shared/img/shop/imageGrid.png';
import { useMediaQuery } from '../../shared';
import { NewArrival } from './NewArrival';
import { ShopCards } from './ShopCards';

export const QrushShop = () => {
  const isWideScreen1 = useMediaQuery(
    '(min-width: 1620px) and (max-width:1820px)'
  );
  const isWideScreen2 = useMediaQuery(
    '(min-width: 1320px) and (max-width:1620px)'
  );
  const isWideScreen3 = useMediaQuery(
    '(min-width: 1024px) and (max-width:1320px)'
  );

  return (
    <div
      className={`bg-cover bg-no-repeat bg-center ${isWideScreen1 ? 'h-[3295px]' : isWideScreen2 ? 'h-[2995px]' : isWideScreen3 ? 'h-[3395px]' : 'h-[3295px]'}`}
      style={{ backgroundImage: `url(${previewBg})` }}
    >
      <div
        className={`container text-[#f5f5f5] ${isWideScreen1 ? 'w-[1520px]' : isWideScreen2 ? 'w-[1220px]' : isWideScreen3 ? 'w-[920px]' : ''}`}
      >
        <div className='flex justify-center'>
          <div
            className={`w-full  flex justify-center items-center mt-[161px] rounded-[30px] ${isWideScreen1 ? 'h-[545px] rounded-[20px]' : isWideScreen2 ? 'h-[445px] rounded-[20px]' : isWideScreen3 ? 'h-[345px] rounded-[10px]' : 'h-[645px]'}`}
            style={{ backgroundImage: `url(${shopFirstImg})` }}
          >
            <img className='absolute' src={imageGrid} alt='imageGrid' />
            <h1
              className={`text-[100px] font-medium z-10 ${isWideScreen2 ? 'text-[70px]' : isWideScreen3 ? 'text-[50px]' : ''}`}
            >
              Q-Rush Shop
            </h1>
          </div>
        </div>
        <NewArrival />
        <ShopCards />
      </div>
    </div>
  );
};
