export const CardFeastSectionNewsPage = ({ item }) => {
  return (
    <div className='flex items-center w-full gap-x-[5vw] sm:gap-x-[1vw] pl-[1vw] bg-[#1E1E1E] rounded-2xl py-[1vh]'>
      <div className='sm:max-w-[100px]'>
        <img src={item.img} alt='unnamed' className='max-w-[100px]' />
      </div>
      <div className='flex flex-col sm:max-h-[174px] sm:max-w-[258px]'>
        <div className='flex flex-col'>
          <h3 className='text-[#E2DED3] font-bold sm:text-[1vw]'>
            {item.text_h3}
          </h3>
          <p className='text-[#B4B4B4] font-medium sm:text-[0.7vw]'>
            {item.text_p1}
          </p>
          <p className='text-[#E2DED3] font-regular sm:text-[0.6vw]'>
            {item.text_p2}
          </p>
        </div>
        <div className='flex gap-[5vw] sm:gap-[0.2vw]'>
          <div className='bg-[#F93822] rounded-2xl'>
            <button className='min-w-[20vw] sm:min-w-[5vw] pt-[2vh] sm:pt-[1vh]'>
              GET
            </button>
          </div>
          <div>
            <p className='text-[#F5F5F5] font-regular sm:text-[0.8vw]'>
              {item.text_p3}
            </p>
            <p className='text-[#F5F5F5] font-regular sm:text-[0.8vw]'>
              {item.text_p4}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
