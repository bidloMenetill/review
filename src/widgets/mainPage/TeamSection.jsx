import People from "../../entities/People";
import firstHuman from "../../shared/img/first_human_main_page.png";
import secondHuman from "../../shared/img/second_human_main_page.png";
import thirdHuman from "../../shared/img/third_human_main_page.png";
const TeamSection = () => {
  return (
    <>
      <People
        h2={"Команда"}
        firstHuman={firstHuman}
        secondHuman={secondHuman}
        thirdHuman={thirdHuman}
        p1={"Александр Симонов"}
        br={"Барабанщик"}
        p2={"Александр Симонов"}
        br2={"Барабанщик"}
        p3={"Александр Симонов"}
        br3={"Барабанщик"}
      />
    </>
  );
};

export default TeamSection;