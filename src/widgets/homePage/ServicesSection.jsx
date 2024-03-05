import { People } from '../../features';
import firstStudio from '../../shared/img/first_studio_main_page.jpg';
import secondStudio from '../../shared/img/second_studio_main_page.jpg';
import thirdStudio from '../../shared/img/third_studio_main_page.jpg';


export const ServicesSection = () => {
  const StudioData = {
    h2: 'Услуги',
    firstHuman: firstStudio,
    secondHuman: secondStudio,
    thirdHuman: thirdStudio,
    p1: 'Репетиционная База',

    p2: 'Студия Звукозаписи',

    p3: 'Музыкальные Курсы',
  };
  return (
    <>
      <People {...StudioData} />
    </>
  );
};
