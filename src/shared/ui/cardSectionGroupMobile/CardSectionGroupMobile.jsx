export const CardSectionGroupMobile = ({ item }) => {
  return (
    <li className=' rounded-[30px]  bg-none sm:bg-[rgba(0,_0,_0,_0.70)] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-full h-full'>
      <div className='p-0  sm:p-[20px] relative  flex justify-center  items-center flex-col'>
        <img
          src={item.img}
          alt={`employer`}
          className={
            'border-[0.5px] border-[solid] border-[#E2DED3] rounded-2xl w-full h-[180px]'
          }
        />
        <h6 className='font-bold text-[20px] leading-normal absolute  top-1/1 right-1/1  text-center  text-[#fff]'>
          {item.title}
        </h6>
      </div>
    </li>
  );
};
