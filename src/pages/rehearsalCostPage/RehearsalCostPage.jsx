import React from 'react';
import {
  RehearsalCostFirstSection,
  RehearsalCostSecondSection,
  RehearsalCostThirdSection,
  RehearsalSwiperSection,
} from '../../widgets';
import { Advertising } from '../../shared';

export const RehearsalCostPage = () => {
  return (
    <>
      <RehearsalSwiperSection />
      <RehearsalCostFirstSection />
      <RehearsalCostSecondSection />
      <RehearsalCostThirdSection />
      <Advertising />
    </>
  );
};
