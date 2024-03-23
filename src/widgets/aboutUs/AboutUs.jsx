import { useTranslation } from 'react-i18next';

export const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className='bg-[url("/src/shared/img/about1.png")] font-normal text-7xl text-[#F5F5F5] pt-14 leading-[100px] xl:min-h-[960px] xl:min-w-[1720px] lg:min-w-[1300px]'>
        <div className='about pt-16 flex justify-center items-center'>
          <div className='py-40 flex flex-row gap-[76px] w-11/12 items-center'>
            <div className='w-8/12 flex flex-col gap-6'>
              <h2 className='lg:font-normal lg:text-7xl lg:text-[#F5F5F5] lg:pt-14 lg:leading-[100px] xl:pt-16 xl:text-[#F5F5F5] xl:font-medium xl:text-8xl xl:leading-[122px]'>
                {t('aboutUs.firstSection.title')}
              </h2>
              <p className='text-[#F5F5F5] font-medium text-xl leading-10'>
                {t('aboutUs.firstSection.upperTitle')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
