export const Modal = ({ openModal, setOpenModal }) => {
  return (
    <div
      className={`${openModal ? 'bg-[#0000005b] w-[206vh] h-[100vh] fixed top-[0] flex items-center opacity-1' : ' opacity-0'} ease-out duration-[0.5s]`}
    >
      <div
        className={`${openModal ? 'absolute h-[300px] w-full bg-gradient-to-t from-[#160503] from-0% via-black to-[#160503] text-center opacity-1' : 'hidden opacity-0'}`}
      >
        <p className='text-center text-[30px] font-[500] pt-[96px] w-[918px] mx-auto'>
          Благодарим за обращение! Ваше сообщение отправлено. В билжайшее время
          на ваш вопрос ответит наш сотрудник.
        </p>
        <span
          onClick={() => setOpenModal(false)}
          className='cursor-pointer text-[20px] absolute top-[72px] right-[294px]'
        >
          Закрыть
        </span>
      </div>
    </div>
  );
};
