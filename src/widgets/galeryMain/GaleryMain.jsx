import backImg from '../../shared/img/galleryPage/first.jpg'

export const GaleryMain = () => {
  return (
    <div className=' h-[960px]  bg-cover bg-no-repeat bg-center'
    style={{backgroundImage:`url(${backImg})`}}>
      <div className=' w-[1720px] h-[100%] mx-auto text-[#f5f5f5] font-montserrat flex flex-col items-start justify-center'>
        <h2 className='text-[100px] font-medium    mb-[25px]'>Галерея</h2>
        <div className=''>
          <span className='text-[30px] mt-[25px]  font-medium '>
            Добро пожаловать в галерею студии звукозаписи Q Rush!
          </span>
          <p className='text-[30px]  font-medium '>
            Q Rush Studio - место, где звуки оживают, а мечты становятся
            реальностью. Добро пожаловать в нашу галерею, где каждое изображение
            рассказывает свою историю звука.
          </p>
        </div>
      </div>
    </div>
  );
};
