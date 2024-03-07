import { Reserve } from '../../shared';
import { AboutUs, WhyQRush, Team } from '../../widgets';


export const About = () => {
  return (
    <div>
      <AboutUs />
      <WhyQRush />
      <Team />
      <Reserve 
        h3="Превзойдите ожидания и создайте свою легенду прямо здесь. "
        p="Превзойдите ожидания и создайте свою легенду прямо здесь. Забронируйте свое место в Q Rush Studio прямо сейчас, нажав на кнопку ниже, или свяжитесь с Вадимом по номеру +996 700 763736."
      />
    </div>
  );
};
