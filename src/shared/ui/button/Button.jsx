export const Button = ({
  children,
  variant,
  onClick,
  type = 'button',
  className,
}) => {
  const styles = {
    buyButton:
      'bg-[#f93822] w-[247px] h-[44px] text-center flex justify-center items-center sm:w-[384px] sm:h-[66px] py-[10px] px-[24px] md:w-[478px] md:h-[96px] md:py-[19px] md:px-[46px] tablet:w-[200px] lg:w-[250px] xl:w-[344px] tablet:h-[50px] lg:h-[70px] font-montserrat font-semibold text-[12px] sm:text-[22px] md:text-[32px] tablet:text-[20px] lg:text-[22px] xl:text-[25px] rounded-[30px] md:rounded-[58px]',
    orangeButton:
      'px-[31px] transition-all duration-300 text-center rounded-[20px] lg:px-[65px] py-[7px] bg-[#F93822] font-normal text-[25px] text-[#F5F5F5] hover:opacity-80',
    customButton:
      'h-[50px] text-[#F5F5F5] text-center btn font-medium font-montserrat rounded-[30px] mt-[50px]',
    headerButton:
      'py-[10px]  bg-[#F93822]  rounded-full  text-[white] font-montserrat font-medium xl:w-[200px] xl:h-[60px] xl:text-[20px] xl:px-[24px]  xl:ml-[20px] w-[120px] lg:w-[160px] h-[40px] lg:h-[50px] text-[14px] lg:text-[16px] ml-[12px] lg:ml-[15px]  px-[16px] lg:px-[20px]',
    viewAllButton: 'viewAllButton',
    moreInfoButton:
      'flex px-[24px] py-[10px] justify-center w-[248px] h-[50px] items-center gap-[10px] flex-shrink-0 rounded-[40px] text-[#E2DED3] bg-[var(--orange-600,_#F93822)] font-[Montserrat] text-[20px] not-italic font-medium leading-[normal]',
    serviceButton:
      'sm:w-auto sm:h-auto text-center font-[300] rounded-[500px] text-[12px] py-[10.5px] px-[30px] tablet:text-[28px] lg:rounded-[50px] bg-[#F93822] font-normal lg:text-[26px] xl:text-[30px] text-[#F5F5F5] lg:py-[18px] xl:py-[14px] lg:px-[60px] xl:px-[75px]',
  };

  const classNames = [variant && styles[variant], className];

  const combinedClassName = classNames.filter(Boolean).join(' ');

  return (
    <button type={type} className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};
