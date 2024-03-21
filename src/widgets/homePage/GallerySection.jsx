import { Link } from 'react-router-dom';
import firstGalleryImg from '../../shared/img/first_gallery_home_page.png';
import secondGalleryImg from '../../shared/img/second_gallery_home_page.png';
import thirdGalleryImg from '../../shared/img/third_gallery_home_page.png';
import fourthGalleryImg from '../../shared/img/fourth_gallery_home_page.png';
import fifthGalleryImg from '../../shared/img/fifth_gallery_home_page.png';
import sixthGalleryImg from '../../shared/img/sixth_gallery_home_page.png';
import arrayButton from '../../shared/img/link.svg';

export const GallerySection = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <section>
      <section className='container'>
        <h2 className='text-[#F5F5F5] pt-[100px] mb-[66px] font-[Montserrat] text-[80px] lg:text-[100px] not-italic font-medium leading-[normal]'>
          Галерея
        </h2>
        <div className='flex justify-end mb-[30px]'>
          <Link
            className='flex justify-normal items-center'
            to='/galery'
            onClick={scrollToTop}
          >
            <button className='font-[Montserrat] text-[30px] not-italic text-#F5F5F5 font-medium leading-[normal] transition-colors duration-300 hover:text-[#F93822]'>
              смотреть все
            </button>{' '}
            <img src={arrayButton} className='ml-[10px]' alt='' />
          </Link>
        </div>
        <section className='grid grid-rows-[214px_229px_214px] xl:grid-rows-[224px_229px_224px] grid-column gap-4'>
          <div className='col-start-1 col-end-3 row-start-1 row-end-3'>
            {' '}
            <img
              src={firstGalleryImg}
              alt='first_gallery_image'
              className='w-full h-full xl:w-full h-auto '
            />
          </div>
          <div className='row-start-3 row-end-4 col-start-1 col-end-2'>
            {' '}
            <img
              src={secondGalleryImg}
              alt='second_gallery_image'
              className='w-full h-full xl:w-full h-auto'
            />
          </div>
          <div className='row-start-3 row-end-4 col-start-2 col-end-3'>
            {' '}
            <img
              src={thirdGalleryImg}
              alt='third_gallery_image'
              className='w-full h-full xl:w-full h-auto'
            />
          </div>
          <div className='col-start-3 col-end-4 row-start-1 row-end-2'>
            <img
              src={fourthGalleryImg}
              alt='fourth_gallery_image'
              className='w-full h-full xl:w-full h-auto'
            />
          </div>
          <div className='col-start-4 col-end-5 row-start-1 row-end-2'>
            {' '}
            <img
              src={fifthGalleryImg}
              alt='fifth_gallery_image'
              className='w-full h-full xl:w-full h-auto'
            />
          </div>
          <div className='col-start-3 col-end-5 row-start-2 row-end-4'>
            {' '}
            <img
              src={sixthGalleryImg}
              alt='sixth_gallery_image'
              className='w-full h-full xl:w-full h-auto'
            />
          </div>
        </section>
      </section>
    </section>
  );
};
