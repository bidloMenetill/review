export const Input = ({ variant, type = 'text', placeholder }) => {
  const styles = {
    filterInput:
      'w-[850px] h-[46px] md:h-[66px] font-semibold text-[20px] text-[#e2ded3] bg-[rgba(22,_22,_22,_0.7)] border-[1px] border-[solid] border-[#e2ded3] rounded-[30px] px-[20px] py-0 ',
  };

  const className = variant && styles[variant] ? styles[variant] : 'default';

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${className}`}
    ></input>
  );
};
