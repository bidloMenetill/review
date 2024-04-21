import React from 'react';
export const NewsCard = ({ img, title, description, warning, date }) => {
  const formatDate = dateString => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;
  };

  const formattedDate = formatDate(date);
  return (
    <section className='w-[100%]'>
      <div className='relative w-[100%] pt-[100%] border-solid border-[1px] border-[#fff] rounded-[20px] mb-[20px]'>
        <img
          className='absolute top-0 object-cover rounded-[20px] w-full h-full'
          src={img}
          alt='newImg'
        />
      </div>
      <div className='relative w-full pt-[100%] border-solid border-[1px] border-[#F93822] rounded-[20px] px-[15px] bg-[#d9d9d92d] py-[20px]'>
        <ul className='absolute top-0 py-[20px] px-[2px]'>
          <h2 className='sm:text-[30px] md:text-[38px] tablet:text-[24px] lg:text-[30px] xl:text-[48px] font-[600]'>
            {title}
          </h2>
          <p className='sm:text-[26px] md:text-[34px] tablet:text-[20px] lg:text-[28px] xl:text-[40px] w-[91%]'>
            {description}
          </p>
          <p className='text-[#F93822] sm:text-[26px] md:w-[90%] md:text-[34px] tablet:text-[24px] lg:text-[30px] xl:text-[40px] mt-[50px] font-[600] w-[90%]'>
            {warning}
          </p>
        </ul>
        <p className='absolute sm:text-[24px] md:text-[] tablet:text-[24px] lg:text-[30px] xl:text-[40px] italic bottom-[20px]'>
          {formattedDate}
        </p>
      </div>
    </section>
  );
};
