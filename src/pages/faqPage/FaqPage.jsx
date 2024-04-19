import { FormFeedback } from '../../features';
import { Advertising } from '../../shared';
import { AccordionSection } from '../../widgets';

export const FaqPage = () => {
  return (
    <section className='mx-[auto] mt-[0px] font-montserrat bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#190604] via-[#190604] to-[#000000]'>
      <AccordionSection />
      <FormFeedback />
      <Advertising />
    </section>
  );
};
