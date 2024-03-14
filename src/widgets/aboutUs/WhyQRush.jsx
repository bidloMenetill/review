import { useTranslation } from 'react-i18next';


export const WhyQRush = () => {

  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-[url('/src/shared/img/Why-Q-Rush-1.png')] w-[1920px] h-[802px] py-28">
        <div className="w-[1719px] mx-auto">
          <h3 className="text-[#F5F5F5] text-center text-5xl leading-[61px] font-medium">{t('aboutUs.secondSection.title')}</h3>
          <div className="flex py-32 gap-2">
            <div className="text-center">
              <h4 className="text-[#DC6441] text-3xl font-bold">{t('aboutUs.secondSection.firstSection.title')}</h4>
              <p className="text-[#F5F5F5] text-xl leading-10 font-medium">{t('aboutUs.secondSection.firstSection.upperTitle')}</p>
            </div>
            <div className="text-center">
              <h4 className="text-[#DC6441] text-3xl font-bold">{t('aboutUs.secondSection.secondSection.title')}</h4>
              <p className="text-[#F5F5F5] text-xl leading-10 font-medium">{t('aboutUs.secondSection.secondSection.upperTitle')}</p>
            </div>
            <div className="text-center">
              <h4 className="text-[#DC6441] text-3xl font-bold">{t('aboutUs.secondSection.thirdSection.title')}</h4>
              <p className="text-[#F5F5F5] text-xl leading-10 font-medium">{t('aboutUs.secondSection.thirdSection.upperTitle')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
