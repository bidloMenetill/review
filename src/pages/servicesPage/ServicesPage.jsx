import { ServiceFooter } from '../../shared';
import { WelcomeSection, ServiceSection, ServiceLinks } from '../../widgets';

export const ServicesPage = () => {
  return (
    <>
      <ServiceSection />
      <WelcomeSection />
      <ServiceLinks />
      <ServiceFooter
        description={
          'Не жди следующего понедельника, бронируй время в студии уже сейчас!'
        }
        number={'Звонки/WhatsApp +996 700 76 37 36'}
      />
    </>
  );
};
