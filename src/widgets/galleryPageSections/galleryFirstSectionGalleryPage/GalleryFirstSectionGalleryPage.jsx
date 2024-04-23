import backImg from '../../../shared/img/galleryPage/first.jpg';

export const GalleryFirstSectionGalleryPage = () => {
  return (
    <section
      className='h-[960px] bg-cover bg-no-repeat bg-center'
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <div className='px-4 sm:px-0 container h-[656px] mx-auto text-[#f5f5f5] font-montserrat flex flex-col items-start justify-center font-medium xl:text-[25px]  lg:text-[24px] tablet:text-[24px] md:text-[16px]sm:text-[16px]'>
        <h2 className='xl:text-[100px] lg:text-[100px] tablet:text-[48px] md:text-[48px] sm:text-[48px] font-medium  mb-[25px]'>
          Галерея
        </h2>

        <div className=''>
          <span className=' mt-[25px]  '>
            Добро пожаловать в галерею студии звукозаписи Q Rush!
          </span>
          <p className='w-[60%]'>
            Q Rush Studio - место, где звуки оживают, а мечты становятся
            реальностью. Добро пожаловать в нашу галерею, где каждое изображение
            рассказывает свою историю звука.
          </p>
        </div>
      </div>
    </section>
  );
};
