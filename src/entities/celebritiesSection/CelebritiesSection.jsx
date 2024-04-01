export const CelebritiesSection = ({ celebrities }) => {
  return (
    <section>
      <ul className='min-w-[680px]  tablet:max-w-[90%] xl:container mx-auto flex justify-evenly flex-wrap text-[#f5f5f5] gap-x-[10px] tablet:gap-x-[20px] gap-y-[100px] mb-[200px] '>
        {celebrities?.map(celeb => (
          <li
            className='w-[200px] h-[236px] tablet:w-[288px] tablet:h-[430px] xl:w-[560px] xl:h-[660px] lg:w-[376px] lg:h-[540px] flex justify-center rounded-[20px] lg:rounded-[30px] ml-[20px] tablet:ml-0'
            style={{
              backgroundImage:
                celeb.img && window.innerWidth > 768
                  ? `url(${celeb.background})`
                  : undefined,
            }}
            key={celeb.id}
          >
            <img
              className='w-[200px] h-[236px] tablet:w-[266px] tablet:h-[293px] mx-auto xl:w-[520px] xl:h-[493px] lg:w-[356px] lg:h-[393px] rounded-[10px] lg:rounded-[30px] mt-[20px]'
              src={celeb.img}
              alt='celebImg'
            />
            <div className='w-[174px] bg-black bg-opacity-50 tablet:bg-[#fff] tablet:bg-opacity-0 tablet:w-[281px] lg:w-[381px] absolute text-center font-bold rounded-[5px] mt-[166px] tablet:mt-[333px] xl:mt-[533px] lg:mt-[433px]'>
              <h4 className='font-bold font-montserrat text-[18px] tablet:text-[24px] lg:text-[27px] xl:text-[30px]'>
                {celeb.name}
              </h4>
              <p className='lg:w-[370px] text-[12px] tablet:text-[18px] lg:text-[20px] font-bold font-montserrat '>
                {celeb.role}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
