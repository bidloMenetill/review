const HeaderButton = (props) => {
  return (
    <button
      type="button"
      className="ml-[56px] w-[200px] h-[60px] bg-orange-600 font-normal text-[20px] rounded-full text-[white] text-center justify-center"
    >
      {props.title}
    </button>
  );
};
export default HeaderButton;
