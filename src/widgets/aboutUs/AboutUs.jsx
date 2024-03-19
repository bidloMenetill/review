import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '../../shared';

export const AboutUs = () => {
  const { t } = useTranslation();
  const isWideScreen = useMediaQuery(
    '(min-width: 1025px) and (max-width: 1920px)'
  );
  return (
    <div
      className={
        isWideScreen
          ? 'about_us_bg'
          : 'about_us_bg2 bg-[url("/src/shared/img/aboutMobile/frame_104.png")]'
      }
    >
      <div className="about_us_bg bg-[url('/src/shared/img/about1.png')] h-[960px] w-[1920px]">
        <div className='about flex justify-center items-center'>
          <div className='py-40 flex flex-row gap-[76px] w-[1719px] items-center'>
            <div className='w-[1255px] flex flex-col gap-6'>
              <h2 className='text-[#F5F5F5] font-medium text-8xl leading-[122px]'>
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
