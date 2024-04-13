import { Button, useMediaQuery } from '../../../shared';

export const CardsShopCardsSection = ({ card, properties }) => {
  const isMobile = useMediaQuery('(min-width: 450px) and (max-width: 575px)');
  return (
    <div
      className={`h-[343px] mt-[60px] mx-auto sm:h-[534px] md:h-[700px] md:mt-[100px] tablet:h-[460px] lg:h-[660px] xl:h-[860px] relative ${isMobile ? 'h-[452px]' : ''}`}
      key={card.id}
    >
      <li
        className={`max-w-[712px] h-[343px] md:max-w-[1464px] px-[16px] sm:px-[16px] md:px-[36px] tablet:px-0 tablet:max-w-[87.24%] lg:max-w-[87.24%] sm:max-w-[1110px] mx-auto xl:max-w-[87.24%] flex justify-between items-center sm:gap-x-[10px] mt-[30px] tablet:gap-x-[65px] absolute tablet:items-center ${card.id % 2 === 0 ? 'tablet:max-w-[89.3%] tablet:flex-row-reverse tablet:right-0 lg:max-w-[89.3%] lg:flex-row-reverse lg:right-0' : ''} ${isMobile ? 'w-[870px] h-[452px]' : ''}`}
      >
        <div
          className={`w-[340px] h-[343px] mx-auto sm:w-[524px] sm:h-[534px] md:w-[691px] md:h-[700px] tablet:w-[500px] tablet:h-[460px] lg:w-[680px] lg:h-[660px] xl:w-[805px] xl:h-[860px]  ${isMobile ? 'w-[409px] h-[452px]' : ''}`}
        >
          <img
            className={`w-[340px] h-[343px] mx-auto border-[0.50px] border-[solid] border-[#e2ded3] rounded-[16px] sm:w-[524px] sm:h-[534px] md:w-[691px] md:h-[700px] tablet:w-[500px] tablet:h-[460px] lg:w-[680px] lg:h-[660px] xl:w-[805px] xl:h-[860px]  ${isMobile ? 'w-[409px] h-[452px]' : ''}`}
            src={card.img}
            alt='cardImg'
          />
        </div>
        <div
          className={`w-[340px] h-[343px] flex justify-center flex-col items-center border-[0.50px] border-[solid] border-[#e2ded3] rounded-[16px] px-[8px] tablet:px-0 tablet:border-0  sm:w-[524px] sm:h-[534px] md:w-[691px] md:h-[700px] tablet:w-[405px] tablet:h-[348px] xl:w-[705px] xl:h-[548px] lg:w-[550px] lg:h-[448px] ${isMobile ? 'w-[409px] h-[452px]' : ''}`}
        >
          <div
            className={`w-[278px] h-[258px] sm:w-[424px] sm:h-[400px] md:w-[560px] md:h-[525px] mx-auto tablet:w-[405px] tablet:h-[705px] lg:w-[550px] xl:w-[705px] ${isMobile ? 'w-[334px] h-[339px]' : ''}`}
          >
            <h2
              className={`md:w-[440px] tablet:w-[405px] lg:w-[505px] xl:w-[645px] font-bold text-[#E2DED3] text-[14px] sm:text-[22px] md:text-[27px] lg:text-[40px] xl:text-[50px] ${isMobile ? 'text-[18px]' : ''}`}
            >
              {card.instrumentName}
            </h2>
            <ul
              className={`text-[12px] sm:text-[18px] md:text-[23px] font-medium tablet:text-[22px] lg:text-[27px] xl:text-[30px] mt-[8px] md:mt-[15px] tablet:mt-[10px] ${isMobile ? 'text-[16px]' : ''}`}
            >
              {properties.map(property => (
                <li key={property}>
                  <p>{card[property]}</p>
                </li>
              ))}
            </ul>
            <div
              className={`w-[278px] mx-auto font-montserrat sm:w-[424px] md:w-[344px] md:h-[45px] tablet:w-[434px] lg:w-[490px] xl:w-[634px] flex justify-around flex-col tablet:flex-row items-center tablet:mt-[10px] lg:mt-[30px] xl:mt-[87px] gap-x-[3px] ${isMobile ? 'w-[334px]' : ''}`}
            >
              <p
                className={`font-semibold flex-none text-[#d9d9d9] opacity-70 text-[14px] sm:text-[16px] md:text-[27px] md:font-semibold tablet:text-[25px] lg:text-[27px] xl:text-[30px] mt-[8px] md:mt-[15px] tablet:mt-[40px] ${isMobile ? 'text-[14px]' : ''}`}
              >
                Цена: {card.price}
              </p>
              <div className='mt-[16px] md:mt-[46px] text-center'>
                <Button children='Купить' variant='buyButton' />
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};
