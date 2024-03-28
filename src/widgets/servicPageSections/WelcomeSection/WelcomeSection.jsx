import firstBg from '../../../shared/img/servicesImg/serviceFonSecond.jpg';
import shadowBg from '../../../shared/img/main_page_bg.jpg';

export const WelcomeSection = () => {
  return (
    <section className='relative w-full h-[450px] mx-auto text-[#f5f5f5] font-montserrat'>
      <img
        className='absolute object-cover w-full h-[450px]'
        src={firstBg}
        alt='firstBg'
      />
      <img
        className='absolute opacity-60 object-cover w-full h-[450px]'
        src={shadowBg}
        alt='shadowBg'
      />
      <div className='absolute mx-auto w-full'>
        <p className='text-center max-w-[600px] mx-auto pt-[145px] text-[18px] font-[350] text-[#E2DED3] xl:max-w-[1500px] xl:text-[30px] lg:max-w-[1000px] lg:pt-[120px] lg:text-[24px]'>
          Добро пожаловать в наш музыкальный центр, где объединены студия
          звукозаписи, репетиционная база и музыкальные курсы! Здесь вы найдете
          все необходимое для творчества и развития вашего музыкального
          потенциала. Давайте вместе создадим музыку, которая поразит мир!
        </p>
      </div>
    </section>
  );
};
