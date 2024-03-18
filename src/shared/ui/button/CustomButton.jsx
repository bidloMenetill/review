import { useMediaQuery } from '../../hooks/useMediaQuery';

export const CustomButton = props => {
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
      type='button'
      className={`h-[50px] text-[#F5F5F5] text-center btn font-medium font-montserrat rounded-[30px] mt-[50px] ${isWideScreen1 ? 'w-[330px] text-[25px]' : isWideScreen2 ? 'w-[300px] text-[23px]' : isWideScreen3 ? 'w-[250px] text-[22px]' : 'w-[330px] text-[25px]'}`}
    >
      <a href='#'>{props.txt}</a>
    </button>
  );
};
