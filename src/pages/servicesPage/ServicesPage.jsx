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
      <section className='w-full h-[1080px] mx-auto text-[#f5f5f5] font-montserrat'>
        <Services />
      </section>
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
