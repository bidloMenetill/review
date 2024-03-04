import { useEffect, useState } from "react";
import bgFirst from "../shared/img/first_bg_rooms.jpg";
import bgSecond from "../shared/img/second_bg_rooms.jpg";
import bgThird from "../shared/img/third_bg_rooms.jpg";
import bgFourth from "../shared/img/forth_bg_rooms.jpg";
import bgFifth from "../shared/img/fifth_bg_rooms.jpg";
import StaticBgRehearsalRooms from "../shared/StaticBgRehearsalRooms";
import line from "../shared/img/line_in_main.svg";
import whiteLine from "../shared/img/white_line.svg";
export const images = [bgFirst, bgSecond, bgThird, bgFourth, bgFifth];

const ChangeBgRehearsalRooms = () => {
  const [scrollTriggered, setScrollTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3030) {
        setScrollTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`flex mx-auto items-center bg-[#000] ${
        scrollTriggered ? "transition-background-image" : ""
      }`}
    >
      <section className="container">
        {scrollTriggered ? <ChangingBackground /> : <StaticBgRehearsalRooms />}
      </section>
    </section>
  );
};

const ChangingBackground = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="h-[1174px] relative  my-[50px] bg-cover bg-no-repeat bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      <h3 className="pt-[100px] font-medium text-center text-[50px] text-[#f5f5f5]">
        Репетиционные залы
      </h3>
      {/* <div className="absolute bottom-[50px] left-[250px] z-10">
        {images.map((bg, idx) => (
          <img key={bg} src={index === idx ? whiteLine : line} alt="line" />
        ))}
      </div> */}
    </section>
  );
};

export default ChangeBgRehearsalRooms;
