export const CardTeamSection = ({ item }) => {
  return (
    <li className='flex-row ml-[3%] mr-[3%] tablet:ml-0 tablet:mr-0 gap-2 pb-[2%] border-[#F93822] border-2 rounded-xl tablet:items-start p-2 mb-[50px] tablet:mb-[120px] xl:my-[6%] border-solid sm:border-transparent sm:flex-row flex sm:pt-2 sm:gap-8 md:flex-col lg:flex'>
      {/* <div className='text-center max-w-[575px] mb-[10%] sm:max-w-[99%] tablet:block sm:justify-items-center sm:text-center md:max-w-[700px] tablet:max-w-[1000px] lg:max-w-[1300px] xl:max-w-[520px] xl:h-[650px] mx-auto'>
        <img
          src={item.image}
          alt='photos_1'
          className='max-w-[99%] mx-auto md:w-[700px] tablet:w-[1000px] lg:w-[1250px] xl:w-[520px] xl:h-[650px] object-cover'
        />
        <h3 className='text-[#F93822] font-bold text-xl sm:text-4xl py-7'>
          {item.first_name_ru}
        </h3>
        <p className='font-medium text-[#E2DED3] text-base sm:text-3xl tablet:max-w-full'>
          {item.role_ru}
        </p>
      </div> */}
      {/* <div className='p-2 text-center max-w-[575px] mb-[10%] sm:max-w-[750px] md:w-[700px]  tablet:block sm:justify-items-center sm:text-center tablet:h-[650px] tablet:max-w-[450px] lg:max-w-[600px] xl:max-w-[520px] xl:h-[650px] mx-auto px-auto'>
        <img
          src={item.img}
          alt='photos_1'
          className='w-[570px] xl:rounded-2xl mx-auto sm:w-[750px] md:w-[700px] tablet:max-w-[450px] lg:max-w-[600px] xl:w-[520px] xl:h-[650px] object-cover'
        />
        <h3 className='text-[#F93822] font-bold text-xl sm:text-4xl py-7'>
          {item.textName}
        </h3>
        <p className='font-medium max-w-full md:max-w-full text-[#E2DED3] text-base sm:text-3xl tablet:max-w-full'>
          {item.text}
        </p>
      </div> */}
      <div className='p-2 text-center max-w-[575px] mb-[10%] sm:max-w-[750px] md:w-[700px]  tablet:block sm:justify-items-center sm:text-center tablet:h-[650px] tablet:max-w-[450px] lg:max-w-[600px] xl:max-w-[520px] xl:h-[650px] mx-auto px-auto'>
        <img
          src={item.image}
          alt='photos_1'
          className='w-[570px] xl:rounded-2xl mx-auto sm:w-[750px] md:w-[700px] tablet:max-w-[450px] lg:max-w-[600px] xl:w-[520px] xl:h-[650px] object-cover'
        />
        <h3 className='text-[#F93822] font-bold text-xl sm:text-4xl py-7'>
          {item.first_name}
        </h3>
        <p className='font-medium max-w-full md:max-w-full text-[#E2DED3] text-base sm:text-3xl tablet:max-w-full'>
          {item.role}
        </p>
      </div>
    </li>
  );
};
