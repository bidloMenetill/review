import { useTranslation } from 'react-i18next';
import { FormFeedback } from '../../features';
import { Advertising } from '../../shared';
import { AccordionSection } from '../../widgets';

export const FaqPage = () => {
  const { t } = useTranslation();

  return (
    <section className='mx-[auto] mt-[0px] font-montserrat bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#190604] via-[#190604] to-[#000000]'>
      <AccordionSection />
      <FormFeedback />
      <Advertising
        title={t('trustUsPage.fourthSection.title')}
        description={t('trustUsPage.fourthSection.upperTitle')}
      />
    </section>
  );
};
