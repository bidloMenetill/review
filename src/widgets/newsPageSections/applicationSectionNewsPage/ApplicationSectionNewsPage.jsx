import unnamed from '../../../shared/img/news2/unnamed 1_1.png';
import AppStore from '../../../shared/img/news2/AppStore.png';
import GooglePlay from '../../../shared/img/news2/GooglePlay.png';
import unnamed_2 from '../../../shared/img/news2/unnamed 2.png';
import unnamed_3 from '../../../shared/img/news2/unnamed_3.png';

export const ApplicationSection = () => {
  // FIX ME: thinks
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
      text_p1: `Ear Training and Music Theory`,
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
    <section className='mt-[10%] tablet:mx-auto tablet:mt-[4%] flex flex-col bg-[url("/src/shared/img/news2/FAQ_2.png")] xl:min-w-[1720px] tablet:w-[1024px] min-h-[960px] md:w-[768px]'>
      <div>
        <h2 className='text-[#E2DED3] font-medium text-[30px] text-center pt-[2%]'>
          3 ПОЛЕЗНЫХ ПРИЛОЖЕНИЯ ДЛЯ БАРАБАНЩИКОВ
        </h2>
      </div>
      <section className='flex gap-[2%] mx-[auto] md:w-full sm:w-full lg:w-full max-w-[1720px] mt-[3%] md:ml-0'>
        {applications?.map(item => (
          <div
            key={item.id}
            className='flex flex-col gap-[5%] content-around max-w-[560px] min-h-[676px] border-[#E2DED3] border-solid border rounded-3xl py-[4%] bg-[#000000]'
          >
            <div className='flex gap-[3%] pl-[4%] bg-[#1E1E1E] rounded-2xl sm:flex-col max-w-[541px] py-[2%]'>
              <div className='w-[130px] md:w-[80px]'>
                <img src={item.img} alt='unnamed' />
              </div>
              <div className='flex flex-col gap-[10%]'>
                <div>
                  <h3 className='text-[#E2DED3] font-bold text-[20px]'>
                    {item.text_h3}
                  </h3>
                  <p className='text-[#B4B4B4] font-medium text-[16px]'>
                    {item.text_p1}
                  </p>
                  <p className='text-[#E2DED3] font-regular text-[14px]'>
                    {item.text_p2}
                  </p>
                </div>
                <div className='flex gap-[2%]'>
                  <div className='bg-[#F93822] rounded-[20px]'>
                    <button className='min-w-[100px] min-h-[40px]'>GET</button>
                  </div>
                  <div>
                    <p className='text-[#F5F5F5] font-regular text-[14px]'>
                      {item.text_p3}
                    </p>
                    <p className='text-[#F5F5F5] font-regular text-[14px]'>
                      {item.text_p4}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center px-[3%]'>
              <h2 className='text-[#E2DED3] font-medium text-[30px]'>
                {item.text_h2}
              </h2>
              <p className='text-[#B4B4B4] font-medium text-[20px]'>
                {item.text_p5}
              </p>
            </div>
            <div className='flex justify-center mt-[6%]'>
              <div>
                <img src={item.img2} alt='AppStore' />
              </div>
              <div>
                <img src={item.img3} alt='GooglePlay' />
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};
