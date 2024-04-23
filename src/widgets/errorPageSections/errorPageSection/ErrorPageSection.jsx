import { Button } from '../../../shared';
import bgError from '../../../shared/img/imageError.png';

export const ErrorPageSection = () => {
  return (
    <section
      className='w-full mx-[auto] h-[1080px] bg-cover bg-no-repeat -mt-[0px] bg-center font-montserrat'
      style={{ backgroundImage: `url(${bgError})` }}
    >
      <div className='max-w-[500px] mx-auto pt-[318px] xl:max-w-[840px] lg:max-w-[640px]'>
        <div>
          <h1 className='text-[120px] text-[#F93822] text-center font-[700] xl:text-[150px] lg:text-[130px]'>
            404
          </h1>
        </div>
        <div>
          <p className='text-[16px] text-[#fff] text-center font-[500] xl:text-[26px] lg:text-[20px]'>
            Кажется, вы потерялись на просторах Интернета! Запрошенная вами
            страница не существует или была удалена.
          </p>
        </div>
        <div className='text-center mt-[49px]'>
          <Button variant='orangeButton'>На главную</Button>
        </div>
      </div>
    </section>
  );
};
