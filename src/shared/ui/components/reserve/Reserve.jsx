import { useTranslation } from 'react-i18next';
import { CustomButton } from '../../button/CustomButton';
import reserveBg from '../../../img/reserve/reserve.jpg';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

export const Reserve = props => {
  const { t } = useTranslation();

  const isWideScreen1 = useMediaQuery(
    '(min-width: 1620px) and (max-width:1820px)'
  );
  const isWideScreen2 = useMediaQuery(
    '(min-width: 1320px) and (max-width:1620px)'
  );
  const isWideScreen3 = useMediaQuery(
    '(min-width: 1024px) and (max-width:1320px)'
  );

  return props.customButton ? (
    <div
      className='bg-cover bg-no-repeat bg-center h-[450px] bg-[#F93822]'
      style={{ backgroundImage: `url(${reserveBg})` }}
    >
      <div
        className={`container flex items-center font-[Montserrat] text-[#161616] justify-center ${isWideScreen1 ? 'w-[1520px]' : isWideScreen2 ? 'w-[1220px]' : isWideScreen3 ? 'w-[920px]' : ''}`}
      >
        <div
          className={`text-center  ${isWideScreen2 ? 'mt-[80px]' : isWideScreen3 ? 'mt-[90px]' : 'mt-[100px]'}`}
        >
          <h3
            className={`font-semibold ${isWideScreen1 ? 'text-[40px]' : isWideScreen2 ? 'text-[35px]' : isWideScreen3 ? 'text-[30px]' : 'text-[50px]'}`}
          >
            {props.h3}
          </h3>
          <p
            className={`font-semibold mt-[30px] mx-auto leading-[normal] ${isWideScreen2 ? 'w-[900px] text-[22px]' : isWideScreen3 ? 'w-[800px] text-[20px]' : 'w-[1208px] text-[25px]'}`}
          >
            {props.p}
          </p>
          <CustomButton txt={t('trustUsPage.fourthSection.buttonInner')} />
        </div>
      </div>
    </div>
  ) : (
    <div
      className='bg-cover bg-no-repeat bg-center h-[450px] bg-[#F93822]'
      style={{ backgroundImage: `url(${reserveBg})` }}
    >
      <div
        className={`container font-[Montserrat] text-[#f5f5f5] ${isWideScreen1 ? 'w-[1520px]' : isWideScreen2 ? 'w-[1220px]' : isWideScreen3 ? 'w-[920px]' : ''}`}
      >
        <div className=' text-center flex justify-center flex-col'>
          <h3
            className={`font-medium mt-[156px] ${isWideScreen2 ? 'text-[30px]' : isWideScreen3 ? 'text-[25px]' : 'text-[35px]'}`}
          >
            {props.h3}
          </h3>
          <p
            className={` font-medium mt-[36px] text-center leading-[normal] ${isWideScreen2 ? 'text-[30px]' : isWideScreen3 ? 'text-[25px]' : 'text-[35px]'}`}
          >
            {props.p}
          </p>
        </div>
      </div>
    </div>
  );
};
