import { useEffect, useMemo, useState } from 'react';
import blueGuitar from '../../shared/img/shop/blueGuitar.png';
import drumStickBg from '../../shared/img/shop/drumSticksBg.jpg';
import qrushShop from '../../shared/img/shop/qrushShop.png';
import { AnimationTitle } from '../../shared';
import blackGuitar from '../../shared/img/shop/blackGuitar.png';
import secondDrumStickBg from '../../shared/img/shop/secondDrumStickBg.png';
import promark from '../../shared/img/shop/promark.png';
import heartFire from '../../shared/img/shop/heartFire.png';

export const BgQrushShop = () => {
  const bgForQrushShop = useMemo(
    () => [blueGuitar, promark, secondDrumStickBg],
    []
  );
  const bgForQrushShop2 = useMemo(
    () => [drumStickBg, blackGuitar, heartFire],
    []
  );
  const [indexQrushShop, setIndexQrushShop] = useState(0);
  const isChangingBg = false;
  const timeoutId = null;
  const intervalActive = true;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isChangingBg && intervalActive) {
        setIndexQrushShop(prevIndex => (prevIndex + 1) % bgForQrushShop.length);
        setIndexQrushShop(
          prevIndex => (prevIndex + 1) % bgForQrushShop2.length
        );
      }
    }, 4000);

    return () => {
      clearInterval(interval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [
    bgForQrushShop.length,
    bgForQrushShop2.length,
    timeoutId,
    isChangingBg,
    intervalActive,
  ]);

  return (
    <section>
      <div className='max-w-[1920px] mx-auto flex items-center bg-[#000] '>
        <div
          className='w-[50%] min-h-[200px] tablet:h-[620px] bg-cover bg-center lg:h-[800px] xl:h-[960px] bg-[#000] bg-animation'
          style={{
            backgroundImage: `url(${bgForQrushShop[indexQrushShop]})`,
          }}
        />
        <div className='flex justify-center items-center absolute '>
          <AnimationTitle value={qrushShop} />
        </div>
        <div
          className='w-[50%] min-h-[200px] tablet:h-[620px] bg-cover bg-center lg:h-[800px] xl:h-[960px] bg-animation'
          style={{ backgroundImage: `url(${bgForQrushShop2[indexQrushShop]})` }}
        />
      </div>
    </section>
  );
};
