import peopleBg from "../../shared/img/main_page_bg.jpg";

import OrangeButton from "../../shared/ui/button/OrangeButton";

export const People = (props) => {
  const { br1, br2, br3 } = props;

  return (
    <section
      className="h-[1174px] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${peopleBg})` }}
    >
      <section className="container">
        <h2 className="font-medium text-[170px] pt-[90px] text-[#f5f5f5]">
          {props.h2}
        </h2>
        <ul className="flex gap-x-[20px] mt-[63px] mb-[90px]">
          <li className="border-[1px] border-[solid] border-orange-600 w-[566px] h-[720px] bg-[#000]">
            <div className="p-[20px]">
              <img
                src={props.firstHuman}
                alt="firstEmployer"
                className="w-[520px] h-[563px]"
              />
              <p className="font-bold text-[30px] mb-[5px] text-center mt-[20px] text-[#fff]">
                {props.p1}
                {!br2 && <br />} {br2 ? "Барабанщик" : null}
              </p>
              {!br1 && <OrangeButton key="button1" txt={"Забранировать"} />}
            </div>
          </li>

          <li className="border-[1px] border-[solid]  border-orange-600 w-[560px] h-[717px] bg-[#000]">
            <div className="p-[20px]">
              <img
                src={props.secondHuman}
                alt="secondEmployer"
                className="w-[520px] h-[563px]"
              />
              <p className="font-bold  text-[30px] mb-[5px] text-center mt-[20px] text-[#fff]">
                {props.p2}
                {!br2 && <br />} {br2 ? "Барабанщик" : null}
              </p>
              {!br2 && <OrangeButton key="button2" txt={"Забранировать"} />}
            </div>
          </li>
          <li className="border-[1px] border-[solid] border-orange-600 w-[560px] h-[717px] bg-[#000]">
            <div className="p-[20px] ">
              <img
                src={props.thirdHuman}
                alt="thirdEmployer"
                className="w-[520px] h-[563px]"
              />
              <p className="font-bold text-[30px] mb-[5px] text-center mt-[20px] text-[#fff]">
                {props.p3}
                {!br2 && <br />} {br2 ? "Барабанщик" : null}
              </p>
              {!br3 && <OrangeButton key="button3" txt={"Забранировать"} />}
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
};
