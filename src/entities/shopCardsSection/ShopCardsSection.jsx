import { Button } from '../../shared';
import drumStick2 from '../../shared/img/shop/drumStick2.png';
import drumStick1 from '../../shared/img/shop/drumStick1.png';
import drumStick3 from '../../shared/img/shop/drumStick3.png';
import drumStick4 from '../../shared/img/shop/drumStick4.png';
import drumStick5 from '../../shared/img/shop/drumStick5.png';

export const ShopCardsSection = () => {
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

  const properties = [
    'length',
    'diameter',
    'tree',
    'weight',
    'versatility',
    'furnish',
    'acornTip',
    'cone',
    'amount',
    'material',
    'different_thickness',
  ];
  return (
    <section>
      <ul className='max-w-[1920px] mx-auto mb-[100px] font-montserrat text-[#E2DED3]'>
        {shopCard?.map(card => (
          <div
            className='relative h-[550px] lg:h-[680px] xl:h-[860px] mt-[100px]'
            key={card.id}
          >
            <li
              className={`max-w-[87.24%] xl:w-[1675px] flex justify-between gap-x-[85px] absolute items-center ${card.id % 2 === 0 ? 'max-w-[89.3%] flex-row-reverse right-0' : ''}`}
            >
              <div>
                <img
                  className='w-[500px] h-[460px] xl:w-[805px] xl:h-[860px] lg:w-[680px] lg:h-[660px]'
                  src={card.img}
                  alt='cardImg'
                />
              </div>
              <div className='w-[405px] xl:w-[705px] lg:w-[555px]'>
                <h2 className='font-bold text-[#E2DED3] text-[30px] lg:text-[40px] xl:text-[50px]'>
                  {card.instrumentName}
                </h2>
                <ul className='text-[24px] lg:text-[27px] xl:text-[30px] font-medium  mt-[30px]'>
                  {properties.map(property => (
                    <li key={property}>
                      <p>{card[property]}</p>
                    </li>
                  ))}
                </ul>
                <div className='w-[434px] lg:w-[555px] xl:w-[674px] flex justify-around items-center mt-[10px] lg:mt-[30px] xl:mt-[50px] gap-x-[3px]'>
                  <p className='font-semibold mt-[20px] text-[26px] lg:text-[27px] xl:text-[30px]'>
                    Цена: {card.price}
                  </p>
                  <Button className='buyButton' />
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
};
