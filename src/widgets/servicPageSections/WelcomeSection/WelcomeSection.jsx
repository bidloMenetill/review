import firstBg from '../../../shared/img/servicesImg/serviceFonSecond.jpg';
import shadowBg from '../../../shared/img/main_page_bg.jpg';

export const WelcomeSection = () => {
  return (
    <section className='relative w-full h-[280px] md:h-[300px] tablet:h-[450px] mx-auto text-[#f5f5f5] font-montserrat'>
      <img
        className='absolute object-cover w-full h-full sm:h-full'
        src={firstBg}
        alt='firstBg'
      />
      <img
        className='absolute opacity-60 object-cover w-full h-full sm:h-full'
        src={shadowBg}
        alt='shadowBg'
      />
      <div className='absolute mx-auto w-full'>
        <p className='mx-[20px] pt-[70px] text-[14px] sm:text-center max-w-[535px] sm:mx-auto sm:pt-[80px] sm:text-[18px] font-[350] text-[#E2DED3] xl:max-w-[1500px] xl:text-[30px] lg:max-w-[1000px] tablet:pt-[140px] lg:text-[24px] tablet:max-w-[800px] tablet:text-[22px]'>
          Добро пожаловать в наш музыкальный центр, где объединены студия
          звукозаписи, репетиционная база и музыкальные курсы! Здесь вы найдете
          все необходимое для творчества и развития вашего музыкального
          потенциала. Давайте вместе создадим музыку, которая поразит мир!
        </p>
      </div>
    </section>
  );
};
