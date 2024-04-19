import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  MusicCoursesFirstSection,
  MusicCoursesSecondSection,
  MusicCoursesSwiperSection,
} from '../../widgets';
import { Advertising } from '../../shared';

export const MusicCoursesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <MusicCoursesSwiperSection />
      <MusicCoursesFirstSection />
      <MusicCoursesSecondSection />
      <Advertising
        title={t('trustUsPage.fourthSection.title')}
        description={t('trustUsPage.fourthSection.upperTitle')}
      />
    </>
  );
};
