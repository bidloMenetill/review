import { useTranslation } from 'react-i18next';
import rectangle from '../../shared/img/servicesImg/Rectangle_53.jpg'


export const Services = () => {

    const { t } = useTranslation();

    return (

        <section className='w-[1720px] h-[283px] mx-auto text-[#f5f5f5]'>
            <h2 className="py-[50px] text-[100px] font-medium">
                {t('servicePage.firstSection.title')}
            </h2>

            <div className='flex gap-[100px]'>
                <div className='w-[573px] h-[650px]'>
                    <img className='w-[100%] h-[100%] object-cover' src={rectangle} alt="sevice" />
                </div>
                <div className='mx-auto w-[1047px]'>
                    <h2 className='pt-[48px] pb-[20px] text-center text-[#DC6441] text-[30px] font-[500]'>{t('servicePage.firstSection.firstUpperTitle')}</h2>
                    <p className='text-[#F5F5F5] text-[20px]'>{t('servicePage.firstSection.firstText')}</p>

                    <h2 className='pt-[48px] pb-[20px] text-center text-[#DC6441] text-[30px] font-[500]'>{t('servicePage.firstSection.secondUpperTitle')}</h2>
                    <p className='text-[20px]'>{t('servicePage.firstSection.secondText')}</p>
                    <p className='text-[20px]'>{t('servicePage.firstSection.thirdText')}</p>
                </div>
            </div>

            <div className='pl-[30px] pt-[30px]'>
                <ul className="list-disc">
                    <li>{t('servicePage.firstSection.textListF')}</li>
                    <li>{t('servicePage.firstSection.textListS')}</li>
                    <li>{t('servicePage.firstSection.textListTh')}</li>
                    <li>{t('servicePage.firstSection.textListFo')}</li>
                    <li>{t('servicePage.firstSection.textListFi')}</li>
                    <li>{t('servicePage.firstSection.textListSi')}</li>
                    <li>{t('servicePage.firstSection.textListSe')}</li>
                </ul>
            </div>

        </section>
    );
}