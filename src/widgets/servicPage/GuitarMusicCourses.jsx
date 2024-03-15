import { useTranslation } from 'react-i18next';
import bgGitarCours from '../../shared/img/about.png';
import gitara from '../../shared/img/servicesImg/gitara.jpg';
import { OrangeButton } from '../../shared';

export const GuitarMusicCourses = () => {
  const { t } = useTranslation();
  return (
    <section
      className='bg-cover bg-no-repeat -mt-[0px] bg-center h-[948px] font-montserrat'
      style={{ backgroundImage: `url(${bgGitarCours})` }}
    >
      <div className='w-[1720px] mx-auto t-[white] pt-[100px]'>
        <p className='text-[25px] font-[500] pb-[50px] text-[#DC6441]'>
          {t('servicePage.fivthSection.title')}
        </p>

        <div className='flex gap-[88px]'>
          <div
            className='relative bg-cover bg-no-repeat bg-center w-[533px] h-[650px]'
            style={{ backgroundImage: `url(${gitara})` }}
          >
            <p className='absolute bottom-[50px] left-[50%] translate-x-[-50%] text-[50px] text-[#F9E5DE] font-[600]'>
              {t('servicePage.fivthSection.tool')}
            </p>
          </div>

          <div className='w-[1099px] pt-[11px] text-[20px] text-[#D9D9D9] font-[500]'>
            <p>{t('servicePage.fivthSection.firstUpperTitle')}</p>
            <p className='pl-[30px]'>
              {t('servicePage.fivthSection.firstParagraph.firstTitle')}
              <ul className='list-disc pl-[40px]'>
                <li>
                  {t('servicePage.fivthSection.firstParagraph.firstText')}
                </li>
                <li>
                  {t('servicePage.fivthSection.firstParagraph.secondtText')}
                </li>
              </ul>
              {t('servicePage.fivthSection.secondParagraph.firstTitle')}
              <ul className='list-disc pl-[40px]'>
                <li>
                  {t('servicePage.fivthSection.secondParagraph.firstText')}
                </li>
                <li>
                  {t('servicePage.fivthSection.secondParagraph.secondtText')}
                </li>
              </ul>
              {t('servicePage.fivthSection.thirdParagraph.firstTitle')}
              <ul className='list-disc pl-[40px]'>
                <li>
                  {t('servicePage.fivthSection.thirdParagraph.firstText')}
                </li>
                <li>
                  {t('servicePage.fivthSection.thirdParagraph.secondtText')}
                </li>
              </ul>
              {t('servicePage.fivthSection.forthParagraph.firstTitle')}
              <ul className='list-disc pl-[40px]'>
                <li>
                  {t('servicePage.fivthSection.forthParagraph.firstText')}
                </li>
                <li>
                  {t('servicePage.fivthSection.forthParagraph.secondtText')}
                </li>
              </ul>
              {t('servicePage.fivthSection.fivthParagraph.firstTitle')}
              <ul className='list-disc pl-[40px]'>
                <li>
                  {t('servicePage.fivthSection.fivthParagraph.firstText')}
                </li>
                <li>
                  {t('servicePage.fivthSection.fivthParagraph.secondtText')}
                </li>
              </ul>
              {t('servicePage.fivthSection.sixParagraph.firstTitle')}
              <ul className='list-disc pl-[40px]'>
                <li>{t('servicePage.fivthSection.sixParagraph.firstText')}</li>
                <li>
                  {t('servicePage.fivthSection.sixParagraph.secondtText')}
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className='text-right mt-[30px]'>
          <OrangeButton txt={t('servicePage.fivthSection.button')} />
        </div>
      </div>
    </section>
  );
};
