import { useTranslation } from 'react-i18next';
import woman from '../../../shared/img/aboutMobile/woman.png';

export const IntrodactionSectionAboutUs = () => {
  const { t } = useTranslation();
  return (
    <section className='bg-[url("/src/shared/img/about/about1.png")] w-full font-normal text-7xl text-[#F5F5F5] leading-[100px] sm:min-h-[960px]'>
      <div className='pt-2 sm:pt-24 pl-[5%] flex flex-col w-11/12 sm:w-11/12'>
        <div className='hidden'>
          <h2>О нас</h2>
          <p className='text-[#F5F5F5] font-medium text-3xl sm:text-5xl leading-8'>
            Q-Rush Studio музыкальная студия в центре Бишкека, была основана в
            2016 году.Это уникальное место, где каждый может воплотить свои
            творческие идеи в жизнь. Сейчас у нас 3 основных направления:
            звукозапись, репетиционная база, музыкальные курсы. У нас вы можете
            записать свою песню, порепетировать самостоятельно или с группой,
            или же обучиться игре на музыкальном инструменте
          </p>
        </div>
        <div className='sm:w-8/12 flex gap-2'>
          <div className='sm:hidden'>
            <img src={woman} alt='woman' />
          </div>
          <div>
            <h2 className='max-w-[234px] sm:max-w-[70%] pt-2 text-2xl font-regular lg:font-regular lg:text-7xl lg:text-[#F5F5F5] lg:pt-14 lg:leading-[100px] xl:pt-16 xl:text-[#E2DED3] xl:font-medium xl:text-8xl xl:leading-[122px]'>
              {t('aboutUs.firstSection.title')}
            </h2>
            {/* FIX ME: watch me */}
            <p className='max-w-[90%] leading-5 text-[#E2DED3] font-medium text-sm xl:text-2xl xl:leading-10'>
              {t('aboutUs.firstSection.upperTitle')}
            </p>
          </div>
        </div>
        <div className='xl:hidden md:hidden'>
          <p className='max-w-[355px] pb-[3%] leading-5 text-[#E2DED3] font-medium text-sm xl:leading-10'>
            {t('aboutUs.firstSection.upperTitle_2')}
          </p>
        </div>
      </div>
    </section>
  );
};
