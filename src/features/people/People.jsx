import { Link } from 'react-router-dom';
import { OrangeButton, useMediaQuery } from '../../shared';
import arrayButton from '../../shared/img/link.svg';

export const People = props => {
  const {
    br1,
    br2,
    br3,
    h2,
    p1,
    p2,
    p3,
    to,
    thirdHuman,
    firstHuman,
    secondHuman,
    bg,
  } = props;
  const isWideScreen = useMediaQuery(
    '(min-width: 1024px) and (max-width: 1480px)'
  );
  return (
    <section
      className='h-[1174px]  bg-cover bg-no-repeat bg-center'
      style={{ backgroundImage: `url(${bg})` }}
    >
      <section className='container'>
        <h2 className='text-[#F5F5F5] font-[Montserrat] text-[80px] lg:text-[100px] not-italic font-medium pt-[100px] leading-[normal]'>
          {h2}
        </h2>
        <div className='flex justify-end'>
          <Link className='!flex justify-normal items-center' to={`${to}`}>
            <button className='font-[Montserrat] text-[30px] not-italic text-#F5F5F5 font-medium leading-[normal] transition-colors duration-300 hover:text-[#F93822]'>
              смотреть все
            </button>{' '}
            <img src={arrayButton} className='ml-[10px]' alt='' />
          </Link>
        </div>
        <ul className='flex gap-x-[20px] mt-[63px] mb-[90px]'>
          <li className='border-[1px] border-[solid] rounded-[30px] border-[1px] border-[solid] border-[#F5F5F5] bg-[rgba(0,_0,_0,_0.70)] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-full  h-full'>
            <div className='p-[20px] flex justify-center items-center flex-col'>
              <img
                src={firstHuman}
                alt='firstEmployer'
                className={'h-[463px] lg:h-[563px]'}
              />
              <p className='font-bold text-[25px] lg:text-[30px] mb-[5px] text-center mt-[20px] text-[#fff]'>
                {p1}
                {br1 && <br />} {br1 ? `${br1}` : null}
              </p>
              {!br1 && <OrangeButton key='button1' txt={'Подробнее'} />}
            </div>
          </li>

          <li className='border-[1px] border-[solid] rounded-[30px] border-[1px] border-[solid] border-[#F5F5F5] bg-[rgba(0,_0,_0,_0.70)] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-full  h-full'>
            <div className='p-[20px] flex justify-center items-center flex-col'>
              <img
                src={secondHuman}
                alt='secondEmployer'
                className='h-[463px] lg:h-[563px]'
              />
              <p className='font-bold  text-[25px] lg:text-[30px] mb-[5px] text-center mt-[20px] text-[#fff]'>
                {p2}
                {br2 && <br />} {br2 ? `${br2}` : null}
              </p>
              {!br2 && <OrangeButton key='button2' txt={'Подробнее'} />}
            </div>
          </li>
          <li className='border-[1px] border-[solid] rounded-[30px] border-[1px] border-[solid] border-[#F5F5F5] bg-[rgba(0,_0,_0,_0.70)] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-full h-full'>
            <div className='p-[20px]  flex flex-col justify-center items-center '>
              <img
                src={thirdHuman}
                alt='thirdEmployer'
                className='h-[463px] lg:h-[563px]'
              />
              <p className='font-bold text-[25px] lg:text-[30px] mb-[5px] text-center mt-[20px] text-[#fff]'>
                {p3}
                {br3 && <br />} {br3 ? `${br3}` : null}
              </p>
              {!br3 && <OrangeButton key='button3' txt={'Подробнее'} />}
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
};
