import { useTranslation } from 'react-i18next';

export const IntrodactionSectionAboutUs = () => {
  const { t } = useTranslation();
  return (
    <section className='bg-[url("/src/shared/img/aboutMobile/Background_About.png")] bg-no-repeat  xl:bg-[url("/src/shared/img/about/about1.png")] font-normal text-7xl text-[#F5F5F5] leading-[100px] h-[960px] max-w-[1920px]'>
      <div className='mx-auto pt-28 flex flex-row w-11/12 items-center'>
        <div className='w-11/12 justify-center xl:w-8/12 flex flex-col gap-6'>
          <h2 className='text-5xl font-bold lg:font-normal lg:text-7xl lg:text-[#F5F5F5] lg:pt-14 lg:leading-[100px] xl:pt-16 xl:text-[#E2DED3] xl:font-medium xl:text-8xl xl:leading-[122px]'>
            {t('aboutUs.firstSection.title')}
          </h2>
          {/* FIX ME: watch me */}
          <p className='leading-7 text-[#E2DED3] font-medium text-xl xl:leading-10'>
            {t('aboutUs.firstSection.upperTitle')}
          </p>
        </div>
      </div>
    </section>
  );
};
