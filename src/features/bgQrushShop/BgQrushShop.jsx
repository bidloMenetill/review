import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import blueGuitar from '../../shared/img/shop/blueGuitar.png';
import drumStickBg from '../../shared/img/shop/drumSticksBg.jpg';
import qrushShop from '../../shared/img/shop/qrushShop.png';
import { AnimationTitle, useMediaQuery, Input } from '../../shared';
import blackGuitar from '../../shared/img/shop/blackGuitar.png';
import secondDrumStickBg from '../../shared/img/shop/secondDrumStickBg.png';
import promark from '../../shared/img/shop/promark.png';
import heartFire from '../../shared/img/shop/heartFire.png';
import searchEngine from '../../shared/img/shop/searchEngine.svg';
import { useZustandStore } from '../../app/store/store';
import { ShopCardsSection } from '../../entities/shopCardsSection/ShopCardsSection';

export const BgQrushShop = () => {
  const { getShopCards, shopCards } = useZustandStore();
  useEffect(() => {
    getShopCards();
  }, []);
  const bgImages1 = [
    blueGuitar,
    drumStickBg,
    promark,
    blackGuitar,
    secondDrumStickBg,
    heartFire,
  ];
  const [indexQrushShop, setIndexQrushShop] = useState(0);
  const isChangingBg = false;
  const timeoutId = null;
  const intervalActive = true;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isChangingBg && intervalActive) {
        setIndexQrushShop(prevIndex => (prevIndex + 1) % bgImages1.length);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [bgImages1.length, timeoutId, isChangingBg, intervalActive]);

  const isMobile = useMediaQuery('(min-width: 450px) and (max-width: 575px)');

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredShopCards = shopCards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <div className='max-w-[1920px] mx-auto flex justify-center items-center bg-[#000] '>
        <motion.div
          className={`bg-cover bg-center w-[100%] h-[464px] sm:h-[650px] md:h-[804px] tablet:h-[980px] lg:h-[1300px] xl:h-[1560px] bg-[#000] bg-animation ${isMobile ? 'h-[560px]' : ''}`}
          style={{
            backgroundImage: `url(${bgImages1[indexQrushShop]})`,
            transition: 'background-image 1s ease-in-out',
          }}
        />
        <div className=' flex justify-center items-center absolute '>
          <AnimationTitle value={qrushShop} />
        </div>
        <div className=' mx-auto flex justify-center absolute mt-[357px] sm:mt-[487px] md:mt-[585px] tablet:mt-[380px] xl:mt-[494px] '>
          <Input
            value={searchTerm}
            onChange={handleSearchChange}
            variant={'filterInput'}
            placeholder='Поиск'
          />
          <div className='absolute top-3 sm:top-3.3 md:top-6 xl:top-8 right-5'>
            <img
              className='w-[26px] h-[29px] lg:w-[30px] lg:h-[31px]'
              src={searchEngine}
              alt='array_right'
            />
          </div>
        </div>
      </div>
      <ShopCardsSection shopCards={filteredShopCards} searchTerm={searchTerm} />
    </section>
  );
};
//FIX ME:
// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Mousewheel, Navigation } from 'swiper/modules';
// import 'swiper/swiper-bundle.css';
// import 'swiper/css';
// import 'swiper/css/bundle';
// import 'swiper/css/autoplay';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import blueGuitar from '../../shared/img/shop/blueGuitar.png';
// import drumStickBg from '../../shared/img/shop/drumSticksBg.jpg';
// import qrushShop from '../../shared/img/shop/qrushShop.png';
// import { useMediaQuery, Input } from '../../shared';
// import blackGuitar from '../../shared/img/shop/blackGuitar.png';
// import secondDrumStickBg from '../../shared/img/shop/secondDrumStickBg.png';
// import promark from '../../shared/img/shop/promark.png';
// import heartFire from '../../shared/img/shop/heartFire.png';
// import searchEngine from '../../shared/img/shop/searchEngine.svg';
// import { useZustandStore } from '../../app/store/store';
// import { ShopCardsSection } from '../../entities/shopCardsSection/ShopCardsSection';

// const arrayImg = Array(4).fill(qrushShop);

// export const BgQrushShop = () => {
//   const { getShopCards, shopCards } = useZustandStore();
//   useEffect(() => {
//     getShopCards();
//   }, []);
//   const bgImages1 = [
//     blueGuitar,
//     drumStickBg,
//     promark,
//     blackGuitar,
//     secondDrumStickBg,
//     heartFire,
//   ];

//   const [indexQrushShop, setIndexQrushShop] = useState(0);
//   const isChangingBg = false;
//   const timeoutId = null;
//   const intervalActive = true;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isChangingBg && intervalActive) {
//         setIndexQrushShop(prevIndex => (prevIndex + 1) % bgImages1.length);
//       }
//     }, 4000);

//     return () => {
//       clearInterval(interval);
//       if (timeoutId) clearTimeout(timeoutId);
//     };
//   }, [bgImages1.length, timeoutId, isChangingBg, intervalActive]);

//   const isMobile = useMediaQuery('(min-width: 450px) and (max-width: 575px)');

//   const [searchTerm, setSearchTerm] = useState('');
//   const handleSearchChange = event => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredShopCards = shopCards.filter(card =>
//     card.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <section>
//       <div className='max-w-[1920px] mx-auto flex justify-center items-center bg-[#000] '>
//         <motion.div
//           className={`bg-cover bg-center w-[100%] h-[464px] sm:h-[650px] md:h-[804px] tablet:h-[980px] lg:h-[1300px] xl:h-[1560px] bg-[#000] bg-animation ${isMobile ? 'h-[560px]' : ''}`}
//           style={{
//             backgroundImage: `url(${bgImages1[indexQrushShop]})`,
//             transition: 'background-image 1s ease-in-out',
//           }}
//         />
//         <div className='w-[100%] flex justify-center items-center absolute '>
//           <Swiper
//             modules={[Autoplay, Navigation]}
//             slidesPerView={2}
//             spaceBetween={50}
//             autoplay={{
//               delay: 0,
//               disableOnInteraction: false,
//             }}
//             speed={2000}
//             navigation={false}
//             loop={true}
//           >
//             {arrayImg?.map((img, index) => (
//               <SwiperSlide key={index}>
//                 <img
//                   className='w-[100%] h-[50px] sm:h-[80px] md:h-[120px] lg:h-[160px] xl:h-[240px] '
//                   src={img}
//                   alt={`title${index + 1}`}
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         <div className=' mx-auto flex justify-center absolute mt-[357px] sm:mt-[487px] md:mt-[585px] tablet:mt-[380px] xl:mt-[494px] '>
//           <Input
//             value={searchTerm}
//             onChange={handleSearchChange}
//             variant={'filterInput'}
//             placeholder='Поиск'
//           />
//           <div className='absolute top-3 sm:top-3.3 md:top-6 xl:top-8 right-5'>
//             <img
//               className='w-[26px] h-[29px] lg:w-[30px] lg:h-[31px]'
//               src={searchEngine}
//               alt='array_right'
//             />
//           </div>
//         </div>
//       </div>
//       <ShopCardsSection shopCards={filteredShopCards} searchTerm={searchTerm} />
//     </section>
//   );
// };
