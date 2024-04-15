import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Button, useMediaQuery } from '../../shared';
import drumStick2 from '../../shared/img/shop/drumStick2.png';
import drumStick1 from '../../shared/img/shop/drumStick1.png';
import drumStick3 from '../../shared/img/shop/drumStick3.png';
import drumStick4 from '../../shared/img/shop/drumStick4.png';
import drumStick5 from '../../shared/img/shop/drumStick5.png';

export const SwiperShopCardsSection = () => {
  const isMobile = useMediaQuery('(min-width: 450px) and (max-width: 575px)');
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
        <div className='sm:mt-[100px] md:mt-[100px] tablet:mt-[100px] lg:mt-[200px] xl:mt-[300px]'>
          {shopCard?.map(card => (
            <div
              className={` max-w-[712px] h-[343px] md:w-[1464px] mt-[60px] mx-auto sm:h-[534px] md:h-[700px] md:mt-[100px] tablet:h-[460px] lg:h-[660px] xl:h-[860px] relative ${isMobile ? 'h-[452px]' : ''}`}
              key={card.id}
            >
              <Swiper
                modules={[Navigation, Mousewheel]}
                speed={2000}
                navigation={false}
                mousewheel={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1.1,
                    spaceBetween: 10,
                    slideToClickedSlide: true,
                  },
                  480: {
                    slidesPerView: 1.1,
                    spaceBetween: 10,
                    slideToClickedSlide: true,
                  },
                  768: {
                    slidesPerView: 1.1,
                    spaceBetween: 60,
                    slideToClickedSlide: true,
                  },
                }}
              >
                <li
                  className={`max-w-[712px] h-[343px] md:w-[1464px] px-[16px] sm:px-[16px] md:px-[36px] tablet:px-0 tablet:max-w-[87.24%] lg:max-w-[87.24%] sm:max-w-[1110px] mx-auto xl:max-w-[87.24%] flex justify-between items-center sm:gap-x-[10px] mt-[30px] tablet:gap-x-[65px] absolute tablet:items-center ${card.id % 2 === 0 ? 'tablet:max-w-[89.3%] tablet:flex-row-reverse tablet:right-0 lg:max-w-[89.3%] lg:flex-row-reverse lg:right-0' : ''} ${isMobile ? 'w-[870px] h-[452px]' : ''}`}
                >
                  <SwiperSlide>
                    <div
                      className={`w-[340px] h-[343px] mx-auto sm:w-[524px] sm:h-[534px] md:w-[691px] md:h-[700px] tablet:w-[500px] tablet:h-[460px] lg:w-[680px] lg:h-[660px] xl:w-[805px] xl:h-[860px]  ${isMobile ? 'w-[409px] h-[452px]' : ''}`}
                    >
                      <img
                        className={`w-[340px] h-[343px] mx-auto border-[0.50px] border-[solid] border-[#e2ded3] rounded-[16px] sm:w-[524px] sm:h-[534px] md:w-[691px] md:h-[700px] tablet:w-[500px] tablet:h-[460px] lg:w-[680px] lg:h-[660px] xl:w-[805px] xl:h-[860px]  ${isMobile ? 'w-[409px] h-[452px]' : ''}`}
                        src={card.img}
                        alt='cardImg'
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className={`w-[340px] h-[343px] flex justify-center flex-col items-center border-[0.50px] border-[solid] border-[#e2ded3] rounded-[16px] px-[8px] tablet:px-0 tablet:border-0  sm:w-[524px] sm:h-[534px] md:w-[691px] md:h-[700px] tablet:w-[405px] tablet:h-[348px] xl:w-[705px] xl:h-[548px] lg:w-[550px] lg:h-[448px] ${isMobile ? 'w-[409px] h-[452px]' : ''}`}
                    >
                      <div
                        className={`w-[278px] h-[258px] sm:w-[424px] sm:h-[400px] md:w-[560px] md:h-[525px] mx-auto tablet:w-[405px] tablet:h-[705px] lg:w-[550px] xl:w-[705px] ${isMobile ? 'w-[334px] h-[339px]' : ''}`}
                      >
                        <h2
                          className={`md:w-[440px] tablet:w-[405px] lg:w-[505px] xl:w-[645px] font-bold text-[#E2DED3] text-[14px] sm:text-[22px] md:text-[27px] lg:text-[40px] xl:text-[50px] ${isMobile ? 'text-[18px]' : ''}`}
                        >
                          {card.instrumentName}
                        </h2>
                        <ul
                          className={`text-[12px] sm:text-[18px] md:text-[23px] font-medium tablet:text-[22px] lg:text-[27px] xl:text-[30px] mt-[8px] md:mt-[15px] tablet:mt-[10px] ${isMobile ? 'text-[16px]' : ''}`}
                        >
                          {properties.map(property => (
                            <li key={property}>
                              <p>{card[property]}</p>
                            </li>
                          ))}
                        </ul>
                        <div
                          className={`w-[278px] mx-auto font-montserrat sm:w-[424px] md:w-[344px] md:h-[45px] tablet:w-[434px] lg:w-[490px] xl:w-[634px] flex justify-around flex-col tablet:flex-row items-center tablet:mt-[10px] lg:mt-[30px] xl:mt-[87px] gap-x-[3px] ${isMobile ? 'w-[334px]' : ''}`}
                        >
                          <p
                            className={`font-semibold flex-none text-[#d9d9d9] opacity-70 text-[14px] sm:text-[16px] md:text-[27px] md:font-semibold tablet:text-[25px] lg:text-[27px] xl:text-[30px] mt-[8px] md:mt-[15px] tablet:mt-[40px] ${isMobile ? 'text-[14px]' : ''}`}
                          >
                            Цена: {card.price}
                          </p>
                          <div className='mt-[16px] md:mt-[46px] text-center'>
                            <Button children='Купить' variant='buyButton' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </li>
              </Swiper>
            </div>
          ))}
        </div>
      </ul>
    </section>
  );
};
