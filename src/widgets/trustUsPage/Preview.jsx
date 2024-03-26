import lightFon from '../../shared/img/TrustUs/lightFon.jpg';
import bakr from '../../shared/img/TrustUs/bakr.png';
import ulukmanapo from '../../shared/img/TrustUs/ulukmanapo.png';
import arsen from '../../shared/img/TrustUs/arsen.png';
import volkodav from '../../shared/img/TrustUs/volkodav.png';
import lsp from '../../shared/img/TrustUs/lsp.png';
import pavel from '../../shared/img/TrustUs/pavel.png';
import zere from '../../shared/img/TrustUs/zere.png';

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
  return (
    <div className='bg-cover bg-no-repeat bg-center  bg-[#000] h-[2000px] lg:h-[2812px]'>
      <ul className='max-w-[90%] xl:container mx-auto flex justify-evenly flex-wrap text-[#f5f5f5] gap-x-[20px] gap-y-[100px]  '>
        {celebrities.map((celeb, index) => (
          <li
            className='w-[288px] h-[430px] xl:w-[560px] xl:h-[660px] lg:w-[376px] lg:h-[540px] flex justify-center rounded-[20px] lg:rounded-[30px]'
            style={{ backgroundImage: `url(${celeb.background})` }}
            key={celeb.id}
          >
            <img
              className='w-[266px] h-[293px] mx-auto xl:w-[520px] xl:h-[493px] lg:w-[356px] lg:h-[393px] rounded-[10px] lg:rounded-[30px] mt-[20px]'
              src={celeb.img}
              alt='celebImg'
            />
            <div className='w-[281px] lg:w-[381px] absolute text-center font-bold mt-[333px] xl:mt-[533px] lg:mt-[433px]'>
              <h4 className='font-bold font-montserrat text-[24px] lg:text-[27px] xl:text-[30px]'>
                {celeb.name}
              </h4>
              <p className='lg:w-[370px] text-[18px] lg:text-[20px] font-bold font-montserrat '>
                {celeb.role}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
