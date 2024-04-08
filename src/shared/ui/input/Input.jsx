export const Input = ({ variant, type = 'text' }) => {
  const styles = {
    filterInput:
      'w-[576px] h-[40px] bg-[#f93822] opacity-30 rounded-[10px] bg-[url("/src/shared/img/shop/searchEngine.svg")] bg-no-repeat bg-center bg-right p-[10px] ',
  };

  const className = variant && styles[variant] ? styles[variant] : 'default';

  return <input type={type} className={`${className}`}></input>;
};
