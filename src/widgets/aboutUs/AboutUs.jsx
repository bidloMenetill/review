// import about from '../shared/img/about.png'

import { useTranslation } from 'react-i18next';
import rectangle from '../../shared/img/rectangle_61.png';


export const AboutUs = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className="bg-[url('/src/shared/img/about.png')] h-[974px] w-[1920px]">

        <div className="flex justify-center items-center">
          <div className="py-32 flex flex-row gap-[76px] w-[1719px]">
            <div className="w-[938px] flex flex-col gap-6">
              <h2 className="text-[#F5F5F5] font-medium text-8xl leading-[122px]">{t('aboutUs.firstSection.title')}</h2>
              <p className="text-[#F5F5F5] font-medium text-xl leading-10">
                {/* Q-Rush Studio - это не просто музыкальная студия, это историческое место, в котором с 1916 года звучат мелодии и рождаются хиты. Мы гордимся тем, что предоставляем артистам возможность воплотить свои идеи в жизнь без каких-либо ограничений. Наша команда профессионалов готова помочь вам достичь высот в вашем творчестве.
                В Q-Rush Studio вы найдете не только уютные студии и вдохновляющие интерьеры, но и специально созданные пространства, наполненные творческой энергией. Здесь вы можете забыть о времени и просто погрузиться в создание музыки. Наши звукорежиссеры и инженеры звука обеспечат вас высококачественным звуком, а наш оборудованный инвентарь позволит воплотить ваши самые смелые музыкальные концепции в реальность.
                Не важно, какой жанр вы предпочитаете или насколько сложные ваши идеи - в Q-Rush Studio мы готовы воплотить любые музыкальные фантазии. Доверьте свое творчество профессионалам и ощутите магию создания музыки в нашей студии. */}
                {t('aboutUs.firstSection.upperTitle')}
              </p>
            </div>
            <div>
              <img src={rectangle} alt="rectangle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
