import { useTranslation } from 'react-i18next';
import { Reserve } from '../../shared';
import { AboutUs, WhyQRush, Team } from '../../widgets';


export const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <AboutUs />
      <WhyQRush />
      <Team />
      <Reserve
        // h3="Превзойдите ожидания и создайте свою легенду прямо здесь. "
        h3={t('aboutUs.fourthSection.title')}
        // p="Превзойдите ожидания и создайте свою легенду прямо здесь. Забронируйте свое место в Q Rush Studio прямо сейчас, нажав на кнопку ниже, или свяжитесь с Вадимом по номеру +996 700 763736."
        p={t('aboutUs.fourthSection.upperTitle')}
      />
    </div>
  );
};
