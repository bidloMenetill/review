import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  MusicCoursFirstSection,
  MusicCoursSecondSection,
  MusicCoursSwiperSection,
} from '../../widgets';
import { Advertising } from '../../shared';

export const MusicCoursPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <MusicCoursSwiperSection />
      <MusicCoursFirstSection />
      <MusicCoursSecondSection />
      <Advertising
        title={t('trustUsPage.fourthSection.title')}
        description={t('trustUsPage.fourthSection.upperTitle')}
      />
    </>
  );
};
