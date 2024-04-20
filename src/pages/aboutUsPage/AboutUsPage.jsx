import { Advertising } from '../../shared';
import {
  WhyQRushSection,
  Team,
  IntrodactionSectionAboutUs,
} from '../../widgets';

export const AboutUsPage = () => {
  return (
    <section className='bg-[#020202] bg-[url("/src/shared/img/aboutMobile/bg_about.png")] bg-no-repeat sm:bg-no-repeat sm:bg-[url("/src/shared/img/about/aboutUs.png")] max-w-[1920px] flex flex-col mx-auto'>
      <IntrodactionSectionAboutUs />
      <WhyQRushSection />
      <Team />
      <Advertising />
    </section>
  );
};
