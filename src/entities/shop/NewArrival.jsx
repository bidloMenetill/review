import darkFon from '../../shared/img/shop/darkFon.png';
import drums from '../../shared/img/shop/drums.png';
import { useMediaQuery, BuyButton } from '../../shared';

export const NewArrival = () => {
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
      className={`container ${isWideScreen1 ? 'w-[1520px]' : isWideScreen2 ? 'w-[1220px]' : isWideScreen3 ? 'w-[920px]' : ''}`}
    >
      <div className='flex justify-between'>
        <div
          className={`bg-cover bg-no-repeat bg-center  mt-[100px] ${isWideScreen1 ? 'w-[760px] h-[597px] rounded-[30px]' : isWideScreen2 ? 'w-[660px] h-[497px] rounded-[20px]' : isWideScreen3 ? 'w-[560px] h-[397px] rounded-[10px]' : 'w-[860px] h-[697px] rounded-[30px]'}`}
          style={{ backgroundImage: `url(${darkFon})` }}
        >
          <p
            className={`font-medium  absolute ml-[24px] mt-[10px] ${isWideScreen1 ? 'text-[45px]' : isWideScreen2 ? 'text-[40px]' : isWideScreen3 ? 'text-[35px]' : 'text-[50px]'}`}
          >
            Новое поступление
          </p>
          <img className='w-full' src={drums} alt='drums' />
        </div>
        <div
          className={`bg-cover bg-no-repeat bg-center flex justify-center items-center text-center mt-[100px] ${isWideScreen1 ? 'w-[760px] h-[597px] rounded-[30px]' : isWideScreen2 ? 'w-[660px] h-[497px] rounded-[20px]' : isWideScreen3 ? 'w-[560px] h-[397px] rounded-[10px]' : 'w-[860px] h-[697px] rounded-[30px]'}`}
          style={{ backgroundImage: `url(${darkFon})` }}
        >
          <div>
            <div
              className={`font-bold  ${isWideScreen1 ? 'text-[45px]' : isWideScreen2 ? 'text-[40px]' : isWideScreen3 ? 'text-[35px]' : 'text-[50px]'}`}
            >
              Ударная установка
            </div>
            <div
              className={`font-semibold text-[#7B7B7B]${isWideScreen1 ? 'text-[45px]' : isWideScreen2 ? 'text-[40px]' : isWideScreen3 ? 'text-[35px]' : 'text-[50px]'}`}
            >
              цвет Cobalt Blue, <br />
              10"-12"-16"-22", 14х6.5"
            </div>
            <BuyButton />
          </div>
        </div>
      </div>
    </div>
  );
};
