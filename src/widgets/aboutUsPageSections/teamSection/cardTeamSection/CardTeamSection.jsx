export const CardTeamSection = ({ item }) => {
  return (
    <li
      key={item.id}
      className='flex-row gap-2 pb-[2%] border-[#F93822] border-2 rounded-xl p-2 mb-[50px] border-solid sm:border-transparent sm:flex-row flex sm:pt-2 sm:gap-8 tablet:max-w-full'
    >
      <p className='hidden sm:hidden tablet:w-full tablet:flex xl:flex tablet:items-center tablet:gap-5 tablet:hidden xl:block tablet:text-2xl tablet:font-medium tablet:text-left tablet:max-h-[300px] tablet:leading-10 tablet:text-slate-100 tablet:font-sans'>
        <img
          className='hidden sm:hidden tablet:block tablet:max-w-[80%]'
          src={item.img}
          alt='photos'
        />
        <span className='flex tablet:flex-col'>
          <span className='text-[#F93822] font-bold text-xl tablet:text-3xl'>
            {item.textName}
          </span>
          <span className='tablet:overflow-auto'>{item.text}</span>
        </span>
      </p>
      {/* <div className='sm:hidden max-w-[160px] bg-[#383838] w-[150px] rounded-md'>
        <img
          className='sm:hidden max-w-[150px]'
          src={item.man_150}
          alt='photos'
        />
        <h3 className='sm:hidden text-center max-w-[150px] font-bold text-[20px] text-[#F93822]'>
          {item.dump}
        </h3>
        <p className='sm:hidden text-center max-w-[150px] font-medium text-[16px] text-[#E2DED3]'>
          {item.andrei_h3}
        </p>
      </div> */}
      <div className='text-center max-w-[575px] sm:max-w-[99%] sm:block tablet:hidden sm:justify-items-center sm:text-center mx-auto'>
        <img
          src={item.img}
          alt='photos_1'
          className='max-w-[99%] mx-auto tablet:hidden xl:block'
        />
        <h3 className='text-[#F93822] font-bold text-xl sm:text-4xl py-7 tablet:hidden xl:block'>
          {item.textName}
        </h3>
        <p className='font-medium text-[#E2DED3] text-base sm:text-3xl max-w-[270px] sm:max-w-[300px] tablet:hidden xl:block'>
          {item.text}
        </p>
      </div>
      <div className='hidden text-center max-w-[575px] sm:max-w-[99%] tablet:block sm:justify-items-center sm:text-center mx-auto xl:hidden'>
        <img
          src={item.photo_1}
          alt='photos_1'
          className='max-w-[99%] mx-auto'
        />
        <h3 className='text-[#F93822] font-bold text-xl sm:text-4xl py-7'>
          {item.text_h3}
        </h3>
        <p className='font-medium text-[#E2DED3] text-base sm:text-3xl max-w-[270px] tablet:max-w-full sm:max-w-[300px]'>
          {item.text_tablet}
        </p>
      </div>
    </li>
  );
};
