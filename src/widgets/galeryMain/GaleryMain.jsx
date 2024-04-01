import backImg from '../../shared/img/galleryPage/first.jpg';
// FIX ME: add section
export const GaleryMain = () => {
  return (
    <section
      className='h-[960px] bg-cover bg-no-repeat bg-center'
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <div className=' container h-[100%] mx-auto text-[#f5f5f5] font-montserrat flex flex-col items-start justify-center font-medium xl:text-[25px] text-[15px] lg:text-[20px]'>
        <h2 className='text-[100px] font-medium  mb-[25px]'>Галерея</h2>
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
