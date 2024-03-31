import {
  RehearsalCostSection,
  WelcomeSection,
  ServiceOrderSection,
  ServiceSection,
  SoundRecordingSection,
  RehearsalSecondCostSection,
  RehearsalThirdCostSection,
  MusicCoursSection,
  SecondMusicCoursSection,
} from '../../widgets';

export const ServicesPage = () => {
  return (
    <>
      <ServiceSection />
      <WelcomeSection />
      <SoundRecordingSection />
      <RehearsalCostSection />
      <RehearsalSecondCostSection />
      <RehearsalThirdCostSection />
      <MusicCoursSection />
      <SecondMusicCoursSection />
      <ServiceOrderSection />
    </>
  );
};
