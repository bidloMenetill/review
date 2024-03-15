import { Link } from 'react-router-dom';
import { OrangeButton } from '../../shared';
import arrayButton from '../../shared/img/link.svg';

export const People = props => {
  const { br1, br2, br3 } = props;

  return (
    <section
      className='h-[1174px] bg-cover bg-no-repeat bg-center'
      style={{ backgroundImage: `url(${props.bg})` }}
    >
      <section className='container'>
        <h2 className='text-[#F5F5F5] font-[Montserrat] text-[100px] not-italic font-medium pt-[100px] leading-[normal]'>
          {props.h2}
        </h2>
        <div className='flex justify-end'>
          <Link
            className='!flex justify-normal items-center'
            to={`${props.to}`}
          >
            <button className='font-[Montserrat] text-[30px] not-italic text-#F5F5F5 font-medium leading-[normal]'>
              смотреть все
            </button>{' '}
            <img src={arrayButton} className='ml-[10px]' alt='' />
          </Link>
        </div>
        <ul className='flex gap-x-[20px] mt-[63px] mb-[90px]'>
          <li className='border-[1px] border-[solid] rounded-[30px] border-[1px] border-[solid] border-[#F5F5F5] bg-[rgba(0,_0,_0,_0.70)] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-[566px] h-[720px]'>
            <div className='p-[20px]'>
              <img
                src={props.firstHuman}
                alt='firstEmployer'
                className='w-[520px] h-[563px]'
              />
              <p className='font-bold text-[30px] mb-[5px] text-center mt-[20px] text-[#fff]'>
                {props.p1}
                {br1 && <br />} {br1 ? `${props.br1}` : null}
              </p>
              {!br1 && <OrangeButton key='button1' txt={'Забронировать'} />}
            </div>
          </li>

          <li className='border-[1px] border-[solid]  rounded-[30px] border-[1px] border-[solid] border-[#F5F5F5] bg-[rgba(0,_0,_0,_0.70)] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-[560px] h-[717px]'>
            <div className='p-[20px]'>
              <img
                src={props.secondHuman}
                alt='secondEmployer'
                className='w-[520px] h-[563px]'
              />
              <p className='font-bold  text-[30px] mb-[5px] text-center mt-[20px] text-[#fff]'>
                {props.p2}
                {br2 && <br />} {br2 ? `${props.br2}` : null}
              </p>
              {!br2 && <OrangeButton key='button2' txt={'Забронировать'} />}
            </div>
          </li>
          <li className='border-[1px] border-[solid] rounded-[30px] border-[1px] border-[solid] border-[#F5F5F5] bg-[rgba(0,_0,_0,_0.70)] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-[560px] h-[717px]'>
            <div className='p-[20px] '>
              <img
                src={props.thirdHuman}
                alt='thirdEmployer'
                className='w-[520px] h-[563px]'
              />
              <p className='font-bold text-[30px] mb-[5px] text-center mt-[20px] text-[#fff]'>
                {props.p3}
                {br3 && <br />} {br3 ? `${props.br3}` : null}
              </p>
              {!br3 && <OrangeButton key='button3' txt={'Забронировать'} />}
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
};
