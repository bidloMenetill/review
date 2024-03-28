import {
  ApplicationSection,
  EventSection,
  FiestSection,
  IntroductionNewsSection,
  SendUpSection,
} from '../../widgets';

export const NewsPage = () => {
  return (
    <section className='flex box-border m-0 p-0 flex-col mx-[auto] w-[1920px]'>
      <IntroductionNewsSection />
      <FiestSection />
      <EventSection />
      <SendUpSection />
      <ApplicationSection />
    </section>
  );
};
