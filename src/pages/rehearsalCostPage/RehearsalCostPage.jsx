import React from 'react';
import {
  RehearsalCostFirstSection,
  RehearsalCostSecondSection,
  RehearsalCostThirdSection,
  RehearsalSwiperSection,
} from '../../widgets';
import { ServiceFooter } from '../../shared';

export const RehearsalCostPage = () => {
  return (
    <>
      <RehearsalSwiperSection />
      <RehearsalCostFirstSection />
      <RehearsalCostSecondSection />
      <RehearsalCostThirdSection />
      <ServiceFooter
        description={
          'Не жди следующего понедельника, бронируй время в студии уже сейчас!'
        }
        number={'Звонки/WhatsApp +996 700 76 37 36'}
      />
    </>
  );
};
