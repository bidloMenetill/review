import { Link } from 'react-router-dom';

import { Button } from '../button/Button';
import { scrollToTop } from '../../utils/scrollToTop';

export const CardSectionGroup = ({ item }) => {
  return (
    <li className='rounded-[30px] p-[10px] border-[1px] border-[solid] border-[#F5F5F5] bg-none bg-[rgba(0,_0,_0,_0.70)] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-full h-full'>
      <div className='p-0 sm:p-[20px] flex justify-center items-center flex-col'>
        <img
          src={item.img}
          alt={`employer`}
          className={
            'w-[137px] sm:w-full h-[148px] sm:h-[293px] xl:h-[563px] lg:h-[370px] rounded-[30px] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]'
          }
        />
        <p className='font-bold text-[14px] sm:text-[24px] lg:text-[30px] mb-[5px]  text-center  mt-[5px] sm:mt-[20px] text-[#fff]'>
          {item.title}
          {item.description && <br />}
          {item.description ? (
            <span className='font-thin'>{item.description}</span>
          ) : null}
        </p>
        {!item.description && (
          <Link to={item.href} onClick={scrollToTop}>
            <Button className='hidden sm:block' variant='orangeButton'>
              {item.button}
            </Button>
          </Link>
        )}
      </div>
    </li>
  );
};
