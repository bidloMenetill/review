export const OrangeButton = props => {
  return (
    <button
      type='button'
      className='px-[31px] transition-all duration-300 text-center rounded-[20px] lg:px-[65px] py-[7px] bg-[#F93822] font-normal text-[25px] text-[#F5F5F5] hover:opacity-80'
    >
      {props.txt}
    </button>
  );
};
