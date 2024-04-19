export const CardSectionGroupMobile = ({ item }) => {
  return (
    <li className='rounded-[30px]  bg-none w-full h-full'>
      <div className='relative  flex justify-center  items-center flex-col'>
        <img
          src={item.img}
          alt={`employer`}
          className={
            'border-[0.5px] border-[solid] border-[#E2DED3] rounded-2xl w-full h-[180px] sm:h-[360px]'
          }
        />
        <h6 className='font-bold text-[20px] sm:text-[40px] leading-normal absolute  top-1/1 right-1/1  text-center  text-[#fff]'>
          {item.title}
        </h6>
      </div>
    </li>
  );
};
