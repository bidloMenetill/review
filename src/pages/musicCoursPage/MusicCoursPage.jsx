import React from 'react';
import {
  MusicCoursFirstSection,
  MusicCoursSecondSection,
  MusicCoursSwiperSection,
} from '../../widgets';
import { ServiceFooter } from '../../shared';

export const MusicCoursPage = () => {
  return (
    <>
      <MusicCoursSwiperSection />
      <MusicCoursFirstSection />
      <MusicCoursSecondSection />
      <ServiceFooter
        description={
          'Не жди следующего понедельника, бронируй время в студии уже сейчас!'
        }
        number={'Звонки/WhatsApp +996 700 76 37 36'}
      />
    </>
  );
};
