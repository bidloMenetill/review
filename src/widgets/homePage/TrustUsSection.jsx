import { People } from '../../features';
import firstHuman from '../../shared/img/mirbek_atabekov.png';
import secondHuman from '../../shared/img/dastan_isabaev.png';
import thirdHuman from '../../shared/img/arsen_bakirovich.png';
import bgTrustUs from '../../shared/img/forth_main_bg.jpg';


export const TrustUsSection = () => {
  const peopleData = {
    bg: bgTrustUs,
    h2: 'Нам доверяют',
    firstHuman: firstHuman,
    secondHuman: secondHuman,
    thirdHuman: thirdHuman,
    p1: 'Мирбек Атабеков',
    br1: 'Певец',
    p2: 'Актан Исабаев',
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
