import { useTranslation } from 'react-i18next';

export const WhyQRushSection = () => {
  const { t } = useTranslation();
  const wqrush = [
    {
      id: 1,
      text_h4: `aboutUs.secondSection.firstSection.title`,
      text_p: `aboutUs.secondSection.firstSection.upperTitle`,
    },
    {
      id: 2,
      text_h4: `aboutUs.secondSection.secondSection.title`,
      text_p: `aboutUs.secondSection.secondSection.upperTitle`,
    },
    {
      id: 3,
      text_h4: `aboutUs.secondSection.thirdSection.title`,
      text_p: `aboutUs.secondSection.thirdSection.upperTitle`,
    },
  ];
  return (
    <section className="bg-[url('/src/shared/img/Why-Q-Rush-1.png')] lg:min-w-[1300px] xl:min-w-[1720px] min-h-[802px] py-28">
      <div className='w-11/12 mx-auto'>
        <h3 className='text-[#F5F5F5] text-center xl:text-5xl xl:leading-[61px] xl:font-medium lg:font-normal lg:text-4xl'>
          {t('aboutUs.secondSection.title')}
        </h3>
        <ul className='flex py-32 gap-2 max-w-[1720px]'>
          {wqrush?.map(item => (
            <li key={item.id} className='text-center'>
              <h4 className='text-[#DC6441] xl:text-3xl font-bold lg:text-2xl'>
                {t(item.text_h4)}
              </h4>
              <p className='text-[#F5F5F5] xl:text-xl lg:text-lg leading-10 font-medium'>
                {t(item.text_p)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
