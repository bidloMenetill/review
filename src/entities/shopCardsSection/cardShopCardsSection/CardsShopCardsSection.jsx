import { Button } from '../../../shared';

export const CardsShopCardsSection = ({ card, properties }) => {
  return (
    <div
      className='mt-[100px] mx-auto tablet:h-[460px] lg:h-[660px] xl:h-[860px] relative'
      key={card.id}
    >
      <div
        className={`tablet:px-0 tablet:max-w-[87.24%] lg:max-w-[87.24%] mx-auto xl:max-w-[87.24%] flex justify-between items-center mt-[30px] tablet:gap-x-[65px] absolute tablet:items-center ${card.id % 2 === 0 ? 'tablet:max-w-[89.3%] tablet:flex-row-reverse tablet:right-0 lg:max-w-[89.3%] lg:flex-row-reverse lg:right-0' : ''} `}
      >
        <div
          className={`mx-auto tablet:w-[500px] tablet:h-[460px] lg:w-[680px] lg:h-[660px] xl:w-[805px] xl:h-[860px]`}
        >
          <img
            className={`mx-auto rounded-[16px] tablet:w-[500px] tablet:h-[460px] lg:w-[680px] lg:h-[660px] xl:w-[805px] xl:h-[860px]`}
            src={card.img}
            alt='cardImg'
          />
        </div>
        <div
          className={`flex justify-center flex-col items-center rounded-[16px] tablet:px-0 tablet:border-0  tablet:w-[405px] tablet:h-[348px] xl:w-[705px] xl:h-[548px] lg:w-[550px] lg:h-[448px]`}
        >
          <div
            className={`mx-auto tablet:w-[405px] tablet:h-[705px] lg:w-[550px] xl:w-[705px] `}
          >
            <h2
              className={`tablet:w-[405px] lg:w-[505px] xl:w-[645px] font-bold text-[#E2DED3] tablet:text-[30px] lg:text-[40px] xl:text-[50px]`}
            >
              {card.instrumentName}
            </h2>
            <ul
              className={`font-medium tablet:text-[22px] lg:text-[27px] xl:text-[30px] tablet:mt-[10px] ml-[16px]`}
            >
              {properties.map(property => (
                <li key={property}>
                  <p>{card[property]}</p>
                </li>
              ))}
            </ul>
            <div
              className={`mx-auto font-montserrat tablet:w-[434px] lg:w-[490px] xl:w-[634px] flex justify-around flex-col tablet:flex-row items-center tablet:mt-[10px] lg:mt-[30px] xl:mt-[87px] gap-x-[3px]`}
            >
              <p
                className={`font-semibold text-[#d9d9d9] opacity-70 tablet:text-[25px] lg:text-[27px] xl:text-[30px] tablet:mt-[40px] `}
              >
                Цена: {card.price}
              </p>
              <div className='md:mt-[46px] text-center'>
                <Button variant='buyButton'>Купить</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
