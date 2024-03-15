import { useTranslation } from 'react-i18next';
import { CustomButton } from '../../button/CustomButton';
import reserveBg from '../../../img/reserve/reserve.jpg';

export const Reserve = (props) => {
  const { t } = useTranslation();
  return (
    props.customButton ? (
      <div
        className="bg-cover bg-no-repeat bg-center h-[450px] bg-[#F93822]"
        style={{ backgroundImage: `url(${reserveBg})` }}
      >
        <div className="container flex items-center font-[Montserrat] text-[#161616] justify-center">
          <div className="text-center mt-[100px]">
            <h3 className="text-[50px] font-semibold ">
              {props.h3}
            </h3>
            <p className=" w-[1208px] text-[25px] font-semibold mt-[30px] ml-[250px] leading-[normal]">
              {props.p}
            </p>
            <CustomButton txt={t('trustUsPage.fourthSection.buttonInner')} />
          </div>
        </div>
      </div>
    ) : (
      <div
        className="bg-cover bg-no-repeat bg-center h-[450px] bg-[#F93822]"
        style={{ backgroundImage: `url(${reserveBg})` }}
      >
        <div className="container font-[Montserrat] text-[#f5f5f5] ">
          <div className=" text-center flex justify-center flex-col">
            <h3 className="text-[35px] font-medium mt-[156px]">
              {props.h3}
            </h3>
            <p className="text-[35px] font-medium mt-[36px] text-center leading-[normal]">
              {props.p}
            </p>
          </div>
        </div>
      </div>
    )
  );
};
