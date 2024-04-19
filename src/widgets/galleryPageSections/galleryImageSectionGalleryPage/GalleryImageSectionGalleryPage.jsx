import { useState } from 'react';
import { ImageModal } from '../../../shared/ui/imageModal/ImageModal';
import firstGalleryImg from '../../../shared/img/first_gallery_home_page.png';
import secondGalleryImg from '../../../shared/img/second_gallery_home_page.png';
import thirdGalleryImg from '../../../shared/img/third_gallery_home_page.png';
import fourthGalleryImg from '../../../shared/img/fourth_gallery_home_page.png';

const GalleryImage = ({ image, onClick }) => (
  <div onClick={onClick} className='w-full'>
    <img
      src={image}
      alt='gallery_image'
      className='w-full h-full border-[2px] border-solid border-gray-500 rounded-[20px] xl:rounded-[20px] tablet:rounded-[10px]'
    />
  </div>
);

const GalleryImageWrapper = ({ image, onClick }) => (
  <GalleryImage image={image} onClick={onClick} />
);

export const GalleryImageSectionGalleryPage = () => {
  const galleryImages = [
    firstGalleryImg,
    secondGalleryImg,
    thirdGalleryImg,
    fourthGalleryImg,
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = image => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className='bg-center max-w-full'>
      <section>
        <section className='max-w-[90%] xl:container items-center mx-auto'>
          <section className='grid grid-cols-2 xl:grid-cols-2 gap-4 mt-[10vh]'>
            {galleryImages.map((image, index) => (
              <GalleryImageWrapper
                key={index}
                image={image}
                onClick={() => handleOpenModal(image)}
              />
            ))}
          </section>
        </section>
      </section>
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          handleCloseModal={handleCloseModal}
        />
      )}
    </section>
  );
};
