import { useTranslation } from 'react-i18next';
import drums from '../../shared/img/servicesImg/barabany.jpg';
import { OrangeButton } from '../../shared';


export const DrumsMusicCourses = () => {
  const { t } = useTranslation();
  return (
    <section className='w-[1720px] mx-auto t-[white] pt-[93px]'>
      <div className='flex gap-[88px]'>
        <div className='relative bg-cover bg-no-repeat bg-center w-[533px] h-[650px]' style={{ backgroundImage: `url(${drums})` }}>
          <p className='absolute bottom-[50px] left-[50%] translate-x-[-50%] text-[50px] text-[#F9E5DE] font-[600]'>{t('servicePage.sixSection.tool')}</p>
        </div>

        <div className='w-[1099px] pt-[11px] text-[20px] text-[#D9D9D9] font-[500]'>
          <p>{t('servicePage.sixSection.firstUpperTitle')}</p>
          <p className='pl-[30px]'>
            {t('servicePage.sixSection.firstParagraph.firstTitle')}
            <ul className="list-disc pl-[40px]">
              <li>{t('servicePage.sixSection.firstParagraph.firstText')}</li>
              <li>{t('servicePage.sixSection.firstParagraph.secondtText')}</li>
            </ul>
            {t('servicePage.sixSection.secondParagraph.firstTitle')}
            <ul className="list-disc pl-[40px]">
              <li>{t('servicePage.sixSection.secondParagraph.firstText')}</li>
              <li>{t('servicePage.sixSection.secondParagraph.secondtText')}</li>
            </ul>
            {t('servicePage.sixSection.thirdParagraph.firstTitle')}
            <ul className="list-disc pl-[40px]">
              <li>{t('servicePage.sixSection.thirdParagraph.firstText')}</li>
              <li>{t('servicePage.sixSection.thirdParagraph.secondtText')}</li>
            </ul>
            {t('servicePage.sixSection.forthParagraph.firstTitle')}
            <ul className="list-disc pl-[40px]">
              <li>{t('servicePage.sixSection.forthParagraph.firstText')}</li>
              <li>{t('servicePage.sixSection.forthParagraph.secondtText')}</li>
            </ul>
            {t('servicePage.sixSection.fivthParagraph.firstTitle')}
            <ul className="list-disc pl-[40px]">
              <li>{t('servicePage.sixSection.fivthParagraph.firstText')}</li>
              <li>{t('servicePage.sixSection.fivthParagraph.secondtText')}</li>
            </ul>
            {t('servicePage.sixSection.sixParagraph.firstTitle')}
            <ul className="list-disc pl-[40px]">
              <li>{t('servicePage.sixSection.sixParagraph.firstText')}</li>
              <li>{t('servicePage.sixSection.sixParagraph.secondtText')}</li>
            </ul>
          </p>
        </div>
      </div>

      <div className='text-right mt-[30px]'>
        <OrangeButton txt={t('servicePage.sixSection.button')} />
      </div>
    </section>
  );
};
