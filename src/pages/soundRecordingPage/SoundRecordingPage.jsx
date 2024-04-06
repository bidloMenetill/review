import React from 'react';
import { SoundRecordingSection, SoundSwiperSection } from '../../widgets';
import { ServiceFooter } from '../../shared';

export const SoundRecordingPage = () => {
  return (
    <>
      <SoundSwiperSection />
      <SoundRecordingSection />
      <ServiceFooter
        description={
          'Не жди следующего понедельника, бронируй время в студии уже сейчас!'
        }
        number={'Звонки/WhatsApp +996 700 76 37 36'}
      />
    </>
  );
};
