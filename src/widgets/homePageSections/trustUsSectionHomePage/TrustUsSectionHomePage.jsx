import { People } from '../../../features';
import firstSinger from '../../../shared/img/ylykmanapo.png';
import secondSinger from '../../../shared/img/bakr.png';
import thirdSinger from '../../../shared/img/arsen_bakirovich.png';
import bgTrustUs from '../../../shared/img/forth_main_bg.jpg';

export const TrustUsSectionHomePage = () => {
  const peopleData = {
    background: bgTrustUs,
    linkAddress: '/trustus',
    title: 'Нам доверяют',
    firstImg: firstSinger,
    secondImg: secondSinger,
    thirdImg: thirdSinger,
    firstSubTitle: 'Улукманапо',
    firstDescription: 'Рэп-исполнитель',
    secondSubTitle: 'Бакр',
    secondDescription: 'Певец',
    thirdSubTitle: 'Арсен Бакирович',
    thirdDescription: 'Певец',
  };

  return (
    <>
      <People {...peopleData} />
    </>
  );
};
