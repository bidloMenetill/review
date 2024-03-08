import { useTranslation } from "react-i18next";

export const Team = () => {

  const { t } = useTranslation()
  return (
    <div>
      <div className="bg-[url('/src/shared/img/team.png')] w-[1920px] h-[2800px]">
        <div className="w-[1719px] mx-auto">
          <h2 className="text-[#F5F5F5] font-medium text-8xl leading-[122px]">{t('aboutUs.thirdSection.title')}</h2>
        </div>
      </div>
    </div>
  );
};
