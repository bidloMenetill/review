import studioRecording from '../../shared/img/first_gallery_home_page.png';

export const SoundRecording = () => {
  return (
    <section className='relative w-full flex justify-end font-montserrat h-[960px] mb-[164px] bg-[#0000008a]'>
      <div className='absolute z-10 w-[705px] mx-auto left-[100px] top-[175px] text-[#fff]'>
        <h3 className='text-[50px] font-[500] mb-[24px]'>СТУДИЯ ЗВУКОЗАПИСИ</h3>
        <p className='text-[30px] font-[400] text-[#B4B4B4] mb-[24px]'>
          ЗАПИСЬ ВОКАЛА{' '}
        </p>
        <p className='text-[30px] font-[400] text-[#B4B4B4] mb-[24px]'>
          СОЗДАНИЕ МУЗЫКИ И АРАНЖИРОВОК{' '}
        </p>
        <p className='text-[30px] font-[400] text-[#B4B4B4] mb-[24px]'>
          ЗАПИСЬ МЫЗЫКАЛЬНЫХ ИНСТРУМЕНТОВ{' '}
        </p>
        <p className='text-[30px] font-[400] text-[#B4B4B4] mb-[24px]'>
          ИЗГОТОВЛЕНИЕ РЕКЛАМНЫХ РОЛИКОВ <br /> С ЛУЧШИМИ ДИКТОРАМИ КР
        </p>
        <p className='text-[30px] font-[400] text-[#B4B4B4] mb-[24px]'>
          МНОГОКАНАЛЬНАЯ ЗАПИСЬ КОНЦЕРТОВ <br /> РЕПЕТИЦИЙ И КОНФЕРЕНЦИЙ
        </p>
        <div className='w-full text-center'>
          <button
            type='submit'
            className='bg-[#F93822] rounded-[30px] py-[20px] px-[100px] mt-[56px]'
          >
            Отправить
          </button>
        </div>
      </div>
      <img
        className='absolute object-cover right-[-30px] w-[75%] h-full rounded-[16px] z-[-1]'
        src={studioRecording}
        alt='studioRecording'
      />
    </section>
  );
};
