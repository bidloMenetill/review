import { useTranslation } from "react-i18next";
import baraban from '../../shared/img/servicesImg/barabany.jpg'
import OrangeButton from "../../shared/ui/button/OrangeButton";

export const ServiceOrder = () => {
    const { t } = useTranslation();
    return (
        <section className="bg-cover bg-no-repeat bg-center h-[450px] bg-[#DC6441]">
            <div className="text-[#F5F5F5] w-[1720px] h-[450px] text-center mx-auto pt-[54px]">
                <h2 className="text-[30px] font-[500] pb-[20px]">{t('servicePage.eightSection.title')}</h2>
                <p className="text-[25px] font-[400] leading-[30.5px]">{t('servicePage.eightSection.firstUpperTitle')}</p>

                <div className="flex gap-[100px] justify-center">
                    <div className="relative w-[415px] h-[224px] bg-cover bg-center  mt-[30px]" style={{ backgroundImage: `url(${baraban})` }}>
                        <div className="w-[100%] h-[100%] absolute inset-0 bg-black opacity-60"></div>
                        <div className="w-[280px] h-[183px] absolute left-[50%] translate-x-[-50%]">
                            <h2 className="text-[30px] font-[500] mt-[8px] mb-[11px]">{t('servicePage.eightSection.firstTabl.title')}</h2>
                            <p className="text-[20px] font-[400]">{t('servicePage.eightSection.firstTabl.firstText')} <sup className="pl-[15px]">{t('servicePage.eightSection.firstTabl.index')}</sup></p>
                            <div className="text-[20px] font-[400] my-[11px]">
                                <p>{t('servicePage.eightSection.firstTabl.secondText')}</p>
                                <p>{t('servicePage.eightSection.firstTabl.thirdText')}</p>
                            </div>
                            <button type="button" className="mx-[auto] px-[24px] w-[250px] h-[30px] bg-[#F93822] font-normal text-[20px] text-[#25100a]"
                            >
                                {t('servicePage.eightSection.button')}
                            </button>
                        </div>
                    </div>

                    <div className="relative w-[415px] h-[224px] bg-cover bg-center  mt-[30px]" style={{ backgroundImage: `url(${baraban})` }}>
                        <div className="w-[100%] h-[100%] absolute inset-0 bg-black opacity-60"></div>
                        <div className="w-[280px] h-[183px] absolute left-[50%] translate-x-[-50%]">
                            <h2 className="text-[30px] font-[500] mt-[8px] mb-[11px]">{t('servicePage.eightSection.secondTabl.title')}</h2>
                            <p className="text-[20px] font-[400]">{t('servicePage.eightSection.secondTabl.firstText')} <sup className="pl-[15px]">{t('servicePage.eightSection.secondTabl.index')}</sup></p>
                            <div className="text-[20px] font-[400] my-[11px]">
                                <p>{t('servicePage.eightSection.secondTabl.secondText')}</p>
                                <p>{t('servicePage.eightSection.secondTabl.thirdText')}</p>
                            </div>
                            <button type="button" className="mx-[auto] px-[24px] w-[250px] h-[30px] bg-[#F93822] font-normal text-[20px] text-[#25100a]"
                            >
                                {t('servicePage.eightSection.button')}
                            </button>
                        </div>
                    </div>

                    <div className="relative w-[415px] h-[224px] bg-cover bg-center  mt-[30px]" style={{ backgroundImage: `url(${baraban})` }}>
                        <div className="w-[100%] h-[100%] absolute inset-0 bg-black opacity-60"></div>
                        <div className="w-[280px] h-[183px] absolute left-[50%] translate-x-[-50%]">
                            <h2 className="text-[30px] font-[500] mt-[8px] mb-[11px]">{t('servicePage.eightSection.thirdTabl.title')}</h2>
                            <p className="text-[20px] font-[400]">{t('servicePage.eightSection.thirdTabl.firstText')} <sup className="pl-[15px]">{t('servicePage.eightSection.thirdTabl.index')}</sup></p>
                            <div className="text-[20px] font-[400] my-[11px]">
                                <p>{t('servicePage.eightSection.thirdTabl.secondText')}</p>
                                <p>{t('servicePage.eightSection.thirdTabl.thirdText')}</p>
                            </div>
                            <button type="button" className="mx-[auto] px-[24px] w-[250px] h-[30px] bg-[#F93822] font-normal text-[20px] text-[#25100a]"
                            >
                                {t('servicePage.eightSection.button')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
