import React from 'react';
import previewBg from '../../shared/img/trustUs/trustPreviewBg.jpg';
import shopFirstImg from '../../shared/img/shop/shopFirstImg.jpg';
import imageGrid from '../../shared/img/shop/imageGrid.png';
import { NewArrival } from './NewArrival';
import { ShopCards } from './ShopCards';

export const QrushShop = () => {
  return (
    <div
      className='bg-cover bg-no-repeat bg-center h-[3295px]'
      style={{ backgroundImage: `url(${previewBg})` }}
    >
      <div className='container text-[#f5f5f5]'>
        <div className='flex justify-center'>
          <div
            className='w-full h-[645px] flex justify-center items-center mt-[161px] rounded-[30px]'
            style={{ backgroundImage: `url(${shopFirstImg})` }}
          >
            <img className='absolute' src={imageGrid} alt='imageGrid' />
            <h1 className='text-[100px] font-medium z-10'>Q-Rush Shop</h1>
          </div>
        </div>
        <NewArrival />
        <ShopCards />
      </div>
    </div>
  );
};
