import { Advertising } from '../../shared';
import {
  GalleryFirstSectionGalleryPage,
  GalleryImageSectionGalleryPage,
  GallerySecondSectionGalleryPage,
  GalleryVideoSectionGalleryPage,
  GalleryVideoSliderSectionGalleryPage,
} from '../../widgets';

export const Galery = () => {
  return (
    <section>
      <GalleryFirstSectionGalleryPage />
      <GallerySecondSectionGalleryPage />
      <GalleryImageSectionGalleryPage />
      <GalleryVideoSectionGalleryPage />
      <GalleryVideoSliderSectionGalleryPage />
      <Advertising
        h3='Превзойдите ожидания и создайте свою легенду прямо здесь.'
        p='Превзойдите ожидания и создайте свою легенду прямо здесь. Забронируйте свое место в Q Rush Studio прямо сейчас, нажав на кнопку ниже, или свяжитесь с Вадимом по номеру +996 700 763736.'
      />
    </section>
  );
};
