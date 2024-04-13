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

      <Advertising
        title='Не жди следующего понедельника, бронируй время в студии уже сейчас!'
        description='Звонки/WhatsApp +996 700 76 37 36'
      />
    </section>
  );
};
