import bgAboutUs from '../../shared/img/main_page_bg.jpg';
import { DigitalInformationSection } from './DigitalInformationSection';

export const AboutUsSection = () => {
  return (
    <section
      className='bg-cover bg-no-repeat -mt-[9px] bg-center h-[991px] '
      style={{ backgroundImage: `url(${bgAboutUs})` }}
    >
      <section className='container mx-auto flex justify-center items-center '>
        <div className='flex flex-col pt-[100px]'>
          <h3 className='font-[Montserrat] text-[#F5F5F5]  text-center text-[30px] not-italic font-medium leading-[normal]'>
            Q-Rush Studio музыкальная студия в центре Бишкека, была основана в
            2016 году. <br />
            Это уникальное место, где каждый может воплотить свои творческие
            идеи в жизнь. <br />
            Сейчас у нас 3 основных направления: звукозапись, репетиционная
            база, музыкальные <br /> курсы. У нас вы можете записать свою песню,
            порепетировать самостоятельно или с <br /> группой, или же обучиться
            игре на музыкальном инструменте
          </h3>
          <h3 className='font-[Montserrat] text-[#F5F5F5]  text-center px-[109px] pt-[30px] text-[30px] not-italic font-medium leading-[normal]'>
            Не жди следующего понедельника, бронируй время в студии уже сейчас!{' '}
            <br />{' '}
            <span className='font-[Montserrat] text-[#F93822] text-[30px] not-italic font-medium leading-[normal] [text-decoration-line:underline]'>
              Звонки/WhatsApp +996 700 76 37 36
            </span>
          </h3>
        </div>
      </section>
      <DigitalInformationSection />
    </section>
  );
};
