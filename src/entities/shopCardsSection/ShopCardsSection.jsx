import { useEffect } from 'react';
import { useMediaQuery } from '../../shared';
import { useZustandStore } from '../../app/store/store';
import { CardsShopCardsSection } from './cardShopCardsSection/CardsShopCardsSection';

export const ShopCardsSection = () => {
  const isMobile = useMediaQuery('(min-width: 450px) and (max-width: 575px)');
  const { getShopCards, shopCards } = useZustandStore();
  useEffect(() => {
    getShopCards();
  }, []);

  return (
    <section>
      <ul
        className={` max-w-[1920px] mx-auto mt-[100px] mb-[100px] font-montserrat text-[#E2DED3] bg-cover bg-no-repeat bg-center`}
      >
        {shopCards?.map(card => (
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
