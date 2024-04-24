import { useDeferredValue } from 'react';
import { useMediaQuery } from '../../shared';
import { CardsShopCardsSection } from './cardShopCardsSection/CardsShopCardsSection';

export const ShopCardsSection = ({ shopCards }) => {
  const deferredCards = useDeferredValue(shopCards);
  const isMobile = useMediaQuery('(min-width: 450px) and (max-width: 575px)');
  return (
    <section>
      <ul
        className={` max-w-[1920px] mx-auto mt-[100px] mb-[100px] font-montserrat text-[#E2DED3] bg-cover bg-no-repeat bg-center`}
      >
        {deferredCards &&
          deferredCards?.map(card => (
            <li
              className={`sm:mt-0 ${isMobile ? 'mt-[0px]' : 'mt-[90px]'}`}
              key={card.id}
            >
              <CardsShopCardsSection card={card} />
            </li>
          ))}
      </ul>
    </section>
  );
};
