export const Button = (props) => {
  return (
    <button
      className="pr-[24px] button pl-[24px] pt-[12px] pb-[12px] relative transition duration-300 bg-white text-white hover:text-orange hover:after:text-orange"
      data-text={props.txt}
    >
      <a href=""></a>
    </button>
  );
}