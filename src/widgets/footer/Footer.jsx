import rush from '../../shared/img/logofooter.png';
import instagram from '../../shared/img/footer/instagram.svg';
import telegram from '../../shared/img/footer/telegram.svg';
import youTube from '../../shared/img/footer/youtube.svg';
import whatsapp from '../../shared/img/footer/whatsapp.svg';

export const Footer = () => {
  return (
    <footer className='w-[1920px] h-[982px] '>
      <div className='h-[704px]  bg-black pt-[50px] pb-[50px] pr-[100px] pl-[100px]'>
        <img className='w-[415px] h-[100px] mb-[50px]' src={rush} alt='log' />
        <div className='text-white flex justify-around  font-montserrat text-[25px] ml-[50px]'>
          <ul>
            <li className='font-bold pb-[32px]'>
              <a href=''>О нас</a>
            </li>
            <li className='pb-[32px]'>
              <a href=''>Команда</a>
            </li>
            <li className='pb-[32px]'>
              <a href=''>Нам доверяют</a>
            </li>
            <li>
              <a href=''>Галерея</a>
            </li>
          </ul>
          <ul>
            <li className='font-bold pb-[32px]'>
              <a href=''>Новости</a>
            </li>
            <li className='pb-[32px]'>
              <a href=''>Отзывы</a>
            </li>
            <li className='pb-[32px]'>
              <a href=''>Награды</a>
            </li>
            <li className='pb-[32px]'>
              <a href=''>Документы</a>
            </li>
            <li className='pb-[32px]'>
              <a href=''>Часто задаваемые вопросы</a>
            </li>
            <li>
              <a href=''>Информация о Партнерах</a>
            </li>
          </ul>
          <ul>
            <li className='font-bold pb-[32px]'>
              <a href=''>Услуги</a>
            </li>
            <li className='pb-[32px]'>
              <a href=''>Репетиционная База</a>
            </li>
            <li className='pb-[32px]'>
              <a href=''>Студия Звукозаписи</a>
            </li>
            <li className='pb-[32px]'>
              <a href=''>Музыкальные Курсы</a>
            </li>
            <li>
              <a href=''>Магазин</a>
            </li>
          </ul>
          <ul>
            <li className='font-bold pb-[32px]'>
              <a href=''>Контакты</a>
            </li>
            <li className='pb-[32px]'>
              <a href=''>Адрес: Чынгыза Айтматова 1а (школа Билимкана)</a>
            </li>
            <li className='pb-[32px]'>
              <a href=''>Телефон: +996 700 763736</a>
            </li>
            <li>
              <a href=''>Email: qrushstudio.music@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className='flex-row flex justify-center gap-[100px] mt-[30px]'>
          <img src={telegram} alt='' />
          <img src={instagram} alt='' />
          <img src={youTube} alt='' />
          <img src={whatsapp} alt='' />
        </div>
      </div>
      <div className='h-[278px] text-white bg-black/90 flex flex-col justify-center items-center font-montserrat text-[20px]'>
        <span className='mb-[10px]'>
          2024 Q Rush Studio Политика Конфидициальности
        </span>
        <span>Made By GEEKS PRO</span>
      </div>
    </footer>
  );
};
