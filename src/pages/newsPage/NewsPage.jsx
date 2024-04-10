import {
  // ApplicationSectionNewsPage,
  FeastSectionNewsPage,
  IntroductionSectionNewsPage,
  EventSectionNewsPage,
  // SendUpSectionNewsPage,
} from '../../widgets';

export const NewsPage = () => {
  return (
    <section className='flex box-border h-auto m-0 p-0 flex-col max-w-[1920px] mx-auto'>
      <IntroductionSectionNewsPage />
      <FeastSectionNewsPage />
      <EventSectionNewsPage />
      {/* <SendUpSectionNewsPage />
      <ApplicationSectionNewsPage /> */}
    </section>
  );
};
