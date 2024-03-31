import bgAboutUs from '../../../shared/img/main_page_bg.jpg';
import { DigitalInformationSection } from '../../../features';

export const AboutUsSectionHomePage = () => {
  return (
    <section
      className='bg-cover bg-no-repeat -mt-[9px] bg-center h-auto '
      style={{ backgroundImage: `url(${bgAboutUs})` }}
    >
      <section className='max-w-[90%] xl:container mx-auto flex justify-center items-center '>
        <div className='flex flex-col pt-[100px]'>
          <h3 className='font-[Montserrat] text-[#F5F5F5] max-w-[1176px] lg:max-w-[1356px] text-center text-[30px] not-italic font-medium leading-[normal]'>
            Q-Rush Studio музыкальная студия в центре Бишкека, была основана в
            2016 году. Это уникальное место, где каждый может воплотить свои
            творческие идеи в жизнь. Сейчас у нас 3 основных направления:
            звукозапись, репетиционная база, музыкальные курсы. У нас вы можете
            записать свою песню, порепетировать самостоятельно или с группой,
            или же обучиться игре на музыкальном инструменте
          </h3>
          <h3 className='font-[Montserrat] text-[#F5F5F5]  text-center px-[109px] pt-[30px] text-[30px] not-italic font-medium leading-[normal]'>
            Не жди следующего понедельника, бронируй время в студии уже сейчас!
            <br />
            <span className='font-[Montserrat] pt-[20px] lg:mt-0 text-[#F93822] text-[30px] not-italic font-medium leading-[normal] [text-decoration-line:underline]'>
              Звонки/WhatsApp +996 700 76 37 36
            </span>
          </h3>
        </div>
      </section>
      <DigitalInformationSection />
    </section>
  );
};
