import { Equipment, PriceList, RehearsalBase, Services } from '../../widgets';
import bgService from '../../shared/img/forth_main_bg.jpg';


export const ServicesPage = () => {
  return (
    <>
      <section className="bg-cover bg-no-repeat -mt-[0px] bg-center h-[3500px] font-montserrat" style={{ backgroundImage: `url(${bgService})` }}>
        <Services />
        <PriceList />
        <Equipment />
        <RehearsalBase />
      </section>

    </>

  );
};
