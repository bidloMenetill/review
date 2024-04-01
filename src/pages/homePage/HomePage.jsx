import React from 'react';

import { AdvertisingSection } from '../../shared';
import {
  AboutUsSectionHomePage,
  ServicesSectionHomePage,
  NewsSectionHomePage,
  TrustUsSectionHomePage,
  VideoSectionHomePage,
  GallerySectionHomePage,
  IntroductionSectionHomePage,
} from '../../widgets';
import bgForVideoAndGallery from '../../shared/img/bg_video_gallery.jpg';

export const HomePage = () => {
  return (
    <>
      <section>
        <IntroductionSectionHomePage />
        <AboutUsSectionHomePage />
        <ServicesSectionHomePage />
        <NewsSectionHomePage />
        <TrustUsSectionHomePage />
      </section>
      <section
        className='bg-center w-full bg-no-repeat bg-cover'
        style={{ backgroundImage: `url(${bgForVideoAndGallery})` }}
      >
        <GallerySectionHomePage />
        <VideoSectionHomePage />
        <AdvertisingSection
          title='Не жди следующего понедельника, бронируй время в студии уже сейчас!'
          description='Звонки/WhatsApp +996 700 76 37 36'
        />
      </section>
    </>
  );
};
