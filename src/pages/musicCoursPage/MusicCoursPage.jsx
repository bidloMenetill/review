import React from 'react';
import {
  MusicCoursFirstSection,
  MusicCoursSecondSection,
  MusicCoursSwiperSection,
} from '../../widgets';
import { Advertising } from '../../shared';

export const MusicCoursPage = () => {
  return (
    <>
      <MusicCoursSwiperSection />
      <MusicCoursFirstSection />
      <MusicCoursSecondSection />
      <Advertising />
    </>
  );
};
