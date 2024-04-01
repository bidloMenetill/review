import lightFon from '../../../shared/img/TrustUs/lightFon.jpg';
import bakr from '../../../shared/img/TrustUs/bakr.png';
import ulukmanapo from '../../../shared/img/TrustUs/ulukmanapo.png';
import arsen from '../../../shared/img/TrustUs/arsen.png';
import volkodav from '../../../shared/img/TrustUs/volkodav.png';
import lsp from '../../../shared/img/TrustUs/lsp.png';
import pavel from '../../../shared/img/TrustUs/pavel.png';
import zere from '../../../shared/img/TrustUs/zere.png';
import arsen2 from '../../../shared/img/TrustUs/arsen2.png';
import bakr2 from '../../../shared/img/TrustUs/bakr2.png';
import { CelebritiesSection } from '../../../entities';

export const PreviewSectionTrustUs = () => {
  const celebrities = [
    {
      id: 1,
      background: lightFon,
      img: bakr,
      name: 'Бакр',
      role: 'Музыкальный исполнитель',
    },
    {
      id: 2,
      background: lightFon,
      img: ulukmanapo,
      name: 'Улукманапо',
      role: 'Рэп-исполнитель',
    },
    {
      id: 3,
      background: lightFon,
      img: arsen,
      name: 'Арсен',
      role: 'Певец',
    },
    {
      id: 4,
      background: lightFon,
      img: volkodav,
      name: 'Александр Волкодав',
      role: 'Финалист шоу Голос',
    },
    {
      id: 5,
      background: lightFon,
      img: lsp,
      name: 'ЛСП',
      role: '',
    },
    {
      id: 6,
      background: lightFon,
      img: pavel,
      name: '',
      role: `Мастер класс Павла Холодянского барабанщика "Пошлой Молли"`,
    },
    {
      id: 7,
      background: lightFon,
      img: zere,
      name: 'Зере',
      role: `Запись спектакля "Мен Кайдамын"`,
    },
    {
      id: 8,
      background: lightFon,
      img: arsen2,
      name: 'Арсен',
      role: 'Певец',
    },
    {
      id: 9,
      background: lightFon,
      img: bakr2,
      name: 'Бакр',
      role: 'Певец',
    },
  ];
  return (
    <section>
      <div className='bg-cover bg-no-repeat bg-center  bg-[#000] '>
        <CelebritiesSection celebrities={celebrities} />
      </div>
    </section>
  );
};
