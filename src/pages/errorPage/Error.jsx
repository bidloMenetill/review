import { ErrorPage } from '../../widgets';
import bgError from '../../shared/img/imageError.png';

export const Error = () => {
  return (
    <section
      className='h-[1080px] bg-cover bg-no-repeat -mt-[0px] bg-center font-montserrat'
      style={{ backgroundImage: `url(${bgError})` }}
    >
      <ErrorPage />
    </section>
  );
};
