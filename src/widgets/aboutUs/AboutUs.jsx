// import about from '../shared/img/about.png'

import { useTranslation } from 'react-i18next';
import rectangle from '../../shared/img/about_1.png';
// import { Swiper, SwiperSlide } from 'swiper/bundle';
// import 'swiper/css/bundle' 


export const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-[url('/src/shared/img/about.png')] h-[974px] w-[1920px]">

        <div className="flex justify-center items-center">
          <div className="py-40 flex flex-row gap-[76px] w-[1719px] items-center">
            <div className="w-[938px] flex flex-col gap-6">
              <h2 className="text-[#F5F5F5] font-medium text-8xl leading-[122px]">{t('aboutUs.firstSection.title')}</h2>
              <p className="text-[#F5F5F5] font-medium text-xl leading-10">
                {t('aboutUs.firstSection.upperTitle')}
              </p>
            </div>
            <div>
              <img src={rectangle} alt="rectangle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
