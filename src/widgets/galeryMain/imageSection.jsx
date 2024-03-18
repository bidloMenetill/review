
import firstGalleryImg from '../../shared/img/first_gallery_home_page.png';
import secondGalleryImg from '../../shared/img/second_gallery_home_page.png';
import thirdGalleryImg from '../../shared/img/third_gallery_home_page.png';
import fourthGalleryImg from '../../shared/img/fourth_gallery_home_page.png';
import fifthGalleryImg from '../../shared/img/fifth_gallery_home_page.png';
import sixthGalleryImg from '../../shared/img/sixth_gallery_home_page.png';


export const ImageSection = () => {
  return (
    <section>
      <section className="container">

        <section className='grid grid-rows-[224px_229px_224px] grid-column gap-4 mt-[100px]' >
          <div className='col-start-1 col-end-3 row-start-1 row-end-3 rounded-[30px] border-[2px] border-solid border-gray-500'> <img src={firstGalleryImg} alt="first_gallery_image" className='w-full h-auto'/></div>
          <div className='row-start-3 row-end-4 col-start-1 col-end-2 rounded-[30px] border-[2px] border-solid border-gray-500'>  <img src={secondGalleryImg} alt="second_gallery_image" className='w-auto h-auto'/></div>
          <div className='row-start-3 row-end-4 col-start-2 col-end-3 rounded-[30px] border-[2px] border-solid border-gray-500'> <img src={thirdGalleryImg} alt="third_gallery_image" className='w-auto h-auto'/></div>
          <div className='col-start-3 col-end-4 row-start-1 row-end-3 rounded-[30px] border-[2px] border-solid border-gray-500'><img src={fourthGalleryImg} alt="fourth_gallery_image" className='w-auto h-auto'/></div>
          <div className='col-start-4 col-end-5 row-start-1 row-end-3 rounded-[30px] border-[2px] border-solid border-gray-500'> <img src={fifthGalleryImg} alt="fifth_gallery_image" className='w-auto h-auto'/></div>
          <div className='col-start-3 col-end-5 row-start-2 row-end-4 rounded-[30px] border-[2px] border-solid border-gray-500'> <img src={sixthGalleryImg} alt="sixth_gallery_image" className='w-auto h-auto ' /></div>
        </section>
      </section>
    </section>
  );
};