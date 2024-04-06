import { useMediaQuery } from '../../shared';

export const CelebritiesSection = ({ celebrities }) => {
  const isMobile = useMediaQuery('(min-width: 320px) and (max-width: 374px)');
  const isMobile1 = useMediaQuery('(min-width: 450px) and (max-width: 575px)');
  const isMobile2 = useMediaQuery('(min-width: 700px) and (max-width: 768px)');
  return (
    <section>
      <ul className=' max-w-[90%] xl:container mx-auto flex justify-between flex-wrap text-[#f5f5f5] tablet:gap-x-[20px] gap-y-[40px]  mb-[28px] tablet:mb-[200px] '>
        {celebrities?.map(celeb => (
          <li
            className={`h-[210px]  tablet:w-[288px] tablet:h-[430px] xl:w-[560px] xl:h-[660px] lg:w-[376px] lg:h-[540px] flex justify-center tablet:bg-[url("/src/shared/img/TrustUs/lightFon.jpg")] bg-cover bg-no-repeat bg-center rounded-[10px] tablet:rounded-[20px] lg:rounded-[30px] ml-[20px] tablet:mt-[100px] tablet:ml-0 ${isMobile ? 'w-[124px] h-[157px]' : 'w-[148px]'} ${isMobile1 ? 'w-[182px] h-[220px]' : isMobile2 ? 'w-[296px] h-[360px]' : 'sm:w-[239px] sm:h-[310px]'}`}
            key={celeb.id}
          >
            <img
              className={`w-[157px] h-[210px] sm:w-[259px] sm:h-[310px] tablet:w-[266px] tablet:h-[293px] mx-auto xl:w-[520px] xl:h-[493px] lg:w-[356px] lg:h-[393px] rounded-[10px] lg:rounded-[30px] mt-[20px] ${isMobile ? 'w-[124px] h-[167px]' : isMobile1 ? 'w-[182px] h-[220px]' : isMobile2 ? 'w-[296px] h-[360px]' : 'sm:w-[239px] sm:h-[310px]'}`}
              src={celeb.img}
              alt='celebImg'
            />
            <div
              className={` bg-black bg-opacity-50 sm:w-[235px] sm:mt-[254px] tablet:bg-[#fff] tablet:bg-opacity-0 tablet:w-[281px] lg:w-[381px] absolute text-center rounded-[5px] mt-[154px] tablet:mt-[333px] xl:mt-[533px] lg:mt-[433px] ${isMobile ? 'w-[124px] mt-[112px]' : 'w-[157px]'} ${isMobile1 ? 'w-[182px]' : isMobile2 ? 'w-[315px]' : 'sm:w-[235px]'}`}
            >
              <h4
                className={`font-bold text-[18px] sm:text-[20px] tablet:text-[24px] lg:text-[27px] xl:text-[30px] ${isMobile ? 'text-[14px]' : ''}`}
              >
                {celeb.name}
              </h4>
              <p
                className={`lg:w-[370px] text-[12px] sm:text-[15x] tablet:text-[18px] lg:text-[20px] font-medium tablet:font-bold ${isMobile ? 'text-[11px]' : ''}`}
              >
                {celeb.role}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
