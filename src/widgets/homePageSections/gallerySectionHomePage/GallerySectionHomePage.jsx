import firstGalleryImg from '../../../shared/img/first_gallery_home_page.png';
import secondGalleryImg from '../../../shared/img/second_gallery_home_page.png';
import thirdGalleryImg from '../../../shared/img/third_gallery_home_page.png';
import fourthGalleryImg from '../../../shared/img/fourth_gallery_home_page.png';
import fifthGalleryImg from '../../../shared/img/fifth_gallery_home_page.png';
import sixthGalleryImg from '../../../shared/img/sixth_gallery_home_page.png';

import ViewAllLink from '../../../shared/ui/viewAllLink/ViewAllLink';

export const GallerySectionHomePage = () => {
  return (
    <section>
      <section className='max-w-[90%] xl:container mx-auto '>
        <h2 className='text-[#F5F5F5] pt-[100px] mb-[66px] font-[Montserrat] text-[80px] lg:text-[100px] not-italic font-medium leading-[normal]'>
          Галерея
        </h2>
        <div className='flex justify-end mb-[30px]'>
          <ViewAllLink linkAddress={'gallery'} />
        </div>
        <section className='grid grid-rows-[33.14%_31.20%_33.14%]   grid-column gap-4'>
          <div className='col-start-1 col-end-3 row-start-1 row-end-3'>
            {' '}
            <img
              src={firstGalleryImg}
              alt='first_gallery_image'
              className='w-auto h-auto'
            />
          </div>
          <div className='row-start-3 row-end-4 col-start-1 col-end-2'>
            {' '}
            <img
              src={secondGalleryImg}
              alt='second_gallery_image'
              className='w-auto h-auto'
            />
          </div>
          <div className='row-start-3 row-end-4 col-start-2 col-end-3'>
            {' '}
            <img
              src={thirdGalleryImg}
              alt='third_gallery_image'
              className='w-auto h-auto'
            />
          </div>
          <div className='col-start-3 col-end-4 row-start-1 row-end-3'>
            <img
              src={fourthGalleryImg}
              alt='fourth_gallery_image'
              className='w-auto h-auto'
            />
          </div>
          <div className='col-start-4 col-end-5 row-start-1 row-end-3'>
            {' '}
            <img
              src={fifthGalleryImg}
              alt='fifth_gallery_image'
              className='w-auto h-auto'
            />
          </div>
          <div className='col-start-3 col-end-5 row-start-2 row-end-4'>
            {' '}
            <img
              src={sixthGalleryImg}
              alt='sixth_gallery_image'
              className='w-auto h-auto '
            />
          </div>
        </section>
      </section>
    </section>
  );
};
