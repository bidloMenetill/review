import {
  RehearsalCost,
  Welcome,
  ServiceOrder,
  Services,
  SoundRecording,
  RehearsalSecondCost,
  RehearsalThirdCost,
  MusicCours,
  SecondMusicCours,
} from '../../widgets';

export const ServicesPage = () => {
  return (
    <>
      <Services />
      <Welcome />
      <SoundRecording />
      <RehearsalCost />
      <RehearsalSecondCost />
      <RehearsalThirdCost />
      <MusicCours />
      <SecondMusicCours />

      <ServiceOrder />
    </>
  );
};
