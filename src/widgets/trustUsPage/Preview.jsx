import lightFon from '../../shared/img/trustUs/lightFon.jpg';
import bakr from '../../shared/img/trustUs/bakr.png';
import ulukmanapo from '../../shared/img/trustUs/ulukmanapo.png';
import arsen from '../../shared/img/trustUs/arsen.png';
import volkodav from '../../shared/img/trustUs/volkodav.png';
import lsp from '../../shared/img/trustUs/lsp.png';
import pavel from '../../shared/img/trustUs/pavel.png';
import zere from '../../shared/img/trustUs/zere.png';
import { useMediaQuery } from '../../shared';

export const Preview = () => {
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
  ];

  const isWideScreen1 = useMediaQuery(
    '(min-width: 1620px) and (max-width:1820px)'
  );
  const isWideScreen2 = useMediaQuery(
    '(min-width: 1320px) and (max-width:1620px)'
  );
  const isWideScreen3 = useMediaQuery(
    '(min-width: 1024px) and (max-width:1320px)'
  );

  return (
    <div
      className={`bg-cover bg-no-repeat bg-center  bg-[#000] ${isWideScreen1 ? 'h-[2612px]' : isWideScreen2 ? 'h-[2212px]' : isWideScreen3 ? 'h-[1912px]' : 'h-[2812px]'}`}
    >
      <ul
        className={`container flex flex-wrap text-[#f5f5f5] gap-x-[20px] gap-y-[100px] ${isWideScreen1 ? 'w-[1420px]' : isWideScreen2 ? 'w-[1220px]' : isWideScreen3 ? 'w-[920px]' : ''}`}
      >
        {celebrities.map((celeb, index) => (
          <li
            className={`bg-cover bg-no-repeat bg-center flex justify-center  ${isWideScreen1 ? 'w-[460px] h-[560px] rounded-[30px]' : isWideScreen2 ? 'w-[390px] h-[490px] rounded-[20px]' : isWideScreen3 ? 'w-[290px] h-[395px] rounded-[10px]' : ' w-[560px] h-[660px] rounded-[30px]'}`}
            style={{ backgroundImage: `url(${celeb.background})` }}
            key={celeb.id}
          >
            <img
              className={`mt-[20px] ${isWideScreen1 ? 'w-[420px] h-[393px]' : isWideScreen2 ? 'w-[320px] h-[293px] rounded-[20px]' : isWideScreen3 ? 'w-[220px] h-[193px] rounded-[10px]' : 'w-[520px] h-[493px] rounded-[30px]'}`}
              src={celeb.img}
              alt='celebImg'
            />
            <div
              className={`h-[91px] absolute text-center text-[30px] font-bold  ${isWideScreen1 ? 'w-[281px] mt-[433px]' : isWideScreen2 ? 'w-[181px] mt-[333px]' : isWideScreen3 ? 'w-[131px] mt-[233px]' : 'w-[381px] mt-[533px]'}`}
            >
              <h4
                className={`font-bold font-montserrat ${isWideScreen1 ? 'text-[28px]' : isWideScreen2 ? 'text-[25px]' : isWideScreen3 ? 'text-[22px]' : 'text-[30px]'}`}
              >
                {celeb.name}
              </h4>
              <p
                className={`font-bold font-montserrat ${isWideScreen1 ? 'w-[280px] text-[20px]' : isWideScreen2 ? 'w-[180px] text-[19px]' : isWideScreen3 ? 'w-[130px] text-[18px]' : 'w-[380px] text-[20px]'}`}
              >
                {celeb.role}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
