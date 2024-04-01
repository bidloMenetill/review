import { useState } from 'react';
import { Modal } from '../modalWindow/Modal';
import { Button } from '../../shared';

export const FormFeedback = () => {
  const [open, setOpen] = useState(false);
  const onHandleSubmit = e => {
    e.preventDefault();
  };
  return (
    <section className='max-w-[546px] mx-[20px] sm:mx-[auto] pb-[150px] xl:max-w-[1300px] lg:max-w-[900px] text-[#FFFFFF]'>
      <h2 className='text-left w-[195px] pb-[23px] text-[20px] sm:w-full sm:text-center sm:pb-[90px] sm:text-[24px] xl:text-[50px] lg:text-[30px]'>
        Задайте свой вопрос
      </h2>

      <form
        onSubmit={onHandleSubmit}
        className='max-w-[576px] mx-[auto] gap-[20px] xl:flex xl:justify-between xl:max-w-[1300px] lg:max-w-[900px] lg:flex lg:justify-between'
      >
        <div className='w-full'>
          <div>
            <input
              className='w-[100%] mb-[27px] py-[10px] pl-[8px] sm:py-[18px] sm:pl-[30px] rounded-[10px] sm:rounded-[30px] outline-none border-solid border-[0.5px] border-[#fff] sm:border-[#6d6d6d] bg-transparent sm:bg-neutral-900/[.30] placeholder:text-[#FFFFFF]'
              type='text'
              name='name'
              placeholder='Имя'
            />
          </div>

          <div>
            <input
              className='w-[100%] mb-[27px] py-[10px] pl-[8px] sm:py-[18px] sm:pl-[30px] rounded-[10px] sm:rounded-[30px] outline-none border-solid border-[0.5px] border-[#fff] sm:border-[#6d6d6d] bg-transparent sm:bg-neutral-900/[.30] placeholder:text-[#FFFFFF]'
              type='text'
              placeholder='Номер whatsapp'
            />
          </div>
        </div>
        <div className='w-[100%]'>
          <div>
            <textarea
              className='w-[100%] sm:mb-[47px] py-[15px] px-[30px] rounded-[10px] sm:rounded-[30px] outline-none border-solid border-[0.5px] border-[#fff] sm:border-[#6d6d6d] bg-transparent sm:bg-neutral-900/[.30] placeholder:text-[#FFFFFF] overflow-hidden'
              type='text'
              placeholder='Текст'
              rows={6}
            />
          </div>

          <div className='flex gap-[5px] sm:gap-[27px] items-center pt-[10px]'>
            <div>
              <div className='w-full flex gap-2'>
                <input
                  id='checkbox'
                  name='check'
                  className='peer relative appearance-none shrink-0 w-[24px] h-[24px] sm:w-[20px] sm:h-[20px] border-solid border-[3px] rounded-[31px] border-[#E2DED3] bg-[#8E8E8E] cheked:border-[#F93822] checked:bg-[#E2DED3] checked:border-[#F93822] transition-all duration-300 cursor-pointer'
                  type='checkbox'
                />

                <svg
                  className='absolute w-[20px] h-[20px] mt-[2px] ml-[2px] sm:w-4 sm:h-4 sm:mt-[1.5px] sm:ml-[1.5px] pointer-events-none hidden peer-checked:block stroke-[#F93822] outline-none'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m4.5 12.75 6 6 9-13.5'
                  />
                </svg>
              </div>
            </div>
            <label htmlFor='checkbox' className='cursor-pointer'>
              <p className='text-[14px] font-[600] xl:text-[14px] md:text-[12px]'>
                Я согласен(-на) с условиями Политики <br /> Конфиденциальности
              </p>
            </label>
          </div>

          <div className='mt-[30px] text-right sm:text-center'>
            <Button variant='orangeButton'> Отправить</Button>
          </div>
        </div>
      </form>
      <Modal openModal={open} setOpenModal={setOpen} />
    </section>
  );
};
