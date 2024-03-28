import { Button } from '../../shared';
import drumStick1 from '../../shared/img/shop/drumStick1.png';
import drumStick2 from '../../shared/img/shop/drumStick2.png';
import drumStick3 from '../../shared/img/shop/drumStick3.png';
import drumStick4 from '../../shared/img/shop/drumStick4.png';
import drumStick5 from '../../shared/img/shop/drumStick5.png';

export const ShopCards = () => {
  const shopCard = [
    {
      id: 1,
      img: drumStick1,
      instrumentName: 'Барабанные палочки Wincent/ Серия 5B',
      length: 'Длина: 406 мм / 16 дюймов',
      diameter: 'Диаметр: 15 мм / 0,591″',
      tree: 'Дерево: Гикори',
      versatility: 'Уникальная восковая защита',
      acornTip: 'AcornTip: Насыщенный звук тарелок.',
      cone: 'Стандартный конус: тяжелая передняя часть. Хороший удар',
      price: '1000сом',
    },
    {
      id: 2,
      img: drumStick2,
      instrumentName: 'Барабанные палочки ProMark Forward 5B',
      length: 'Длина: 406,4 мм / 16 дюймов',
      diameter: 'Диаметр: 15 мм / 0,590 дюймов',
      tree: 'Дерево: Гикори',
      versatility: 'Форма кончика: Овальная',
      furnish: 'Отделка : Лак',
      acornTip: 'AcornTip: Насыщенный звук тарелок.',
      cone: 'Конус: Короткий .Хороший удар',
      price: '1300сом',
    },
    {
      id: 3,
      img: drumStick3,
      instrumentName: 'Барабанные палочки Wincent Dynabeat 5B',
      length: 'Длина: 406 мм / 16 дюймов',
      diameter: 'Диаметр: 15 мм / 0,591 дюймов',
      tree: 'Дерево: Гикори',
      versatility: 'Уникальная восковая защита',
      acornTip: 'AcornTip: Насыщенный звук тарелок.',
      cone: 'Стандартный конус: тяжелая передняя часть. Хороший удар',
      price: '800сом',
    },
    {
      id: 4,
      img: drumStick4,
      instrumentName: 'Барабанные палочки Millenium 7A',
      length: 'Длина: 393 мм',
      diameter: 'Диаметр: 14,0 мм ',
      tree: 'Дерево: Клен',
      weight: 'Вес: 37,5 г',
      versatility: 'Уникальная восковая защита',
      acornTip: 'AcornTip: Насыщенный звук тарелок.',
      price: '500сом',
    },
    {
      id: 5,
      img: drumStick5,
      instrumentName: 'Нейлоновый комплект медиаторов, смешанный Harley Benton',
      amount: 'C 12 шт',
      material: 'Материал: Нейлон',
      different_thickness:
        'Разная толщина:  2 шт. 0,46 мм, 0,71 мм, 0,81 мм, 0,96 мм, 1,2 мм, 1,5 мм.',
      price: '50сом/шт',
    },
  ];

  return (
    <ul className='max-w-[1920px] mx-auto mb-[100px] font-[montserrat] text-[#E2DED3]'>
      {shopCard.map(card => (
        <div key={card.id}>
          {card.id % 2 === 0 ? (
            <li
              className='max-w-[89.3%] xl:max-w-[1715px] ml-[130px] xl:ml-[245px] lg:ml-[170px] flex justify-between mt-[100px] text-[#E2DED3] gap-x-[30px] items-center '
              key={card.id}
            >
              <div className='w-[405px] xl:w-[705px] lg:w-[555px]'>
                <h2 className='font-bold text-[#E2DED3] text-[30px] lg:text-[40px] xl:text-[50px]'>
                  {card.instrumentName}
                </h2>
                <ul className='text-[22px] lg:text-[27px] xl:text-[30px] font-medium  mt-[30px]'>
                  <li>{card.length}</li>
                  <li>{card.diameter}</li>
                  <li>{card.tree}</li>
                  <li>{card.weight}</li>
                  <li>{card.versatility}</li>
                  <li>{card.furnish}</li>
                  <li>{card.acornTip}</li>
                  <li>{card.cone}</li>
                  <li>{card.amount}</li>
                  <li>{card.material}</li>
                  <li>{card.different_thickness}</li>
                </ul>
                <div className='w-[434px] lg:w-[555px] xl:w-[674px] flex justify-around items-center mt-[10px] lg:mt-[30px] xl:mt-[50px] '>
                  <p className='font-semibold mt-[20px] text-[26px] lg:text-[30px]'>
                    Цена: {card.price}
                  </p>
                  <Button className='buyButton' />
                </div>
              </div>
              <div>
                <img
                  className='w-[500px] h-[550px] xl:w-[805px] xl:h-[860px] lg:w-[680px] lg:h-[710px]'
                  src={card.img}
                  alt='cardImg'
                />
              </div>
            </li>
          ) : (
            <li
              className='max-w-[87.24%] xl:w-[1675px] left-0 flex justify-between mt-[100px] gap-x-[30px] items-center '
              key={card.id}
            >
              <div>
                <img
                  className='w-[500px] h-[550px] xl:w-[805px] xl:h-[860px] lg:w-[680px] lg:h-[710px]'
                  src={card.img}
                  alt='cardImg'
                />
              </div>
              <div className='w-[405px] xl:w-[705px] lg:w-[555px]'>
                <h2 className='font-bold text-[#E2DED3] text-[30px] lg:text-[40px] xl:text-[50px]'>
                  {card.instrumentName}
                </h2>
                <ul className='text-[24px] lg:text-[27px] xl:text-[30px] font-medium  mt-[30px]'>
                  <li>{card.length}</li>
                  <li>{card.diameter}</li>
                  <li>{card.tree}</li>
                  <li>{card.weight}</li>
                  <li>{card.versatility}</li>
                  <li>{card.furnish}</li>
                  <li>{card.acornTip}</li>
                  <li>{card.cone}</li>
                  <li>{card.amount}</li>
                  <li>{card.material}</li>
                  <li>{card.different_thickness}</li>
                </ul>
                <div className='w-[434px] lg:w-[555px] xl:w-[674px] flex justify-around items-center mt-[10px] lg:mt-[30px] xl:mt-[50px]'>
                  <p className='font-semibold mt-[20px] text-[26px] lg:text-[30px]'>
                    Цена: {card.price}
                  </p>
                  <Button className='buyButton' />
                </div>
              </div>
            </li>
          )}
        </div>
      ))}
    </ul>
  );
};
