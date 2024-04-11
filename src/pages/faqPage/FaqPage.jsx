import { FormFeedback } from '../../features';
import { ServiceFooter } from '../../shared';
import { AccordionSection } from '../../widgets';
// import { photo } from '../../shared/img/'

export const FaqPage = () => {
  return (
    <section className='mx-[auto] -mt-[0px] pt-[120px] h-auto font-montserrat sm:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] sm:from-[#190604] sm:via-[#190604] sm:to-[#000000] bg-[url("../../shared/img/bgIphone.png")] bg-no-repeat bg-cover '>
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
