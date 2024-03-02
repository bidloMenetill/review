import React, { useEffect, useState } from "react";
import soundFrame from "../shared/img/soundFrame.png";
import line from "../shared/img/line_in_main.svg";
import whiteLine from "../shared/img/white_line.svg";
import arrayLeft from "../shared/img/array_left.svg";
import arrayRight from "../shared/img/array_right.svg";

import bgFirst from "../shared/img/first_main_bg.jpg";
import bgSecond from "../shared/img/second_main_bg.jpg";
import bgThird from "../shared/img/third_main_bg.jpg";
import bgFourth from "../shared/img/forth_main_bg.jpg";
import bgFifth from "../shared/img/fifth_main_bg.jpg";

const ChangeBgIntroduction = () => {
  const bgForIntroduction = [bgFirst, bgSecond, bgThird, bgFourth, bgFifth];
  const [indexIntroduction, setIndexIntroduction] = useState(0);
  const [bgAnimation, setBgAnimation] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexIntroduction(
        (prevIndex) => (prevIndex + 1) % bgForIntroduction.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [bgForIntroduction]);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setIndexIntroduction((prevIndex) =>
        prevIndex === 0 ? bgForIntroduction.length - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setIndexIntroduction((prevIndex) =>
        prevIndex === bgForIntroduction.length - 1 ? 0 : prevIndex + 1
      );
    }
    setBgAnimation("transition-all duration-1000");
    setTimeout(() => {
      setBgAnimation("");
    }, 1000);
  };

  return (
    <section
      className={`pt-[256px] bg-cover flex justify-center flex-col bg-center bg-no-repeat ${bgAnimation}`}
      style={{
        backgroundImage: `url(${bgForIntroduction[indexIntroduction]})`,
      }}
    >
      <section className="w-[1720px] mx-auto relative">
        <h2 className="font-montserrat font-bold text-[50px] text-center  text-[#f5f5f5]">
          Добро пожаловать в мир звука и творчества!
        </h2>
        <h1 className="mt-[50px] font-montserrat font-medium text-[30px] text-center text-[#f5f5f5]">
          Откройте для себя искусство звукозаписи с{" "}
          <span className="font-semibold underline [text-decoration-skip-ink:none] text-[#dc6441]">
            Q-Rush.
          </span>{" "}
          <br />
          Создайте звук, который будет слышен и запомнится!
        </h1>
        <div
          className="absolute  flex justify-center items-center left-[-20px] top-[145px]  rounded-[40px] w-[60px] h-[60px] backdrop-filter backdrop-blur-2xl bg-[rgba(255,_255,_255,_0.5)] cursor-pointer transform hover:scale-110 bg-[rgba(255,255,255,0.13)]"
          onClick={() => handleArrowClick("left")}
        >
          <img src={arrayLeft} alt="" className="p-[7px]" />
        </div>
        <div
          className="absolute flex justify-center items-center right-[-20px] top-[145px] rounded-[40px] w-[60px] h-[60px] backdrop-filter backdrop-blur-2xl bg-[rgba(255,255,255,0.5)] cursor-pointer transform hover:scale-110 bg-[rgba(255,255,255,0.04)]"
          onClick={() => handleArrowClick("right")}
        >
          <img src={arrayRight} alt="" className="p-[1px]" />
        </div>
        <div className="flex justify-center ">
          <img
            src={soundFrame}
            className="text-center mt-[134px]"
            alt="soundFrames"
          />
        </div>
      </section>
      <div
        className={`mt-[169px] mb-[71px] pl-[96px] gap-x-[12px] flex mx-0 container`}
      >
        {bgForIntroduction.map((bg, index) => (
          <img
            key={index}
            src={indexIntroduction === index ? whiteLine : line}
            alt="line"
          />
        ))}
      </div>
    </section>
  );
};

export default ChangeBgIntroduction;
