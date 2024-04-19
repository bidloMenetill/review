import drumStick2 from '../../shared/img/shop/drumStick2.png';
import drumStick1 from '../../shared/img/shop/drumStick1.png';
import drumStick3 from '../../shared/img/shop/drumStick3.png';
import drumStick4 from '../../shared/img/shop/drumStick4.png';
import drumStick5 from '../../shared/img/shop/drumStick5.png';
import { CardsSwiperShopCardsSection } from './cardsSwiperShopCardsSection/CardsSwiperShopCardsSection';

export const SwiperShopCardsSection = () => {
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
      <ul
        className={` max-w-[1920px] overflow-hidden mx-auto mb-[100px]  font-montserrat text-[#E2DED3] bg-cover bg-no-repeat bg-center`}
      >
        {shopCard?.map(card => (
          <li key={card.id}>
            <CardsSwiperShopCardsSection card={card} properties={properties} />
          </li>
        ))}
      </ul>
    </section>
  );
};
