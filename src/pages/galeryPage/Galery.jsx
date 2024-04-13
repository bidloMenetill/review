import { Advertising, useMediaQuery } from '../../shared';
import {
  GalleryFirstSectionGalleryPage,
  GalleryImageSectionGalleryPage,
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
      <GalleryVideoSliderSectionGalleryPage />
      <Advertising
        title='Превзойдите ожидания и создайте свою легенду прямо здесь.'
        description='Превзойдите ожидания и создайте свою легенду прямо здесь. Забронируйте свое место в Q Rush Studio прямо сейчас, нажав на кнопку ниже, или свяжитесь с Вадимом по номеру +996 700 763736.'
      />
    </section>
  );
};
