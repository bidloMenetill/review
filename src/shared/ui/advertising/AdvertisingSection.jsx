import reserveBg from '../../img/reserve/reserve.jpg';

// FIX ME: rename
export const AdvertisingSection = props => {
  return (
    <section>
      <div
        className='bg-cover bg-no-repeat bg-center h-[222px] bg-[#F93822]'
        style={{ backgroundImage: `url(${reserveBg})` }}
      >
        <div className='max-w-[90%] mx-auto xl:container flex items-center justify-center font-montserrat text-[#f5f5f5] '>
          <div className=' text-center flex justify-center flex-col'>
            <h3 className='font-medium mt-[50px] text-[30px] xl:text-[35px]'>
              {props.title}
            </h3>
            <p className='font-medium mt-[25px] lg:mt-[36px] text-center leading-[normal] text-[30px] xl:text-[35px]'>
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
