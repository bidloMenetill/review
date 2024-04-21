export const CardTeamSection = ({ item }) => {
  const urlForImages = import.meta.env.VITE_IMG_URL;
  return (
    <li className='flex-row ml-[3%] mr-[3%] tablet:ml-0 tablet:mr-0 gap-2 pb-[2%] border-[#F93822] border-2 rounded-xl tablet:items-start p-2 mb-[50px] tablet:mb-[120px] xl:my-[6%] border-solid sm:border-transparent sm:flex-row flex sm:pt-2 sm:gap-8 md:flex-col lg:flex'>
      <div className='p-2 text-center max-w-[575px] mb-[10%] sm:max-w-[750px] md:w-[700px]  tablet:block sm:justify-items-center sm:text-center tablet:h-[650px] tablet:max-w-[450px] lg:max-w-[600px] xl:max-w-[520px] xl:h-[650px] mx-auto px-auto'>
        <img
          // eslint-disable-next-line no-undef
          src={`${urlForImages}${item.image}`}
          alt='photos_1'
          className='rounded-2xl w-[570px] max-h-[650px] h-[650px] xl:rounded-2xl mx-auto sm:w-[750px] md:w-[700px] tablet:max-w-[450px] lg:max-w-[600px] xl:w-[520px] xl:h-[650px] object-cover'
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
