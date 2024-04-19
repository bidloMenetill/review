import { Advertising, useMediaQuery } from '../../shared';
import {
  GalleryFirstSectionGalleryPage,
  GalleryImageSectionGalleryPage,
  GalleryMobileVideoSection,
  GallerySecondSectionGalleryPage,
  GalleryVideoSectionGalleryPage,
  GalleryVideoSliderSectionGalleryPage,
} from '../../widgets';

export const Galery = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return (
    <section className='w-full bg-center'>
      <GalleryFirstSectionGalleryPage />

      <GalleryImageSectionGalleryPage />
      {isMobile ? (
        <GalleryImageSectionGalleryPage />
      ) : (
        <GallerySecondSectionGalleryPage />
      )}
      <GalleryVideoSectionGalleryPage />
      {isMobile ? (
        <GalleryMobileVideoSection />
      ) : (
        <GalleryVideoSliderSectionGalleryPage />
      )}

      <Advertising />
    </section>
  );
};
