// import Rectangle_142 from '../../shared/img/news2/Rectangle_142.png';
// import Rectangle_141 from '../../shared/img/news2/Rectangle_141.png';

// export const NewsBlock = () => {
//   return (
//     <div>
//       <div className='max-w-[1920px] border-blue-950 border-solid border-2'>
//         <div className='bg-[url("/src/shared/img/news2/Rectangle_142.png")] max-w-[1081.5px] max-h-[960px]'>
//           <h1>Новости </h1>
//         </div>
//         <div className='bg-[url("/src/shared/img/news2/Rectangle_141.png")] max-w-[950px] max-h-[960px]'></div>
//       </div>
//     </div>
//   );
// };

// import { useTranslation } from 'react-i18next';
// import Rectangle from '../../shared/img/news/rectangle_108.png';
// import Rectangle2 from '../../shared/img/news/rectangle_110.png';
// import Rectangle3 from '../../shared/img/news/rectangle_110_1.png';
// import { useMediaQuery } from '../../shared';

// export const NewsBlock = () => {
//   const { t } = useTranslation();
//   const isWideScreen = useMediaQuery(
//     '(min-width: 1024px) and (max-width: 1920px)'
//   );
//   return (
//     // <div className='newsWrapper'>
//     <div>
//       <div
//         className={
//           isWideScreen
//             ? 'w-full m-auto bg-zinc-900 flex justify-center text-slate-100'
//             : 'max-w-screen-lg m-auto flex justify-center text-slate-100'
//         }
//       >
//         <div className='newsBlock w-11/12 pt-44 '>
//           <div>
//             <h2
//               className={
//                 isWideScreen
//                   ? 'newsH2 text-slate-100 text-8xl font-semibold leading-normal'
//                   : 'newsH2_2 text-slate-100 text-7xl font-medium leading-snug'
//               }
//             >
//               {t('newsBlock.firstSection.title')}
//             </h2>
//             <p
//               className={
//                 isWideScreen
//                   ? 'newsP text-3xl font-medium'
//                   : 'newsP_2 text-xl font-normal'
//               }
//             >
//               {t('newsBlock.firstSection.upperTitle')}
//             </p>
//           </div>
//           <div className='newsBlocks flex gap-8'>
//             <div
//               className={
//                 isWideScreen
//                   ? 'newsSection1 max-w-xl font-semibold pt-10'
//                   : 'newsSectionMedia max-w-72 font-medium py-6'
//               }
//             >
//               <div className='newsSection2 pt-10'>
//                 <div className='newsSections bg-slate-400 rounded-3xl'>
//                   <img src={Rectangle} alt='newsPhoto' />
//                   <p
//                     className={
//                       isWideScreen
//                         ? 'text-3xl font-medium news_p text-2xl py-28 px-2.5 text-center'
//                         : 'text-xl font-normal news_p_2 text-xl text-center py-20 px-2.5'
//                     }
//                   >
//                     В студии звукозаписи прошел мастер-класс от известного
//                     звукорежиссера. Участники получили ценные знания о
//                     звукозаписи и сведении треков от профессионала.
//                   </p>
//                 </div>
//               </div>
//               <div className='newsSection2 pt-10'>
//                 <div className='newsSections bg-slate-400 rounded-3xl'>
//                   <img src={Rectangle2} alt='newsPhoto' />
//                   <p
//                     className={
//                       isWideScreen
//                         ? 'text-3xl font-medium news_p text-2xl py-28 px-2.5 text-center'
//                         : 'text-xl font-normal news_p_2 text-xl text-center py-20 px-2.5'
//                     }
//                   >
//                     Легендарная студия звукозаписи объявила о планах открытия
//                     филиала за рубежом. Теперь музыканты со всего мира смогут
//                     воспользоваться услугами известной студии для записи своих
//                     произведений.
//                   </p>
//                 </div>
//               </div>
//               <div className='newsSection2 pt-10'>
//                 <div className='newsSections bg-slate-400 rounded-3xl'>
//                   <img src={Rectangle3} alt='newsPhoto2' />
//                   <p
//                     className={
//                       isWideScreen
//                         ? 'text-3xl font-medium news_p text-2xl py-28 px-2.5 text-center'
//                         : 'text-xl font-normal news_p_2 text-xl text-center py-20 px-2.5'
//                     }
//                   >
//                     Студия звукозаписи запустила проект по поддержке молодых
//                     талантов, предоставляя им возможность бесплатной аренды
//                     студии для записи своей музыки. Это отличная возможность для
//                     начинающих музыкантов проявить себя.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className='newsSection1 max-w-xl font-semibold pt-10'>
//               <div className='newsSection2 pt-10'>
//                 <div className='newsSections bg-slate-400 rounded-3xl'>
//                   <img src={Rectangle2} alt='newsPhoto' />
//                   <p
//                     className={
//                       isWideScreen
//                         ? 'text-3xl font-medium news_p text-2xl py-28 px-2.5 text-center'
//                         : 'text-xl font-normal news_p_2 text-xl text-center py-20 px-2.5'
//                     }
//                   >
//                     Легендарная студия звукозаписи объявила о планах открытия
//                     филиала за рубежом. Теперь музыканты со всего мира смогут
//                     воспользоваться услугами известной студии для записи своих
//                     произведений.
//                   </p>
//                 </div>
//               </div>
//               <div className='newsSection2 pt-10'>
//                 <div className='newsSections bg-slate-400 rounded-3xl'>
//                   <img src={Rectangle3} alt='newsPhoto' />
//                   <p
//                     className={
//                       isWideScreen
//                         ? 'text-3xl font-medium news_p text-2xl py-28 px-2.5 text-center'
//                         : 'text-xl font-normal news_p_2 text-xl text-center py-20 px-2.5'
//                     }
//                   >
//                     Студия звукозаписи запустила проект по поддержке молодых
//                     талантов, предоставляя им возможность бесплатной аренды
//                     студии для записи своей музыки. Это отличная возможность для
//                     начинающих музыкантов проявить себя.
//                   </p>
//                 </div>
//               </div>
//               <div className='newsSection2 pt-10'>
//                 <div className='newsSections bg-slate-400 rounded-3xl'>
//                   <img src={Rectangle} alt='newsPhoto' />
//                   <p
//                     className={
//                       isWideScreen
//                         ? 'text-3xl font-medium news_p text-2xl py-28 px-2.5 text-center'
//                         : 'text-xl font-normal news_p_2 text-xl text-center py-20 px-2.5'
//                     }
//                   >
//                     В студии звукозаписи прошел мастер-класс от известного
//                     звукорежиссера. Участники получили ценные знания о
//                     звукозаписи и сведении треков от профессионала.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className='newsSection1 max-w-xl font-semibold pt-10'>
//               <div className='newsSection2 pt-10'>
//                 <div className='newsSections bg-slate-400 rounded-3xl'>
//                   <img src={Rectangle3} alt='newsPhoto' />
//                   <p
//                     className={
//                       isWideScreen
//                         ? 'text-3xl font-medium news_p text-2xl py-28 px-2.5 text-center'
//                         : 'text-xl font-normal news_p_2 text-xl text-center py-20 px-2.5'
//                     }
//                   >
//                     Студия звукозаписи запустила проект по поддержке молодых
//                     талантов, предоставляя им возможность бесплатной аренды
//                     студии для записи своей музыки. Это отличная возможность для
//                     начинающих музыкантов проявить себя.
//                   </p>
//                 </div>
//               </div>
//               <div className='newsSection2 pt-10'>
//                 <div className='newsSections bg-slate-400 rounded-3xl'>
//                   <img src={Rectangle} alt='newsPhoto' />
//                   <p
//                     className={
//                       isWideScreen
//                         ? 'text-3xl font-medium news_p text-2xl py-28 px-2.5 text-center'
//                         : 'text-xl font-normal news_p_2 text-xl text-center py-20 px-2.5'
//                     }
//                   >
//                     В студии звукозаписи прошел мастер-класс от известного
//                     звукорежиссера. Участники получили ценные знания о
//                     звукозаписи и сведении треков от профессионала.
//                   </p>
//                 </div>
//               </div>
//               <div className='newsSection2 pt-10'>
//                 <div className='newsSections bg-slate-400 rounded-3xl'>
//                   <img src={Rectangle2} alt='newsPhoto' />
//                   <p
//                     className={
//                       isWideScreen
//                         ? 'text-3xl font-medium news_p text-2xl py-28 px-2.5 text-center'
//                         : 'text-xl font-normal news_p_2 text-xl text-center py-20 px-2.5'
//                     }
//                   >
//                     Легендарная студия звукозаписи объявила о планах открытия
//                     филиала за рубежом. Теперь музыканты со всего мира смогут
//                     воспользоваться услугами известной студии для записи своих
//                     произведений.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
