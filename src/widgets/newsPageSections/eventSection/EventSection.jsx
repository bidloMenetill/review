import Rectangle_148_1 from '../../../shared/img/news2/Rectangle 148_1.png';

export const EventSection = () => {
  return (
    <section className='flex mt-[10%] text-center text-[#F93822] max-w-[1920px]'>
      <div>
        <img src={Rectangle_148_1} alt='Rectangle_148(1)' />
      </div>
      <div className='bg-[#F93822] max-w-[678px] min-h-[860px] py-[10%] px-[2%] flex flex-col gap-[10%]'>
        <h2 className='text-[#E2DED3] font-semibold text-[50px]'>Бишкек</h2>
        <p className='text-[#B4B4B4] font-semibold text-[30px]'>16 ДЕКАБРЯ</p>
        <p className='text-[#E2DED3] font-medium text-[30px]'>
          МАСТЕР КЛАСС ПО БАРАБАНАМ ОТ ПАВЛА ХОЛОДЯНСКОГО (ГРУППА ПОШЛАЯ МОЛЛИ)
        </p>
        <p className='text-[#B4B4B4] font-semibold text-[30px]'>
          ВРЕМЯ 11:00-14:00
        </p>
        <p className='text-[#E2DED3] font-medium text-[30px]'>
          ВОЗМОЖНЫМ ПРОДОЖЕНИЕМ
        </p>
      </div>
    </section>
  );
};
