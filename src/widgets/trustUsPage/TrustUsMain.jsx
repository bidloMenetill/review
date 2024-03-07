import trustMainBg from '../../shared/img/trustUs/trustMainBg.svg';


export const TrustUsMain = () => {
  return (
    <div
      className="bg-[url('/src/shared/img/trustUs/trustMainBg.svg')] bg-cover bg-no-repeat bg-center h-[525px] "
      style={{ backgroundImage: `url(${trustMainBg})` }}
    >
      <div className=" w-[1720px] h-[283px] mx-auto text-[#f5f5f5] font-montserrat ">
        <h2 className="text-[100px] font-medium ">Нам доверяют</h2>
        <p className="text-[30px]  font-medium ml-[27px]">
          Все музыканты знают, что студии звукозаписи — это священное
          пространство.Святое в буквальном <br />
          смысле такова: красивое место поклонения в центре Бишкека, чьи стены и
          витражи вот уже несколько <br />
          лет отражают звуки молитв и величайшую музыку, когда-либо созданную.
        </p>
      </div>
    </div>
  );
};
