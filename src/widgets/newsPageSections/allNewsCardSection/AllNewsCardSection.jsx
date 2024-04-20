import React from 'react';
import { NewsCard } from '../../../shared';
import about from '../../../shared/img/servicesImg/About.png';

export const AllNewsCardSection = () => {
  const arrNews = [
    {
      id: 1,
      img: about,
      title: 'Пишем звук для нового музыкального шоу.',
      description:
        'Получилось максимально лампово, картинка - сок, музыканты - один из лучших бэндов КР, играют исключительно вживую. Сейчас всё на этапе монтажа, так что скоро сами всё увидите. Рады участвовать в создании такого крутого проекта!',
      warning: '',
      date: '10.04.2024',
    },
    {
      id: 2,
      img: about,
      title:
        'Друзья, сейчас в студии ведутся ремонтные работы, мы работаем, но в ограниченном режиме. Работает только 1 комната из 3. Мы уже исправляем ситуацию',
      description: '',
      warning:
        'по поводу бронирования Записей и Репетиций уточняйте у администратора',
      date: '03.04.2024',
    },
    {
      id: 3,
      img: about,
      title: 'scsdfds',
      description: 'sad',
      warning: 'sadd',
      date: 'sdvdsv',
    },
    {
      id: 4,
      img: about,
      title: 'scsdfds',
      description: 'sad',
      warning: 'sadd',
      date: 'sdvdsv',
    },
  ];
  return (
    <section className='w-[90%] xl:w-[1720px] mx-auto text-[#fff] font-montserrat'>
      <div className='w-full my-[90px]'>
        <h2 className=' text-[32px] sm:text-[40px] font-[600] tablet:text-[80px] text-[#fff] tablet:font-[700]'>
          ВСЕ НОВОСТИ
        </h2>
      </div>
      <div className='w-full tablet:grid tablet:grid-cols-2 tablet:gap-[20px]'>
        {arrNews?.map(el => (
          <div className='mb-[80px]' key={el.id}>
            <NewsCard
              img={el.img}
              title={el.title}
              description={el.description}
              warning={el.warning}
              date={el.date}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
