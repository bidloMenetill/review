import React from 'react';
import { RehearsalSectionItem } from './rehearsalSectionItem/RehearsalSectionItem';

export const RehearsalCostFirstSection = ({ item }) => {
  const length = item.length;
  return (
    <section className='w-full mx-auto font-montserrat text-[#E2DED3] mb-[10px] md:mb-[34px] tablet:mb-[94px] lg:mb-[154px]'>
      {item?.map(item => (
        <RehearsalSectionItem key={item.id} item={item} length={length} />
      ))}
    </section>
  );
};
