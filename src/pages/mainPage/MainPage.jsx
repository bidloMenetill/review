import { Reserve } from '../../shared';
import {
  IntroductionSection,
  AboutUsSection,
  ServicesSection,
  NewsSection,
  TrustUsSection,
  VideoSection,
} from '../../widgets';
import { GallerySection } from '../../widgets/homePage/GallerySection';
import bgForVideoAndGallery from '../../shared/img/bg_video_gallery.jpg';

export const MainPage = () => {
  return (
    <>
      <IntroductionSection />
      <AboutUsSection />
      <ServicesSection />
      <NewsSection />
      <TrustUsSection />
      <section
        className='bg-center w-full bg-no-repeat bg-cover'
        style={{ backgroundImage: `url(${bgForVideoAndGallery})` }}
      >
        <GallerySection />
        <VideoSection />
      </section>
      <Reserve
        h3='Превзойдите ожидания и создайте свою легенду прямо здесь.'
        p='Превзойдите ожидания и создайте свою легенду прямо здесь. Забронируйте свое место в Q Rush Studio прямо сейчас, нажав на кнопку ниже, или свяжитесь с Вадимом по номеру +996 700 763736.'
      />
    </>
  );
};
