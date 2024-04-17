import { useTranslation } from 'react-i18next';
// import photo from '../../../shared/img/bg_video_gallery.jpg';
// import { useEffect } from 'react';
// import axios from 'axios';
import photo2 from '../../../shared/img/aboutMobile/rectangle_53.png';
import photo3 from '../../../shared/img/aboutMobile/rectangle_55.png';
import photo4 from '../../../shared/img/aboutMobile/rectangle_56.png';
import Vadim from '../../../shared/img/aboutMobile/Vadim.png';
import Arina from '../../../shared/img/aboutMobile/Arina.png';
import Dmitriy from '../../../shared/img/aboutMobile/Dmitriy.png';
import Daniil from '../../../shared/img/aboutMobile/Daniil.png';
import Victoriya from '../../../shared/img/aboutMobile/Victoriya.png';
import Roman from '../../../shared/img/aboutMobile/Roman.png';
import photo_1 from '../../../shared/img/tablet/tablet_man_1.png';
import photo_2 from '../../../shared/img/tablet/tablet_man_2.png';
import photo_3 from '../../../shared/img/tablet/tablet_man_3.png';
import img_150 from '../../../shared/img/aboutMobile/man_150.png';
import { CardTeamSection } from './cardTeamSection/CardTeamSection';

export const Team = () => {
  const { t } = useTranslation();
  const teams = [
    {
      id: 1,
      img: Vadim,
      img2: photo2,
      photo_1: photo_1,
      man_150: img_150,
      dump: 'Барабанщик',
      andrei_h3: `Андрей Кузницов`,
      text_h3: `Александр Симонов`,
      img3: photo3,
      text_tablet: `Преподаватель/запись/микширование живого звука Сертифицированный AVID (ProTools)`,
      text: `Директор, Аранжировщик, звукорежиссёр`,
      text2: `Преподаватель/запись/микширование живого звука Сертифицированный AVID (ProTools)`,
      textName: `Вадим`,
    },
    {
      id: 2,
      img: Arina,
      img2: photo2,
      photo_1: photo_2,
      man_150: img_150,
      dump: 'Барабанщик',
      andrei_h3: `Андрей Кузницов`,
      text_h3: `Александр Симонов`,
      img3: photo3,
      text_tablet: `Преподаватель/запись/микширование живого звука Сертифицированный AVID (ProTools)`,
      text: `Администратор`,
      text2: `Преподаватель/запись/микширование живого звука Сертифицированный AVID (ProTools)`,
      textName: `Арина`,
    },
    {
      id: 3,
      img: Dmitriy,
      img2: photo2,
      photo_1: photo_3,
      man_150: img_150,
      dump: 'Барабанщик',
      andrei_h3: `Андрей Кузницов`,
      text_h3: `Александр Симонов`,
      img3: photo3,
      img4: photo4,
      text_tablet: `Преподаватель/запись/микширование живого звука Сертифицированный AVID (ProTools)`,
      text: `Аранжировщик и Звукорежиссёр`,
      text2: `Преподаватель/запись/микширование живого звука Сертифицированный AVID (ProTools)`,
      textName: `Дмитрий`,
    },
    {
      id: 4,
      img: Daniil,
      photo_1: photo_1,
      man_150: img_150,
      dump: 'Барабанщик',
      andrei_h3: `Андрей Кузницов`,
      text_h3: `Александр Симонов`,
      text_tablet: `Преподаватель/запись/микширование живого звука Сертифицированный AVID (ProTools)`,
      text: `Техническое оснащение. Директор G-Craft`,
      textName: `Даниил Ким`,
    },
    {
      id: 5,
      img: Victoriya,
      photo_1: photo_2,
      man_150: img_150,
      dump: 'Барабанщик',
      andrei_h3: `Андрей Кузницов`,
      text_h3: `Александр Симонов`,
      text_tablet: `Преподаватель/запись/микширование живого звука Сертифицированный AVID (ProTools)`,
      text: `Дизайнер, СММ`,
      textName: `Виктория`,
    },
    {
      id: 6,
      img: Roman,
      photo_1: photo_3,
      man_150: img_150,
      dump: 'Барабанщик',
      andrei_h3: `Андрей Кузницов`,
      text_h3: `Александр Симонов`,
      text_tablet: `Преподаватель/запись/микширование живого звука Сертифицированный AVID (ProTools)`,
      text: `Преподаватель игры на гитаре и барабанах`,
      textName: `Роман`,
    },
  ];
  return (
    <>
      <section className='bg-[url("/src/shared/img/aboutMobile/bg_section_2.png")] max-w-[1920px] bg-cover bg-no-repeat flex min-h-[1159px]'>
        <div className='sm:max-w-[1023px] tablet:max-w-full flex flex-col justify-center text-center tablet:text-left items-center gap-y-12 mx-auto'>
          <h2
            className='text-left pt-[3%] sm:text-6xl sm:font-bold sm:text-[#E2DED3] xl:text-center xl:text-left text-3xl xl:text-7xl text-[#F5F5F5]
                xl:pt-16 xl:font-medium xl:leading-[122px]'
          >
            {t('aboutUs.thirdSection.title')}
          </h2>
          <p className='max-w-[335px] sm:max-w-full text-dm sm:text-2xl sm:text-center font-medium leading-6 sm:leading-10 text-slate-100 xl:max-w-[1500px] px-[3%]'>
            Наша команда - это настоящие профессионалы своего дела, каждый из
            которых обладает глубокими знаниями и опытом в своей области. Мы не
            просто выполняем свою работу, мы отдаемся ей с преданностью и
            энтузиазмом
          </p>
          <ul className='sm:max-w-[664px] tablet:flex-row flex flex-wrap gap-6 sm:flex-wrap sm:gap-y-36 items-center text-center mx-auto pl-[20%] pr-[20%] tablet:pl-0 tablet:pr-0 xl:pl-0 xl:pr-0 lg:flex-row lg:max-w-full lg:justify-center'>
            {teams?.map(item => (
              <CardTeamSection key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
