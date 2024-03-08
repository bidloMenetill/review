import { useTranslation } from "react-i18next";
import rectangle_57 from '../../shared/img/servicesImg/Rectangle_57.png';
import rectangle_58 from '../../shared/img/servicesImg/Rectangle_58.png';
import rectangle_59 from '../../shared/img/servicesImg/Rectangle_59.png';

export const RehearsalBase = () => {
    const { t } = useTranslation();
    return (
        <section className='w-[1720px] mx-auto text-[#DC6441] mt-[150px]'>
            <p className="text-[25px] font-[500] pb-[50px]">{t('servicePage.forthSection.title')}</p>

            <div className="flex mt-[50px] gap-[60px]">
                <div className="w-[533px] h-[650px]">
                    <img className="w-[100%] h-[100%] object-cover" src={rectangle_57} alt="Rectangle_57.png" />
                </div>
                <div className="w-[533px] h-[650px]">
                    <img className="w-[100%] h-[100%] object-cover" src={rectangle_58} alt="Rectangle_58.png" />
                </div>
                <div className="w-[533px] h-[650px]">
                    <img className="w-[100%] h-[100%] object-cover" src={rectangle_59} alt="Rectangle_59.png" />
                </div>
            </div>
        </section>
    );
}
