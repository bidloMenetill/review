import React from 'react';

import { AdvertisingSection } from '../../shared';
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
        <AdvertisingSection
          title='Не жди следующего понедельника, бронируй время в студии уже сейчас!'
          description='Звонки/WhatsApp +996 700 76 37 36'
        />
      </section>
    </>
  );
};
