import { useMediaQuery } from '../../hooks/useMediaQuery';

export const BuyButton = () => {
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
    <button
      className={`mt-[21px] rounded-[40px] bg-[#000000] ${isWideScreen1 ? 'w-[200px] h-[50px]' : isWideScreen2 ? 'w-[120px] h-[40px]' : isWideScreen3 ? 'w-[100px] h-[40px]' : 'w-[260px] h-[50px]'}`}
    >
      <a className='text-[#f5f5f5] text-[25px] font-montserrat' href='#'>
        Купить
      </a>
    </button>
  );
};
