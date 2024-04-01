import React from 'react';

export const CardRehearsalSection = ({ el }) => {
  return (
    <>
      {el.map(item => (
        <ul
          key={item.id}
          className='mb-[32px] text-[18px] text-[#B4B4B4] xl:text-[25px] lg:text-[23px] tablet:text-[20px]'
        >
          <li>
            <p className='mb-[16px] text-[#E2DED3]'>{item.title}</p>
          </li>
          <li>
            <p>{item.firstDescription}</p>
          </li>
          <li>
            <p>{item.secondDescription}</p>
          </li>
          <li>
            <p>{item.thirdDescription}</p>
          </li>
          <li>
            <p>{item.fourthDescription}</p>
          </li>
          <li>
            <p>{item.fifthDescription}</p>
          </li>
          <li>
            <p>{item.sixthDescription}</p>
          </li>
        </ul>
      ))}
    </>
  );
};
