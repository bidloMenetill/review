import { SectionGroup } from '../../../features';
import firstStudio from '../../../shared/img/first_studio_main_page.jpg';
import secondStudio from '../../../shared/img/second_studio_main_page.jpg';
import thirdStudio from '../../../shared/img/third_studio_main_page.jpg';
import servicesBg from '../../../shared/img/bg_services_home_page.jpg';
import { useMediaQuery } from '../../../shared';
import { SectionGroupMobile } from '../../../features/sectionGroups/sectionGroupMobile/SectionGroupMobile';

export const ServicesSectionHomePage = () => {
  const isMobile = useMediaQuery('(max-width: 576px)');
  const studioData = {
    background: servicesBg,
    linkAddress: '/services',
    title: 'Услуги',
    firstImg: firstStudio,
    secondImg: secondStudio,
    thirdImg: thirdStudio,
    firstSubTitle: 'Репетиционная База',
    secondSubTitle: 'Студия Звукозаписи',
    thirdSubTitle: 'Музыкальные Курсы',
  };
  return (
    <>
      {isMobile ? (
        <SectionGroupMobile {...studioData} />
      ) : (
        <SectionGroup {...studioData} />
      )}
    </>
  );
};
