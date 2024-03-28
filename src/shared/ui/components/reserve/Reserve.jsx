import { useTranslation } from 'react-i18next';
import { CustomButton } from '../../button/CustomButton';
import reserveBg from '../../../img/reserve/reserve.jpg';

export const Reserve = props => {
  const { t } = useTranslation();

  return props.customButton ? (
    <div
      className='bg-cover bg-no-repeat bg-center h-[450px] bg-[#F93822]'
      style={{ backgroundImage: `url(${reserveBg})` }}
    >
      <div className='max-w-[90%] mx-auto xl:container flex items-center font-[Montserrat] text-[#161616] justify-center '>
        <div className='text-center mt-[100px] '>
          <h3 className='font-semibold text-[40px] lg:text-[45px] xl:text-[50px]'>
            {props.h3}
          </h3>
          <p className='font-semibold mt-[30px] mx-auto leading-[normal] w-[800px] lg:w-[1208px] text-[22px] lg:text-[25px]'>
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
      <div className='max-w-[90%] mx-auto xl:container flex items-center justify-center font-[Montserrat] text-[#f5f5f5] '>
        <div className=' text-center flex justify-center flex-col'>
          <h3 className='font-medium mt-[156px] text-[30px] lg:text-[35px]'>
            {props.h3}
          </h3>
          <p className='font-medium mt-[36px] text-center leading-[normal] text-[30px] lg:text-[35px]'>
            {props.p}
          </p>
        </div>
      </div>
    </div>
  );
};
