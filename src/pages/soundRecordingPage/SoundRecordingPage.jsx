import React from 'react';
import { useTranslation } from 'react-i18next';
import { SoundRecordingSection, SoundSwiperSection } from '../../widgets';
import { Advertising } from '../../shared';

export const SoundRecordingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <SoundSwiperSection />
      <SoundRecordingSection />
      <Advertising
        title={t('trustUsPage.fourthSection.title')}
        description={t('trustUsPage.fourthSection.upperTitle')}
      />
    </>
  );
};
