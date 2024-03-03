import peopleBg from "../shared/img/main_page_bg.jpg";
const People = (props) => {
  return (
    <section
      className="h-[1174px] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${peopleBg})` }}
    >
      <section className="container">
        <h2 className="font-medium text-[170px] pt-[100px] text-[#f5f5f5]">
          {props.h2}
        </h2>
        <ul className="flex gap-x-[20px] mt-[93px]">
          <li className="border-[1px] border-[solid] border-orange-600 w-[560px] h-[717px] bg-[#000]">
            <div className="p-[20px]">
              <img
                src={props.firstHuman}
                alt="firstEmployer"
                className="w-[520px] h-[563px]"
              />{" "}
              <p className="font-bold text-[30px] text-center mt-[20px] text-[#fff]">
                {props.p1} <br /> {props.br1}
              </p>
            </div>
          </li>

          <li className="border-[1px] border-[solid] border-orange-600 w-[560px] h-[717px] bg-[#000]">
            <div className="p-[20px]">
              <img
                src={props.secondHuman}
                alt="secondEmployer"
                className="w-[520px] h-[563px]"
              />{" "}
              <p className="font-bold text-[30px] text-center mt-[20px] text-[#fff]">
                {props.p2} <br /> {props.br2}
              </p>
            </div>
          </li>
          <li className="border-[1px] border-[solid] border-orange-600 w-[560px] h-[717px] bg-[#000]">
            <div className="p-[20px]">
              <img
                src={props.thirdHuman}
                alt="thirdEmployer"
                className="w-[520px] h-[563px]"
              />{" "}
              <p className="font-bold text-[30px] text-center mt-[20px] text-[#fff]">
                {props.p3} <br /> {props.br3}
              </p>
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default People;
