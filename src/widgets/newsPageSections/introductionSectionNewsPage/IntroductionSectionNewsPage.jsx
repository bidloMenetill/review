import Certificate from '../../../shared/img/aboutMobile/certificate.png';
import QualityCertificate from '../../../shared/img/aboutMobile/quality_certificate.png';
import bgAbout from '../../../shared/img/aboutMobile/bgAbout.png';
import PicNews from '../../../shared/img/aboutMobile/pic_news.png';
import pic_news from '../../../shared/img/about/pic-news.png';
import certificaty from '../../../shared/img/about/certificaty.png';
import certificaty_2 from '../../../shared/img/about/certificaty_2.png';

export const IntroductionSectionNewsPage = () => {
  return (
    <section className='max-w-full mx-auto sm:max-w-[1920px]'>
      <div className='flex flex-col-reverse sm:flex sm:flex-row'>
        <div className='hidden sm:hidden'>
          <img src={Certificate} alt='Certificate' />
          <img src={QualityCertificate} alt='QualityCertificate' />
        </div>
        <div>
          <div className='sm:block absolute sm:top-64 left-[6vw]'>
            <h2 className='font-bold text-6xl sm:text-[8.3vw] sm:font-medium text-[#E2DED3]'>
              Новости
            </h2>
            <p className='text-xl sm:text-[3.4vw] font-medium text-[#E2DED3]'>
              {' '}
              Здесь мы публикуем новости и статьи студии
            </p>
          </div>
          <span className='flex flex-col-reverse sm:flex-col'>
            <img src={certificaty} alt='Certificate' />
            <img
              src={bgAbout}
              alt='bgAbout'
              className='sm:hidden h-[255px] w-[375px] sm:hidden'
            />
            <img
              src={certificaty_2}
              alt='QualityCertificate'
              className='hidden sm:block'
            />
          </span>
        </div>
        <div className='hidden sm:hidden'>
          <img src={PicNews} alt='PicNews' />
        </div>
        <div>
          <img src={pic_news} alt='PicNews' />
        </div>
      </div>
    </section>
  );
};

// export const IntroductionNewsSection = () => {
//   return (
//     <section className='mx-auto flex xl:w-[1720px] tablet:w-[1024px] md:w-[768px] md:h-[auto] md:flex md:flex-col relative tablet:relative'>
//       <div className='bg-[url("/src/shared/img/news2/Rectangle_142.png")] xl:w-[1081.5px] tablet:w-[523px] xl:h-[960px] tablet:h-[508px] bg-no-repeat'>
//         <div>
//           <h1 className='text-[#E2DED3] font-medium xl:text-[11em] tablet:text-[7em] pt-[20%] px-[12%] lg:text-[8em] text-[8em]'>
//             Новости
//           </h1>
//           <p className='text-[#E2DED3] font-medium text-[2em] lg:text-[2em] xl:text-[3em] tablet:text-[1.7em] pl-[12%]'>
//             Здесь мы публикуем новости и статьи студии
//           </p>
//         </div>
//       </div>
//       <div className='bg-[url("/src/shared/img/news2/Rectangle_141.png")] xl:min-w-[950px] min-h-[960px] tablet:w-[503px] tablet:h-[508px] bg-no-repeat -z-30 tablet:-z-30 absolute tablet:absolute tablet:right-0 right-0'>
//         <div>
//           <p className='text-[#E2DED3] font-medium xl:text-[25px] pt-[75%] pl-[12%] tablet:text-[18px]'>
//             Викрам Рузахунов, Нурак Омурбеков, Денис Бурдаков Запись
//             музыкального видео
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };
