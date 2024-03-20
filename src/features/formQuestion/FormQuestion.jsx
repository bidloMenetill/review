import { useMediaQuery } from '../../shared';

export const FormQuestion = () => {
  const isWideScreen = useMediaQuery(
    '(min-width: 1024px) and (max-width: 1480px)'
  );
  const isMobileScreen = useMediaQuery(
    '(min-width: 768px) and (max-width: 1024px)'
  );
  const isIphoneScreen = useMediaQuery(
    '(min-width: 430px) and (max-width: 768px)'
  );
  return (
    <div
      className={`${isWideScreen ? 'max-w-[1024px]' : isMobileScreen ? 'max-w-[768px]' : isIphoneScreen ? 'max-w-[430px]' : ''} h-[425px] mx-[auto] mb-[292px]`}
    >
      <h1
        className={`${isWideScreen ? 'text-[30px]' : isMobileScreen ? 'text-[24px]' : isIphoneScreen ? 'text-[18px]' : 'text-[50px]'} text-center pb-[90px]`}
      >
        Задайте свой вопрос
      </h1>

      <div
        className={`${
          isWideScreen
            ? 'max-w-[900px] flex justify-between'
            : isMobileScreen
              ? 'max-w-[640px] flex justify-between'
              : isIphoneScreen
                ? 'max-w-[360px] justify-normal'
                : 'max-w-[1300px] flex justify-between'
        }  mx-[auto] gap-[20px]`}
      >
        <div className={`${isIphoneScreen ? 'w-[100%]' : 'w-[50%]'}`}>
          <div>
            <input
              className='w-[100%] mb-[27px] py-[18px] pl-[30px] rounded-[30px] outline-none border-solid border-[0.5px] border-[#6d6d6d] bg-neutral-900/[.30] placeholder:text-[#FFFFFF] !important'
              type='text'
              name='name'
              placeholder='Имя'
            />
          </div>

          <div>
            <input
              className='w-[100%] mb-[61px] py-[18px] pl-[30px] rounded-[30px] outline-none border-solid border-[0.5px] border-[#6d6d6d] bg-neutral-900/[.30] placeholder:text-[#FFFFFF] !important'
              type='text'
              placeholder='Номер whatsapp'
            />
          </div>
        </div>
        <div className={`${isIphoneScreen ? 'w-[100%]' : 'w-[50%]'}`}>
          <div>
            <textarea
              className='w-[100%] mb-[47px] pb-[5px] px-[30px] rounded-[30px] outline-none border-solid border-[0.5px] border-[#6d6d6d] bg-neutral-900/[.30] placeholder:text-[#FFFFFF] overflow-hidden'
              type='text'
              placeholder='Текст'
              rows={6}
            />
          </div>

          <div className='flex gap-[27px] items-center'>
            <div>
              <div className='w-full flex gap-2'>
                <input
                  name='check'
                  className='peer relative appearance-none shrink-0 w-[20px] h-[20px] border-solid border-[3px] rounded-[31px] border-[#E2DED3] bg-[#8E8E8E] cheked:border-[#F93822] checked:bg-[#E2DED3] checked:border-[#F93822] transition-all duration-300'
                  type='checkbox'
                />

                <svg
                  className='absolute w-4 h-4 mt-[1.5px] ml-[1.5px] pointer-events-none hidden peer-checked:block stroke-[#F93822] outline-none'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='m4.5 12.75 6 6 9-13.5'
                  />
                </svg>
              </div>
            </div>
            <div>
              <p className={`${isIphoneScreen ? 'text-[12px]' : ''}`}>
                Я согласен(-на) с условиями Политики <br /> Конфиденциальности
              </p>
            </div>
          </div>

          <div
            className={`${isIphoneScreen ? 'text-center' : 'text-left'} mt-[30px]`}
          >
            <button
              type='submit'
              className='bg-[#F93822] rounded-[30px] py-[20px] px-[100px]'
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
