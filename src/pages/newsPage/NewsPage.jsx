import {
  ApplicationSection,
  EventSection,
  FiestSection,
  IntroductionNewsSection,
  SendUpSection,
} from '../../widgets';

export const NewsPage = () => {
  return (
    <section className='flex box-border h-auto m-0 p-0 flex-col mx-[auto] w-[1920px] xl:w-[1720px] tablet:w-[1024px] sm:w-[576px] md:w-[768px] lg:w-[1300px]'>
      <IntroductionNewsSection />
      <FiestSection />
      <EventSection />
      <SendUpSection />
      <ApplicationSection />
    </section>
  );
};
