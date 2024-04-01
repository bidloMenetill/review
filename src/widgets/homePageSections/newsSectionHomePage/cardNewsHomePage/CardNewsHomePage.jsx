export const CardNewsHomePage = ({ item }) => {
  return (
    <li>
      <div className='flex justify-center flex-col py-[55px] text-center '>
        <div className='flex justify-center flex-col'>
          <p className='text-[#FFF] font-[Montserrat] pb-[30px] text-[30px] not-italic font-semibold leading-[normal]'>
            {item.title}
          </p>

          <h5 className='text-[#FFF] font-[Montserrat] text-[40px] not-italic font-semibold leading-[normal]'>
            {item.subtitle}
          </h5>

          <div
            className='w-[400px] h-200px bg-no-repeat bg-cover'
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
        </div>

        <p className='text-[#FFF] font-[Montserrat] mt-[80px] text-[20px] not-italic font-semibold leading-[normal]'>
          {item.date}
        </p>
      </div>
    </li>
  );
};
