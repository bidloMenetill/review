import { FormFeedback } from '../../features';
import { AccordionSection } from '../../widgets';

export const FaqPage = () => {
  return (
    <section className='mx-[auto] -mt-[0px] pt-[120px] h-auto bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#190604] via-[#190604] to-[#000000] font-montserrat'>
      <AccordionSection />
      <FormFeedback />
    </section>
  );
};
