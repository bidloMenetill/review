import { Button } from '../button/Button';

export const CardSectionGroup = ({ item }) => {
  return (
    <li className=' rounded-[30px] border-0 sm:border-[1px] border-[solid] border-[#F5F5F5] bg-none sm:bg-[rgba(0,_0,_0,_0.70)] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-full h-full'>
      <div className='p-0 sm:p-[20px] flex justify-center items-center flex-col'>
        <img
          src={item.img}
          alt={`employer`}
          className={
            'w-full sm:w-full h-[180px] sm:h-[263px] xl:h-[563px] lg:h-[370px]'
          }
        />
        <p className='font-bold text-[24px] lg:text-[30px] mb-[5px] text-center mt-[20px] text-[#fff]'>
          {item.title}
          {item.description && <br />}
          {item.description ? (
            <span className='font-thin'>{item.description}</span>
          ) : null}
        </p>
        {!item.description && (
          <Button className='hidden sm:block' variant='orangeButton'>
            Подробнее
          </Button>
        )}
      </div>
    </li>
  );
};
