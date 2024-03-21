import { useTranslation } from 'react-i18next';
import photo from '../../shared/img/bg_video_gallery.jpg';

export const Team = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className='teamBlock w-1920px h-[2800px]'>
        <div className='block2 flex flex-col content-around gap-y-24 w-11/12 mx-auto'>
          <h2 className='team_text pt-16 text-[#F5F5F5] font-medium text-8xl leading-[122px]'>
            {t('aboutUs.thirdSection.title')}
          </h2>
          <p className='team text-2xl font-medium text-left leading-10 text-slate-100'>
            Наша команда - это настоящие профессионалы своего дела, каждый из
            которых обладает глубокими знаниями и опытом в своей области. Мы не
            просто выполняем свою работу, мы отдаемся ей с преданностью и
            энтузиазмом
          </p>
          <div className='flex flex-col flex-wrap gap-y-36'>
            <div className='pt-40 flex gap-8'>
              <img
                src={photo}
                alt='photos'
                className='w-[22%] h-[22%] max-w-screen-xl'
              />
              <p className='team text-2xl font-medium text-left leading-10 w-11/12 text-slate-100 font-sans'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                quisquam.
              </p>
            </div>
            <div className='pt-40 flex gap-8'>
              <img
                src={photo}
                alt='photos'
                className='w-[22%] h-[22%] max-w-screen-xl'
              />
              <p className='team text-2xl font-medium text-left leading-10 w-11/12 text-slate-100 font-sans'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
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
                harum quod quos pariatur? Ea fugiat quibusdam quis doloribus
                numquam!
              </p>
            </div>
            <div className='pt-40 flex gap-8'>
              <img
                src={photo}
                alt='photos'
                className='w-[22%] h-[22%] max-w-screen-xl'
              />
              <p className='team text-2xl font-medium text-left leading-10 w-1025px text-slate-100 font-sans'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                quisquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
