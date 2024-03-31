import { People } from '../../../features';
import firstStudio from '../../../shared/img/first_studio_main_page.jpg';
import secondStudio from '../../../shared/img/second_studio_main_page.jpg';
import thirdStudio from '../../../shared/img/third_studio_main_page.jpg';
import servicesBg from '../../../shared/img/bg_services_home_page.jpg';

export const ServicesSectionHomePage = () => {
  // FIX ME: описал в компоненте
  const StudioData = {
    background: servicesBg,
    linkAddress: '/services',
    title: 'Наши Услуги',
    firstImg: firstStudio,
    secondImg: secondStudio,
    thirdImg: thirdStudio,
    firstSubTitle: 'Репетиционная База',
    secondSubTitle: 'Студия Звукозаписи',
    thirdSubTitle: 'Музыкальные Курсы',
  };
  return (
    <>
      <People {...StudioData} />
    </>
  );
};
