import { FormFeedback } from '../../features';
import { ServiceFooter } from '../../shared';
import { AccordionSection } from '../../widgets';

export const FaqPage = () => {
  return (
    <section className='mx-[auto] -mt-[0px] pt-[120px] h-auto font-montserrat bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#190604] via-[#190604] to-[#000000]'>
      <AccordionSection />
      <FormFeedback />
      <ServiceFooter
        description={
          'Не жди следующего понедельника, бронируй время в студии уже сейчас!s'
        }
        number={'Звонки/WhatsApp +996 700 76 37 36'}
      />
    </section>
  );
};
