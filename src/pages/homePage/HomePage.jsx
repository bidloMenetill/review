import React from 'react';

import { Reserve } from '../../shared';
import {
  IntroductionSectionHomePage,
  AboutUsSectionHomePage,
  ServicesSectionHomePage,
  NewsSectionHomePage,
  TrustUsSectionHomePage,
  VideoSectionHomePage,
  GallerySectionHomePage,
} from '../../widgets';

import bgForVideoAndGallery from '../../shared/img/bg_video_gallery.jpg';

export const HomePage = () => {
  return (
    <>
      <IntroductionSectionHomePage />
      <AboutUsSectionHomePage />
      <ServicesSectionHomePage />
      <NewsSectionHomePage />
      <TrustUsSectionHomePage />
      <section
        className='bg-center w-full bg-no-repeat bg-cover'
        style={{ backgroundImage: `url(${bgForVideoAndGallery})` }}
      >
        <GallerySectionHomePage />
        <VideoSectionHomePage />
        <Reserve
          h3='Превзойдите ожидания и создайте свою легенду прямо здесь.'
          p='Превзойдите ожидания и создайте свою легенду прямо здесь. Забронируйте свое место в Q Rush Studio прямо сейчас, нажав на кнопку ниже, или свяжитесь с Вадимом по номеру +996 700 763736.'
        />
      </section>
    </>
  );
};
