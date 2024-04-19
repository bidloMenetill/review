import { useEffect } from 'react';
// import lightFon from '../../../shared/img/TrustUs/lightFon.jpg';
// import bakr from '../../../shared/img/TrustUs/bakr.png';
// import ulukmanapo from '../../../shared/img/TrustUs/ulukmanapo.png';
// import arsen from '../../../shared/img/TrustUs/arsen.png';
// import volkodav from '../../../shared/img/TrustUs/volkodav.png';
// import lsp from '../../../shared/img/TrustUs/lsp.png';
// import pavel from '../../../shared/img/TrustUs/pavel.png';
// import zere from '../../../shared/img/TrustUs/zere.png';
// import arsen2 from '../../../shared/img/TrustUs/arsen2.png';
// import bakr2 from '../../../shared/img/TrustUs/bakr2.png';
import { useZustandStore } from '../../../app/store/store';
import { CelebritiesSection } from '../../../entities';

export const PreviewSectionTrustUs = () => {
  const { getTrustUsCelebrities, celebrities } = useZustandStore();
  useEffect(() => {
    getTrustUsCelebrities();
  }, []);
  console.log(celebrities);
  // const celebrities = [
  //   {
  //     id: 1,
  //     background: lightFon,
  //     image: bakr,
  //     first_name_ru: 'Бакр',
  //     last_name_ru: 'Бакр',
  //     role_ru: 'Музыкальный исполнитель',
  //   },
  //   {
  //     id: 2,
  //     background: lightFon,
  //     image: ulukmanapo,
  //     first_name_ru: 'Улукманапо',
  //     last_name_ru: 'Улукманапо',
  //     role_ru: 'Рэп-исполнитель',
  //   },
  //   {
  //     id: 3,
  //     background: lightFon,
  //     image: arsen,
  //     first_name_ru: 'Арсен',
  //     last_name_ru: 'Арсен',
  //     role_ru: 'Певец',
  //   },
  //   {
  //     id: 4,
  //     background: lightFon,
  //     image: volkodav,
  //     first_name_ru: 'Александр',
  //     last_name_ru: 'Волкодав',
  //     role_ru: 'Финалист шоу Голос',
  //   },
  //   {
  //     id: 5,
  //     background: lightFon,
  //     image: lsp,
  //     first_name_ru: 'ЛСП',
  //     last_name_ru: 'ЛСП',
  //     role_ru: '',
  //   },
  //   {
  //     id: 6,
  //     background: lightFon,
  //     image: pavel,
  //     first_name_ru: 'Павел',
  //     last_name_ru: 'Холодянский',
  //     role_ru: `Мастер класс Павла Холодянского барабанщика "Пошлой Молли"`,
  //   },
  //   {
  //     id: 7,
  //     background: lightFon,
  //     image: zere,
  //     first_name_ru: 'Зере',
  //     last_name_ru: 'Зере',
  //     role_ru: `Запись спектакля "Мен Кайдамын"`,
  //   },
  //   {
  //     id: 8,
  //     background: lightFon,
  //     image: arsen2,
  //     first_name_ru: 'Арсен',
  //     last_name_ru: 'Арсен',
  //     role_ru: 'Певец',
  //   },
  //   {
  //     id: 9,
  //     background: lightFon,
  //     image: bakr2,
  //     first_name_ru: 'Бакр',
  //     last_name_ru: 'Бакр',
  //     role_ru: 'Певец',
  //   },
  // ];
  return (
    <section>
      <div className='bg-cover bg-no-repeat bg-center  bg-[#000] '>
        <CelebritiesSection celebrities={celebrities} />
      </div>
    </section>
  );
};
