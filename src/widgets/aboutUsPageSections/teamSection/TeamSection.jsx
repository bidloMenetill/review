import { useTranslation } from 'react-i18next';
import photo from '../../../shared/img/bg_video_gallery.jpg';

export const Team = () => {
  const { t } = useTranslation();
  const teams = [
    {
      id: 1,
      img: photo,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, rerum perspiciatis. Fuga quae ullam numquam ducimus
                vel libero voluptates, sint debitis voluptatem ratione sunt
                iste? Doloribus natus voluptas perferendis voluptate, expedita,
                error delectus possimus et, harum libero minus. Nostrum
                voluptates aliquid, sunt iusto quae perferendis aliquam quo, et
                esse consectetur necessitatibus! Quae laboriosam sapiente
                incidunt tenetur quos, aspernatur enim alias sequi similique
                nulla, officiis illum repudiandae commodi assumenda doloremque
                asperiores! Consectetur quos illum amet explicabo necessitatibus
                quo debitis nesciunt inventore nobis laboriosam autem porro
                perspiciatis nisi deserunt aspernatur ex illo fugit iusto
                possimus ullam, alias doloribus culpa itaque! Blanditiis,
                quisquam.`,
    },
    {
      id: 2,
      img: photo,
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                neque quas, pariatur natus ipsa reiciendis amet doloremque ab
                repellendus cum sint voluptate earum aut dolorem odio ut,
                recusandae eveniet cupiditate iure iusto? Fugiat, beatae fuga.
                Fuga rerum molestiae deleniti aliquam dignissimos quae quia!
                Nemo, quo praesentium! Sapiente rerum consectetur deleniti
                cumque tenetur tempore nihil at deserunt voluptatum nisi quaerat
                porro, fugit impedit doloribus quibusdam sunt. Quasi placeat
                repellat id neque porro ea, possimus quas quibusdam alias,
                perspiciatis nesciunt quidem dolor recusandae iste, cum
                laudantium ipsam soluta! Repudiandae repellendus ex sunt
                aliquid! Earum tenetur at atque, itaque dolor, nostrum est culpa
                harum quod quos pariatur?`,
    },
    {
      id: 3,
      img: photo,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, rerum perspiciatis. Fuga quae ullam numquam ducimus
                vel libero voluptates, sint debitis voluptatem ratione sunt
                iste? Doloribus natus voluptas perferendis voluptate, expedita,
                error delectus possimus et, harum libero minus. Nostrum
                voluptates aliquid, sunt iusto quae perferendis aliquam quo, et
                esse consectetur necessitatibus! Quae laboriosam sapiente
                incidunt tenetur quos, aspernatur enim alias sequi similique
                nulla, officiis illum repudiandae commodi assumenda doloremque
                asperiores!`,
    },
  ];
  return (
    <>
      <section className='flex min-h-[2000px]'>
        <div className='w-11/12 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-11/12 flex flex-col gap-y-24 mx-auto'>
          <h2
            className='text-7xl lg:font-normal lg:text-7xl text-[#F5F5F5] lg:pt-14 lg:leading-[100px]
                xl:pt-16 xl:font-medium xl:text-8xl xl:leading-[122px]'
          >
            {t('aboutUs.thirdSection.title')}
          </h2>
          <p className='w-11/12 text-2xl font-medium text-left leading-10 text-slate-100'>
            Наша команда - это настоящие профессионалы своего дела, каждый из
            которых обладает глубокими знаниями и опытом в своей области. Мы не
            просто выполняем свою работу, мы отдаемся ей с преданностью и
            энтузиазмом
          </p>
          <ul className='w-full flex flex-col flex-wrap gap-y-36 lg:gap-y-20 lg:pb-6 xl:gap-y-36'>
            {teams?.map(item => (
              <li
                key={item.id}
                className='w-11/12 sm:w-11/12 md:w-11/12 lg:pt-36 flex lg:gap-7 lg:w-11/12 xl:pt-40 xl:gap-8 xl:w-11/12'
              >
                <img
                  className='max-w-[400px] max-h-[400px]'
                  src={item.img}
                  alt='photos'
                />
                <p className='text-2xl font-medium text-left h-[400px] overflow-auto leading-10 text-slate-100 font-sans'>
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
