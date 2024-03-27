import { useState } from 'react';
import { Modal } from '../modalWindow/Modal';

export const FeedbackForm = () => {
  const [open, setOpen] = useState(false);
  const onHandleSubmit = e => {
    e.preventDefault();
  };
  return (
    <section className='max-w-[600px] mx-[auto] pb-[150px] xl:max-w-[1300px] lg:max-w-[900px] text-[#FFFFFF]'>
      <h2 className='text-center text-[30px] pb-[50px] xl:text-[50px] lg:text-[30px]'>
        Задайте свой вопрос
      </h2>

      <form
        onSubmit={onHandleSubmit}
        className='mx-[auto] gap-[20px] xl:flex xl:justify-between xl:max-w-[1300px] lg:max-w-[900px]  lg:flex lg:justify-between'
      >
        <div className='w-[50%] sm:w-[100%]'>
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
        <div className='w-[50%] sm:w-[100%]'>
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
                  id='checkbox'
                  name='check'
                  className='peer relative appearance-none shrink-0 w-[20px] h-[20px] border-solid border-[3px] rounded-[31px] border-[#E2DED3] bg-[#8E8E8E] cheked:border-[#F93822] checked:bg-[#E2DED3] checked:border-[#F93822] transition-all duration-300 cursor-pointer'
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
            <label for='checkbox' className='cursor-pointer'>
              <p className='xl:text-[14px] md:text-[12px]'>
                Я согласен(-на) с условиями Политики <br /> Конфиденциальности
              </p>
            </label>
          </div>

          <div className='mt-[30px] sm:text-center'>
            <button
              type='submit'
              onClick={() => setOpen(true)}
              className='bg-[#F93822] rounded-[30px] py-[20px] px-[100px]'
            >
              Отправить
            </button>
          </div>
        </div>
      </form>
      <Modal openModal={open} setOpenModal={setOpen} />
    </section>
  );
};
