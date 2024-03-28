export const IntroductionNewsSection = () => {
  return (
    <section className='flex xl:min-w-[1720px] lg:min-w-[1300px] bg-contain'>
      <div className='bg-[url("/src/shared/img/news2/Rectangle_142.png")] bg-contain max-w-[1081.5px] min-h-[960px] bg-no-repeat'>
        <div>
          <h1 className='text-[#E2DED3] font-medium xl:text-[11em] pt-[30%] px-[12%] lg:text-[8em] text-[8em]'>
            Новости
          </h1>
          <p className='text-[#E2DED3] font-medium text-[2em] xl:text-[3em] lg:text-[2em] pl-[12%]'>
            Здесь мы публикуем новости и статьи студии
          </p>
        </div>
      </div>
      <div className='bg-[url("/src/shared/img/news2/Rectangle_141.png")] bg-contain max-w-[950px] min-h-[960px] bg-no-repeat'>
        <div>
          <p className='text-[#E2DED3] font-medium text-[25px] pt-[75%] pl-[12%]'>
            Викрам Рузахунов, Нурак Омурбеков, Денис Бурдаков Запись
            музыкального видео
          </p>
        </div>
      </div>
    </section>
  );
};
