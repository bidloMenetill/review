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
      {musicCourceData?.map(item => (
        <div key={item.id}>
          <MusicCoursesSwiperSection item={item} />
          <MusicCoursesFirstSection item={item} />
        </div>
      ))}
      <Advertising />
    </>
  );
};
