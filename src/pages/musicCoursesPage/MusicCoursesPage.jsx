import React, { useEffect } from 'react';
import {
  MusicCoursesFirstSection,
  MusicCoursesSwiperSection,
} from '../../widgets';
import { Advertising } from '../../shared';
import { useZustandStore } from '../../app/store/store';

export const MusicCoursesPage = () => {
  const { getMusicCourcePage, musicCourceData } = useZustandStore();
  useEffect(() => {
    getMusicCourcePage();
  }, []);
  return (
    <>
      <MusicCoursesSwiperSection />
      {musicCourceData?.map(item => (
        <div key={item.id}>
          <MusicCoursesFirstSection item={item} />
        </div>
      ))}
      <Advertising />
    </>
  );
};
