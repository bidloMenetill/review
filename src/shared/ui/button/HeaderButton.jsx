const HeaderButton = props => {
  return (
    <button
      type='button'
      className='px-[24px]  py-[10px] w-[200px] h-[60px] bg-[#DC6441] font-normal text-[25px] text-[#25100a]'
    >
      {props.txt}
    </button>
  );
};
export default HeaderButton;
