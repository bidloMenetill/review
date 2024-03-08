import { useTranslation } from 'react-i18next';
import vocal from '../../shared/img/servicesImg/vocal.jpg';
import { OrangeButton } from '../../shared';


export const VocalMusicCourses = () => {
  const { t } = useTranslation();
  return (
    <section className='w-[1720px] mx-auto t-[white] pt-[100px]'>
      <div className='flex gap-[88px]'>
        <div className='relative bg-cover bg-no-repeat bg-center w-[533px] h-[650px]' style={{ backgroundImage: `url(${vocal})` }}>
          <p className='absolute bottom-[50px] left-[50%] translate-x-[-50%] text-[50px] text-[#F9E5DE] font-[600]'>{t('servicePage.sevSection.tool')}</p>
        </div>

        <div className='w-[1099px] pt-[11px] text-[20px] text-[#D9D9D9] font-[500]'>
          <p>{t('servicePage.sevSection.firstUpperTitle')}</p>
          <p className='pl-[30px]'>
            {t('servicePage.sevSection.firstParagraph.firstTitle')}
            <ul className="list-disc pl-[40px]">
              <li>{t('servicePage.sevSection.firstParagraph.firstText')}</li>
              <li>{t('servicePage.sevSection.firstParagraph.secondtText')}</li>
            </ul>
            {t('servicePage.sevSection.secondParagraph.firstTitle')}
            <ul className="list-disc pl-[40px]">
              <li>{t('servicePage.sevSection.secondParagraph.firstText')}</li>
              <li>{t('servicePage.sevSection.secondParagraph.secondtText')}</li>
            </ul>
            {t('servicePage.sevSection.thirdParagraph.firstTitle')}
            <ul className="list-disc pl-[40px]">
              <li>{t('servicePage.sevSection.thirdParagraph.firstText')}</li>
              <li>{t('servicePage.sevSection.thirdParagraph.secondtText')}</li>
            </ul>
            {t('servicePage.sevSection.forthParagraph.firstTitle')}
            <ul className="list-disc pl-[40px]">
              <li>{t('servicePage.sevSection.forthParagraph.firstText')}</li>
              <li>{t('servicePage.sevSection.forthParagraph.secondtText')}</li>
            </ul>
            {t('servicePage.sevSection.fivthParagraph.firstTitle')}
            <ul className="list-disc pl-[40px]">
              <li>{t('servicePage.sevSection.fivthParagraph.firstText')}</li>
              <li>{t('servicePage.sevSection.fivthParagraph.secondtText')}</li>
            </ul>
            {t('servicePage.sevSection.sixParagraph.firstTitle')}
            <ul className="list-disc pl-[40px]">
              <li>{t('servicePage.sevSection.sixParagraph.firstText')}</li>
              <li>{t('servicePage.sevSection.sixParagraph.secondtText')}</li>
            </ul>
          </p>
        </div>
      </div>

      <div className='text-right mt-[30px]'>
        <OrangeButton txt={t('servicePage.sevSection.button')} />
      </div>
    </section>
  );
};
