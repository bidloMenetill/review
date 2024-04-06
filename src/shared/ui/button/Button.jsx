export const Button = ({ children, variant, onClick, type = 'button' }) => {
  const styles = {
    buyButton:
      'mt-[21px] rounded-[40px] bg-[#f93822] w-[100px] h-[35px] tablet:w-[200px] lg:w-[250px] xl:w-[344px] tablet:h-[50px] lg:h-[70px] font-montserrat font-semibold text-[12px] tablet:text-[20px] lg:text-[22px] xl:text-[25px]',
    orangeButton:
      'px-[31px] transition-all duration-300 text-center rounded-[20px] lg:px-[65px] py-[7px] bg-[#F93822] font-normal text-[25px] text-[#F5F5F5] hover:opacity-80',
    customButton:
      'h-[50px] text-[#F5F5F5] text-center btn font-medium font-montserrat rounded-[30px] mt-[50px]',
    headerButton:
      'py-[10px]  bg-[#F93822]  rounded-full  text-[white] font-montserrat font-medium xl:w-[200px] xl:h-[60px] xl:text-[20px] xl:px-[24px]  xl:ml-[20px] w-[120px] lg:w-[160px] h-[40px] lg:h-[50px] text-[14px] lg:text-[16px] ml-[12px] lg:ml-[15px]  px-[16px] lg:px-[20px]',
    viewAllButton: 'viewAllButton',
  };

  const className = variant && styles[variant] ? styles[variant] : 'default';

  return (
    <button type={type} className={`${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
