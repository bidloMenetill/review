export const IntroductionNewsSection = () => {
  return (
    <section className='mx-auto flex xl:w-[1720px] tablet:w-[1024px] md:w-[768px] md:h-[auto] md:flex md:flex-col relative tablet:relative'>
      <div className='bg-[url("/src/shared/img/news2/Rectangle_142.png")] xl:w-[1081.5px] tablet:w-[523px] xl:h-[960px] tablet:h-[508px] bg-no-repeat'>
        <div>
          <h1 className='text-[#E2DED3] font-medium xl:text-[11em] tablet:text-[7em] pt-[20%] px-[12%] lg:text-[8em] text-[8em]'>
            Новости
          </h1>
          <p className='text-[#E2DED3] font-medium text-[2em] lg:text-[2em] xl:text-[3em] tablet:text-[1.7em] pl-[12%]'>
            Здесь мы публикуем новости и статьи студии
          </p>
        </div>
      </div>
      <div className='bg-[url("/src/shared/img/news2/Rectangle_141.png")] xl:min-w-[950px] min-h-[960px] tablet:w-[503px] tablet:h-[508px] bg-no-repeat -z-30 tablet:-z-30 absolute tablet:absolute tablet:right-0 right-0'>
        <div>
          <p className='text-[#E2DED3] font-medium xl:text-[25px] pt-[75%] pl-[12%] tablet:text-[18px]'>
            Викрам Рузахунов, Нурак Омурбеков, Денис Бурдаков Запись
            музыкального видео
          </p>
        </div>
      </div>
    </section>
  );
};
