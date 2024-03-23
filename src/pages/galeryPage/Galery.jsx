import { Reserve } from '../../shared';
import {
  GaleryMain,
  ImageSection,
  ThirdVideoSection,
  VideoSlider,
} from '../../widgets';

export const Galery = () => {
  return (
    <>
      <section className=''>
        <GaleryMain />
        <ImageSection />
        <ImageSection />
        <ImageSection />
        <ThirdVideoSection />
        <VideoSlider />
        <Reserve
          h3='Превзойдите ожидания и создайте свою легенду прямо здесь.'
          p='Превзойдите ожидания и создайте свою легенду прямо здесь. Забронируйте свое место в Q Rush Studio прямо сейчас, нажав на кнопку ниже, или свяжитесь с Вадимом по номеру +996 700 763736.'
        />
      </section>
    </>
  );
};
