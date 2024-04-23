import React, { useEffect } from 'react';
import {
  RehearsalCostFirstSection,
  RehearsalSwiperSection,
} from '../../widgets';
import { Advertising } from '../../shared';
import { useZustandStore } from '../../app/store/store';

export const RehearsalCostPage = () => {
  const { getRehearsalFirstBasePage, rehearsalBaseData } = useZustandStore();
  useEffect(() => {
    getRehearsalFirstBasePage();
  }, []);
  return (
    <>
      {rehearsalBaseData?.map(item => (
        <div key={item.id}>
          <RehearsalSwiperSection title={item.service_name} />
          <RehearsalCostFirstSection item={item.description} />
        </div>
      ))}

      <Advertising />
    </>
  );
};
