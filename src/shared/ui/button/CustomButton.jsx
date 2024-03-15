export const CustomButton = (props) => {
  return (
    <button
      type="button"
      className="w-[330px] h-[50px] text-[#F5F5F5] text-center btn text-[25px] font-medium font-montserrat rounded-[30px] mt-[50px]"
    >
      <a href="">{props.txt}</a>
    </button>
  );
};
