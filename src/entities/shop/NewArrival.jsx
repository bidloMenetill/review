import darkFon from '../../shared/img/shop/darkFon.png';
import drums from '../../shared/img/shop/drums.png';

export const NewArrival = () => {
  return (
    <div className='flex justify-between'>
      <div
        className='bg-cover bg-no-repeat bg-center w-[860px] h-[697px] mt-[100px] rounded-[30px]'
        style={{ backgroundImage: `url(${darkFon})` }}
      >
        <p className='font-medium text-[50px] absolute ml-[24px] mt-[10px]'>
          Новое поступление
        </p>
        <img className='w-full' src={drums} alt='drums' />
      </div>
      <div
        className='bg-cover bg-no-repeat bg-center w-[860px] h-[697px] flex justify-center items-center text-center mt-[100px] rounded-[30px]'
        style={{ backgroundImage: `url(${darkFon})` }}
      >
        <div>
          <div className='font-bold text-[50px]'>Ударная установка</div>
          <div className='font-semibold text-[50px] text-[#7B7B7B]'>
            цвет Cobalt Blue, <br />
            10"-12"-16"-22", 14х6.5"
          </div>
          <div className='font-regular text-[25px] mt-[30px]'>Купить</div>
        </div>
      </div>
    </div>
  );
};
