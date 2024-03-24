import { CustomButton, useMediaQuery } from '../../shared';

export const ErrorPage = () => {
  const isWideScreen = useMediaQuery(
    '(min-width: 1024px) and (max-width: 1480px)'
  );
  const isMobileScreen = useMediaQuery(
    '(min-width: 768px) and (max-width: 1024px)'
  );
  const isIphoneScreen = useMediaQuery(
    '(min-width: 430px) and (max-width: 768px)'
  );
  return (
    <div
      className={`${isWideScreen ? 'w-[820px] pt-[318px]' : isMobileScreen ? 'w-[640px] pt-[278px]' : isIphoneScreen ? 'w-[400px] pt-[198px]' : 'w-[840px] pt-[318px]'} mx-[auto]`}
    >
      <div>
        <h4
          className={`${isWideScreen ? 'text-[150px]' : isMobileScreen ? 'text-[130px]' : isIphoneScreen ? 'text-[120px]' : 'text-[170px]'} text-[#F93822] text-center font-[700]`}
        >
          404
        </h4>
      </div>
      <div>
        <p
          className={`${isWideScreen ? 'text-[26px]' : isMobileScreen ? 'text-[20px]' : isIphoneScreen ? 'text-[16px]' : 'text-[30px]'} text-[#fff] text-center font-[500]`}
        >
          Кажется, вы потерялись на просторах Интернета! Запрошенная вами
          страница не существует или была удалена.
        </p>
      </div>
      <div className='text-center'>
        <CustomButton txt={'На главную'} />
      </div>
    </div>
  );
};
