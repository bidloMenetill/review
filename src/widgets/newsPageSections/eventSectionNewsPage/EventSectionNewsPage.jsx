import Rectangle_148_1 from '../../../shared/img/news2/Rectangle 148_1.png';

export const EventSection = () => {
  return (
    <section className='flex mt-[10%] tablet:mt-[4%] text-center mx-auto text-[#F93822] xl:min-w-[1720px] tablet:w-[1024px] '>
      <div>
        <img src={Rectangle_148_1} alt='Rectangle_148(1)' />
      </div>
      <div className='bg-[#F93822] max-w-[678px] xl:min-h-[730px] tablet:h-[419px] py-[10%] tablet:py-[3%] px-[2%] flex flex-col gap-[10%]'>
        <h2 className='text-[#E2DED3] font-semibold text-[50px] tablet:text-[30px]'>
          Бишкек
        </h2>
        <p className='text-[#B4B4B4] font-semibold text-[30px] tablet:text-[18px]'>
          16 ДЕКАБРЯ
        </p>
        <p className='text-[#E2DED3] font-medium text-[30px] tablet:text-[18px]'>
          МАСТЕР КЛАСС ПО БАРАБАНАМ ОТ ПАВЛА ХОЛОДЯНСКОГО (ГРУППА ПОШЛАЯ МОЛЛИ)
        </p>
        <p className='text-[#B4B4B4] font-semibold text-[30px] tablet:text-[18px]'>
          ВРЕМЯ 11:00-14:00
        </p>
        <p className='text-[#E2DED3] font-medium text-[30px] tablet:text-[18px]'>
          ВОЗМОЖНЫМ ПРОДОЖЕНИЕМ
        </p>
      </div>
    </section>
  );
};
