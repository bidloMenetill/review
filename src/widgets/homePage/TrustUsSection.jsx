import { People } from '../../features';
import firstHuman from '../../shared/img/ylykmanapo.png';
import secondHuman from '../../shared/img/bakr.png';
import thirdHuman from '../../shared/img/arsen_bakirovich.png';
import bgTrustUs from '../../shared/img/forth_main_bg.jpg';


export const TrustUsSection = () => {
  const peopleData = {
    bg: bgTrustUs,
    to: '/trustus',
    h2: 'Нам доверяют',
    firstHuman: firstHuman,
    secondHuman: secondHuman,
    thirdHuman: thirdHuman,
    p1: 'Улукманапо',
    br1: 'Рэп-исполнитель',
    p2: 'Бакр',
    br2: 'Певец',
    p3: 'Арсен Бакирович',
    br3: 'Певец',
  };

  return (
    <>
      <People {...peopleData} />
    </>
  );
};
