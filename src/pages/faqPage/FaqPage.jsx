import { FormFeedback } from '../../features';
import { AccordionSection } from '../../widgets';

export const FaqPage = () => {
  return (
    <section className='mx-[auto] -mt-[0px] pt-[120px] h-auto font-montserrat sm:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] sm:from-[#190604] sm:via-[#190604] sm:to-[#000000] bg-[url("../../shared\img\bgIphone.png")] bg-no-repeat bg-cover '>
      <AccordionSection />
      <FormFeedback />
    </section>
  );
};
