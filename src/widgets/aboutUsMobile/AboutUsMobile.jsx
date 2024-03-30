import rectangle_54 from '../../shared/img/aboutMobile/rectangle_54.png';

export const AboutUsMobile = () => {
  return (
    <>
      <div className='mobileWrapper w-96 bg-slate-900 text-slate-300 mx-auto'>
        <p className='mobileP text-slate-200 w-96 max-h-96 bg-[url("/src/shared/img/aboutMobile/frame_104.png")] bg-auto p-2'>
          <h2 className='mobileH2 text-center text-sm p-2'>О нас</h2>
          <p className='mobileTextP text-center text-sm p-2'>
            Q-Rush Studio - это не просто музыкальная студия, это историческое
            место, в котором с 1916 года звучат мелодии и рождаются хиты. Мы
            гордимся тем, что предоставляем артистам возможность воплотить свои
            идеи в жизнь без каких-либо ограничений.
          </p>
          <p className='mobileTextP text-center text-sm p-2'>
            Наша команда профессионалов готова помочь вам достичь высот в вашем
            творчестве. В Q-Rush Studio вы найдете не только уютные студии и
            вдохновляющие интерьеры, но и специально созданные пространства,
            наполненные творческой энергией.
          </p>
        </p>
        <section className='section2 w-96 h-[1081px] bg-[url("/src/shared/img/aboutMobile/frame_161_1.png")] flex flex-wrap justify-center gap-2'>
          <div className='mobileSection w-[170px]'>
            <img src={rectangle_54} alt='rectangle_54' />
            <h3 className='mobileH3 text-#DC6441 text-sm font-bold'>
              Александр Симонов
            </h3>
            <p className='mobileTextP sectionP text-xs'>
              Преподаватель/запись/микширование живого звука Сертифицированный
              AVID (ProTools)
            </p>
          </div>
          <div className='mobileSection w-[170px]'>
            <img src={rectangle_54} alt='rectangle_54' />
            <h3 className='mobileH3 text-#DC6441 text-sm font-bold'>
              Александр Симонов
            </h3>
            <p className='mobileTextP sectionP text-xs'>
              Преподаватель/запись/микширование живого звука Сертифицированный
              AVID (ProTools)
            </p>
          </div>
          <div className='mobileSection w-[170px]'>
            <img src={rectangle_54} alt='rectangle_54' />
            <h3 className='mobileH3 text-#DC6441 text-sm font-bold'>
              Александр Симонов
            </h3>
            <p className='mobileTextP sectionP text-xs'>
              Преподаватель/запись/микширование живого звука Сертифицированный
              AVID (ProTools)
            </p>
          </div>
          <div className='mobileSection w-[170px]'>
            <img src={rectangle_54} alt='rectangle_54' />
            <h3 className='mobileH3 text-#DC6441 text-sm font-bold'>
              Александр Симонов
            </h3>
            <p className='mobileTextP sectionP text-xs'>
              Преподаватель/запись/микширование живого звука Сертифицированный
              AVID (ProTools)
            </p>
          </div>
          <div className='mobileSection w-[170px]'>
            <img src={rectangle_54} alt='rectangle_54' />
            <h3 className='mobileH3 text-#DC6441 text-sm font-bold'>
              Александр Симонов
            </h3>
            <p className='mobileTextP sectionP text-xs'>
              Преподаватель/запись/микширование живого звука Сертифицированный
              AVID (ProTools)
            </p>
          </div>
          <div className='mobileSection w-[170px]'>
            <img src={rectangle_54} alt='rectangle_54' />
            <h3 className='mobileH3 text-#DC6441 text-sm font-bold'>
              Александр Симонов
            </h3>
            <p className='mobileTextP sectionP text-xs'>
              Преподаватель/запись/микширование живого звука Сертифицированный
              AVID (ProTools)
            </p>
          </div>
        </section>
        <section className='section3 w-[377px] h-[653px] bg-[url("src/shared/img/aboutMobile/Why_Q_Rush_2.png")]'>
          <div>
            <div className='mobileSection3 p-4 text-center'>
              <h2 className='mobileH2'>Почему Q-Rush Studio?</h2>
              <h3>Качество</h3>
              <p>
                Q-Rush Studio дает вам доступ к команде опытных и преданных
                своему делу преподавателей, помещениям и оборудованию, которые
                позволят вам достичь результатов, превосходящих ваши ожидания.
              </p>
              <h3>Разнообразие</h3>
              <p>
                Q-Rush Studio с гордостью принимает людей со всего мира,
                представителей всех слоев общества и разного
                происхождения. Учитесь в среде, где отмечаются различия и
                поощряется сотрудничество.
              </p>
              <h3>Страсть</h3>
              <p>
                Практикуйтесь и развивайтесь вместе с людьми, которые, как и вы,
                инвестируют в свое искусство и творчество. Вы можете быть
                уверены: вашу страсть к звуку разделяют преподаватели, студенты
                и сотрудники Q-Rush Studio.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className='aMobile4 flex flex-col gap-4 bg-#DC6441 text-center p-4'>
            <h3 className='aMobileH3 text-#161616 font-semibold text-base'>
              Превзойдите ожидания и создайте свою легенду прямо здесь.
            </h3>
            <p className='aMobileP text-#F5F5F5 font-semibold text-sm'>
              Превзойдите ожидания и создайте свою легенду прямо здесь.
              Забронируйте свое место в Q Rush Studio прямо сейчас, нажав на
              кнопку ниже, или свяжитесь с Вадимом по номеру +996 700 763736.
            </p>
            <button className='aMobileButton bg-#161616 text-#F5F5F5 p-2'>
              Забронировать
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
