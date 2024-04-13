import MusicNote from '../../../shared/img/aboutMobile/music_note.png';
import Drum from '../../../shared/img/aboutMobile/drum.png';
import Drummer from '../../../shared/img/about/drummer.png';
import unnamed from '../../../shared/img/news2/unnamed 1_1.png';
import AppStore from '../../../shared/img/news2/AppStore.png';
import GooglePlay from '../../../shared/img/news2/GooglePlay.png';
import unnamed_2 from '../../../shared/img/news2/unnamed 2.png';
import unnamed_3 from '../../../shared/img/news2/unnamed_3.png';
import { CardFeastSectionNewsPage } from './cardFeastSectionNewsPage/ectionNewsPage';

export const FeastSectionNewsPage = () => {
  const applications = [
    {
      id: 1,
      img: unnamed,
      text_h3: `Score Creator: compose music`,
      text_p1: `Write song & make sheet music`,
      text_p2: `Designed for iPad. Not verified for macOS.`,
      text_p3: `In-App`,
      text_p4: `Purchases`,
      text_h2: `Score Creator -это приложение для создания нотных партитур и
              композиций`,
      text_p5: `Приложение автоматически переворачивает страницы,а также
              обеспечивает возможность импорта и экспорта файлов,а также обмена
              музыкальными проектами между устройствами`,
      img2: AppStore,
      img3: GooglePlay,
    },
    {
      id: 2,
      img: unnamed_2,
      text_h3: `The Metronome by Soundbrenner`,
      text_p1: `Musicians, master your tempo!`,
      text_p2: `Designed for iPad. Not verified for macOS.`,
      text_p3: `In-App`,
      text_p4: `Purchases`,
      text_h2: `Одной из хороших сторон приложения является его простота.`,
      text_p5: `Среди плюсов можно выделить настраиваемые ритмы,изменяемые
              темпы,настраиваемые визуальные метки и даже встроенный тюнер.`,
      img2: AppStore,
      img3: GooglePlay,
    },
    {
      id: 3,
      img: unnamed_3,
      text_h3: `EarMaster 7`,
      text_p1: `Ear Training and Music Theory Purchases`,
      text_p3: `In-App`,
      text_p4: `Purchases`,
      text_h2: `EarMaster 7 помогает улучшить музыкальное слуховое восприятие
              через тренировки и упражнения.`,
      text_p5: `Приложение предлагает широкий выбор упражнений и игр,которые могут
              быть настроены на ваш уровень знаний и навыков.`,
      img2: AppStore,
      img3: GooglePlay,
    },
  ];
  return (
    <section>
      <section className='sm:block sm:px-none max-w-full sm:max-w-[100%]'>
        <div>
          <div className='bg-[url("src/shared/img/about/news_2.png")] bg-auto h-[1725px] bg-no-repeat text-[#E2DED3] text-5xl sm:text-5xl sm:bold-semibold px-4 tablet:px-20 pt-14'>
            Text
            <hr />
            <div className='max-w-[100%] bg-[#E2DED3] h-[359px] rounded-3xl mt-20'></div>
          </div>
        </div>
        <div className='bg-[url("src/shared/img/about/news_studio.png")] bg-no-repeat bg-auto max-w-[1920px] h-[1935px] text-[#E2DED3] text-5xl px-4 tablet:px-20 pt-14'>
          Text
          <hr />
          <div className='max-w-[100%] bg-[white] h-[500px] rounded-3xl mt-20'></div>
          <div className='max-w-[100%] bg-[white] h-[500px] mt-[10%] rounded-3xl'></div>
        </div>
        <div className='bg-[url("src/shared/img/about/block_app.png")] bg-no-repeat bg-auto max-w-[1920px] min-h-[1117px]'>
          <div className='flex  max-w-[1920px] min-h-[1117px]'>
            <p className='absolute text-xl pt-[10%] lg:pt-[5%] xl:pt-[2%] sm:text-3xl md:text-4xl font-medium text-[#E2DED3] sm:max-w-[751px] left-[6%] xl:left-[15%]'>
              3 ПОЛЕЗНЫХ ПРИЛОЖЕНИЯ ДЛЯ БАРАБАНЩИКОВ
            </p>
            <div className='flex flex-col my-auto sm:flex sm:flex-row sm:max-w-[1720px] gap-y-5 sm:gap-x-1 sm:mx-auto sm:my-auto'>
              <img
                src={Drummer}
                alt='Drummer'
                className='pl-[3%] pr-[3%] sm:pr-0 sm:max-w-[68%] sm:max-h-[790px] sm:pl-[2%]'
              />
              <section className='flex flex-col sm:max-w-[415px] sm:max-h-[790px] sm:mx-auto gap-[2vh] sm:gap-[1vw] pl-[3%] sm:pl-0 pr-[3%] sm:pr-[2%]'>
                {applications?.map(item => (
                  <div
                    key={item.id}
                    className='flex sm:max-w-[415px] sm:h-[45%] border-[#E2DED3] border-solid border rounded-2xl bg-[#000000]'
                  >
                    <CardFeastSectionNewsPage item={item} />
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className='hidden sm:hidden bg-[url("/src/shared/img/aboutMobile/newspaper_news.png")] bg-auto max-w-[375px] mx-auto h-[412px] bg-no-repeat'>
        <div className='mx-auto mt-[13%]'>
          <div className='flex'>
            <img src={MusicNote} alt='MusicNote' />
            <div>
              <p className='text-[white]'>Text</p>
              <p className='text-[white]'>Text</p>
            </div>
          </div>
          <div className='mx-auto'>
            <h4 className='text-[white]'>Text</h4>
            <img src={Drum} alt='Drum' />
          </div>
        </div>
      </section>
    </section>
  );
};

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Mousewheel, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/bundle';
// import 'swiper/css/autoplay';
// import Rectangle_143 from '../../../shared/img/news2/Rectangle 143.png';
// import Rectangle_144 from '../../../shared/img/news2/Rectangle 144.png';
// import Rectangle_145 from '../../../shared/img/news2/Rectangle 145.png';
// import Rectangle_146 from '../../../shared/img/news2/Rectangle 146.png';
// import Rectangle_147 from '../../../shared/img/news2/Rectangle 147.png';
// import Rectangle_148 from '../../../shared/img/news2/Rectangle 148.png';
// import Rectangle_149 from '../../../shared/img/news2/Rectangle 149.png';
// import Rectangle_150 from '../../../shared/img/news2/Rectangle 150.png';
// import Rectangle_151 from '../../../shared/img/news2/Rectangle 151.png';

// export const FiestSection = () => {
//   const feastSectionImages = [
//     {
//       id: 1,
//       img: Rectangle_143,
//     },
//     {
//       id: 2,
//       img: Rectangle_144,
//     },
//     {
//       id: 3,
//       img: Rectangle_145,
//     },
//     {
//       id: 4,
//       img: Rectangle_146,
//     },
//     {
//       id: 5,
//       img: Rectangle_147,
//     },
//     {
//       id: 6,
//       img: Rectangle_148,
//     },
//     {
//       id: 7,
//       img: Rectangle_149,
//     },
//     {
//       id: 8,
//       img: Rectangle_150,
//     },
//     {
//       id: 9,
//       img: Rectangle_151,
//     },
//   ];
//   return (
//     <section className='mx-auto tablet:w-[1024px] tablet:h-[358px] h-[676px] flex mt-[10%] tablet:mt-[4%] xl:mt-[10%] xl:min-w-[1720px] xl:min-h-[676px]'>
//       <div className='max-w-[520px] tablet:w-[275px] h-[676px] tablet:max-h-[358px] xl:min-w-[520px] xl:min-h-[676px]'>
//         <p className='text-[#E2DED3] font-medium text-[25px] xl:text-[25px] tablet:text-[15px] text-center py-[51%] xl:py-[51%] tablet:py-[5%] px-[10%] tablet:px-[5%] bg-[#F93822] tablet:h-[358px] xl:min-h-[676px]'>
//           Всем привет, фоточки прилетели!) ищите себя на фото с QrushFest.
//           Ссылка в шапке профиля
//         </p>
//       </div>
//       <Swiper
//         modules={[Autoplay, Navigation, Mousewheel]}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//           reverseDirection: false,
//         }}
//         speed={2000}
//         slidesPerView={2.5}
//         initialSlide={1.2}
//         loop={true}
//         navigation={false}
//         mousewheel={true}
//       >
//         <div className='flex max-w-[1403px] gap-[4%] xl:min-w-[1403px] tablet:leading-3 tablet:w-[743px] tablet:h-[358px] overflow-x-hidden text-[white] tablet:gap-0'>
//           {feastSectionImages?.map((item, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 className='max-w-[520px] tablet:w-[275px] h-full tablet:h-[358px] xl:min-w-[520px] xl:h-full'
//                 src={item.img}
//                 alt={`feastSectionImage${item.id}`}
//               />
//             </SwiperSlide>
//           ))}
//         </div>
//       </Swiper>
//     </section>
//   );
// };
