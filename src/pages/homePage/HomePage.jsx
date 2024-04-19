import React from 'react';

import { Advertising, useMediaQuery } from '../../shared';
import {
  AboutUsSectionHomePage,
  ServicesSectionHomePage,
  NewsSectionHomePage,
  TrustUsSectionHomePage,
  VideoSectionHomePage,
  GallerySectionHomePage,
  IntroductionSectionHomePage,
  VideoSectionHomePageMobile,
} from '../../widgets';
import bgForVideoAndGallery from '../../shared/img/bg_video_gallery.jpg';

export const HomePage = () => {
  const isMobileAndTablet = useMediaQuery('(max-width: 1026px)');
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
        {isMobileAndTablet ? (
          <VideoSectionHomePageMobile />
        ) : (
          <VideoSectionHomePage />
        )}

        <Advertising
          title='Не жди следующего понедельника, бронируй время в студии уже сейчас!'
          description='Звонки/WhatsApp +996 700 76 37 36'
        />
      </section>
    </>
  );
};
