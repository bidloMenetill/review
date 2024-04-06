import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Button, Input, useMediaQuery } from '../../shared';
import drumStick2 from '../../shared/img/shop/drumStick2.png';
import drumStick1 from '../../shared/img/shop/drumStick1.png';
import drumStick3 from '../../shared/img/shop/drumStick3.png';
import drumStick4 from '../../shared/img/shop/drumStick4.png';
import drumStick5 from '../../shared/img/shop/drumStick5.png';
import filter from '../../shared/img/shop/filter.svg';

export const ShopCardsSection = () => {
  const isMobile = useMediaQuery('(min-width: 450px) and (max-width: 575px)');
  const shopCard = [
    {
      id: 1,
      img: [drumStick1, drumStick2, drumStick3],
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
      img: [drumStick2, drumStick1],
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
      img: [drumStick3],
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
      img: [drumStick4],
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
      img: [drumStick5],
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
        className={` max-w-[1920px] mx-auto mb-[100px]  font-montserrat text-[#E2DED3] bg-cover bg-no-repeat bg-center ${window.innerWidth <= 768 ? 'bg-[url("/src/shared/img/shop/bgShopCards.jpg")] bg-cover bg-no-repeat bg-center' : ''}`}
      >
        <div className='max-w-[90%] mx-auto pt-[30px] flex justify-center'>
          <Input variant={'filterInput'} />
          <img
            className='w-[50px] h-[40px] ml-[18px]'
            src={filter}
            alt='filter'
          />
        </div>
        {shopCard?.map(card => (
          <div
            className={`h-[268px] mt-[40px] mx-auto sm:h-[358px] tablet:h-[550px] lg:h-[680px] xl:h-[860px] relative ${window.innerWidth <= 768 ? 'max-w-[90%] mx-auto ' : ''} ${isMobile ? 'h-[358px]' : ''}`}
            key={card.id}
          >
            <li
              className={`tablet:max-w-[87.24%] lg:max-w-[87.24%] sm:w-[518px] mx-auto xl:w-[1675px] flex justify-between items-center sm:gap-x-[30px] gap-x-[8px] mt-[30px]  tablet:gap-x-[65px] lg:gap-x-[27px] absolute tablet:items-center ${card.id % 2 === 0 ? 'tablet:max-w-[89.3%] tablet:flex-row-reverse tablet:right-0 lg:max-w-[89.3%] lg:flex-row-reverse lg:right-0' : ''} ${isMobile ? 'max-w-[90%] h-[185px]' : ''}`}
            >
              <div
                className={`w-[130px] h-[135px] mx-auto sm:w-[220px]  sm:h-[235px] tablet:w-[500px] tablet:h-[460px] xl:w-[805px] xl:h-[860px] lg:w-[550px] lg:h-[660px] rounded-[5px] ${isMobile ? 'w-[157px] h-[165px]' : ''}`}
              >
                <Swiper
                  modules={[Autoplay, Navigation, Mousewheel, Pagination]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    reverseDirection: false,
                  }}
                  spaceBetween={20}
                  speed={2000}
                  slidesPerView={1}
                  pagination={true}
                  navigation={false}
                  mousewheel={true}
                >
                  <div>
                    {card.img.map((item, index) => (
                      <SwiperSlide key={index}>
                        <img
                          className={`w-[130px] h-[135px] sm:w-[220px] sm:h-[235px] tablet:w-[500px] tablet:h-[460px] xl:w-[805px] xl:h-[860px] lg:w-[550px] lg:h-[660px] rounded-[5px] ${isMobile ? 'w-[157px] h-[165px]' : ''}`}
                          src={item}
                          alt='cardImg'
                        />
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
              <div
                className={`w-[205px] h-[228px] sm:w-[290px] sm:h-[340px] tablet:h-full tablet:w-[405px] xl:w-[705px] lg:w-[490px] ${isMobile ? 'w-[240px] h-[278px]' : ''}`}
              >
                <h2
                  className={`font-bold text-[#E2DED3] sm:text-[22px] text-[14px] tablet:text-[25px] lg:text-[40px] xl:text-[50px] ${isMobile ? 'text-[18px]' : ''}`}
                >
                  {card.instrumentName}
                </h2>
                <ul
                  className={`text-[12px] leading-[150%] sm:text-[18px] tablet:text-[22px] lg:text-[27px] xl:text-[30px] font-regular tablet:font-medium mt-[10px]  tablet:mt-[30px] ${isMobile ? 'text-[16px]' : ''}`}
                >
                  {properties.map(property => (
                    <li key={property}>
                      <p>{card[property]}</p>
                    </li>
                  ))}
                </ul>
                <div
                  className={`w-[194px] h-[35px] sm:w-[290px] tablet:w-[434px] lg:w-[490px] xl:w-[674px] flex justify-around items-center mt-[15px]  tablet:mt-[10px] lg:mt-[30px] xl:mt-[87px] gap-x-[3px] ${isMobile ? 'w-[240px]' : ''}`}
                >
                  <p
                    className={`font-semibold mt-[20px] text-[#E2DED3] opacity-70 text-[11px] sm:text-[16px] tablet:text-[25px] lg:text-[27px] xl:text-[30px] ${isMobile ? 'text-[14px]' : ''}`}
                  >
                    Цена: {card.price}
                  </p>
                  <Button children='Купить' variant='buyButton' />
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
};
