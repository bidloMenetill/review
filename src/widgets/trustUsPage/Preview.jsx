import lightFon from '../../shared/img/trustUs/lightFon.jpg';
import bakr from '../../shared/img/trustUs/bakr.png';
import ulukmanapo from '../../shared/img/trustUs/ulukmanapo.png';
import arsen from '../../shared/img/trustUs/arsen.png';
import volkodav from '../../shared/img/trustUs/volkodav.png';
import lsp from '../../shared/img/trustUs/lsp.png';
import pavel from '../../shared/img/trustUs/pavel.png';
import zere from '../../shared/img/trustUs/zere.png';

export const Preview = () => {
  const celebrities = [
    {
      background: lightFon,
      img: bakr,
      name: 'Бакр',
      role: 'Музыкальный исполнитель',
    },
    {
      background: lightFon,
      img: ulukmanapo,
      name: 'Улукманапо',
      role: 'Рэп-исполнитель',
    },
    {
      background: lightFon,
      img: arsen,
      name: 'Арсен',
      role: 'Певец',
    },
    {
      background: lightFon,
      img: volkodav,
      name: 'Александр Волкодав',
      role: 'Финалист шоу Голос',
    },
    {
      background: lightFon,
      img: lsp,
      name: 'ЛСП',
      role: '',
    },
    {
      background: lightFon,
      img: pavel,
      name: '',
      role: `Мастер класс Павла Холодянского барабанщика "Пошлой Молли"`,
    },
    {
      background: lightFon,
      img: zere,
      name: 'Зере',
      role: `Запись спектакля "Мен Кайдамын"`,
    },
  ];
  return (
    <div className='bg-cover bg-no-repeat bg-center h-[2812px] bg-[#000]'>
      <div className='w-[1720px] mx-auto flex flex-wrap text-[#f5f5f5] gap-x-[20px] gap-y-[100px]'>
        {celebrities.map((celeb, index) => (
          <div
            className='bg-cover bg-no-repeat bg-center w-[560px] h-[660px] flex justify-center rounded-[30px] '
            style={{ backgroundImage: `url(${celeb.background})` }}
          >
            <img
              className='w-[520px] h-[493px] mt-[20px] rounded-[30px]'
              src={celeb.img}
              alt='bakr'
            />
            <div className='w-[381px] h-[91px] absolute text-center text-[30px] font-bold mt-[533px]'>
              <h4 className='text-[30px] font-bold font-montserrat'>
                {celeb.name}
              </h4>
              <p className='w-[380px] text-[20px] font-bold font-montserrat'>
                {celeb.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
