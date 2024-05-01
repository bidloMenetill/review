export const CardTeamSection = ({ item }) => {
  return (
    <li className='flex-row ml-[3%] mr-[3%] tablet:ml-0 tablet:mr-0 lg:ml-0 lg:mr-0 gap-2 pb-[2%] border-[#F93822] border-2 rounded-xl tablet:items-start p-2 tablet:mb-[15%] xl:my-[6%] border-solid sm:border-transparent sm:flex-row flex sm:pt-2 sm:gap-8 md:flex-col lg:flex'>
      <div className='p-2 text-center max-w-[575px] md:h-[800px] mb-[10%] sm:max-w-[750px] md:w-[600px] tablet:block sm:justify-items-center sm:text-center tablet:h-[450px] tablet:max-w-[300px] lg:max-w-[400x] lg:ml-0 lg:pl-0 xl:max-w-[500px] xl:h-[650px] mx-auto px-auto'>
        <img
          src={item.image}
          alt='photos_1'
          className='rounded-2xl w-[570px] max-h-[650px] xl:rounded-2xl mx-auto sm:w-[750px] md:w-[600px] md:h-[800px] tablet:max-w-[300px] tablet:h-[450px] lg:max-w-[400px] xl:w-[500px] xl:h-[650px] object-cover'
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
