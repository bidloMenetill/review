import reserveBg from '../../img/reserve/reserve.jpg';

export const Advertising = props => {
  return (
    <section
      className='bg-cover bg-no-repeat bg-cente h-[300px] border-b-[0.20px] border-b-[#e2ded3] border-b-[solid] border-t-[0.20px] border-t-[#e2ded3] border-t-[solid] bg-gradient-to-t from-[#020202] to-[#020202]  '
      style={{ backgroundImage: `url(${reserveBg})` }}
    >
      <div className='max-w-[90%] mx-auto xl:container flex items-center justify-center font-montserrat text-[#f5f5f5] '>
        <div className=' text-center flex justify-center flex-col'>
          <h3 className='font-medium mt-[50px] text-[18px] tablet:text-[30px] xl:text-[35px]'>
            {props.title}
          </h3>
          <p className='font-bold tablet:font-medium mt-[25px] lg:mt-[36px] text-center leading-[normal] text-[20px] tablet:text-[30px] xl:text-[35px]'>
            {props.description}
          </p>
        </div>
      </div>
    </section>
  );
};
