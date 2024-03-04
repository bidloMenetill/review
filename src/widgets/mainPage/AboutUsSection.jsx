import bgAboutUs from "../../shared/img/main_page_bg.jpg";
const AboutUsSection = () => {
  return (
    <section
      className="bg-cover bg-no-repeat -mt-[9px] bg-center h-[625px] "
      style={{ backgroundImage: `url(${bgAboutUs})` }}
    >
      <section className="container mx-auto flex items-center ">
        <div className="flex py-[100px]">
          <h2 className="font-medium text-[170px] text-[#f5f5f5] mr-[40px]">
            О нас
          </h2>

          <div className="w-[3px] mt-[65px] h-[190px]  bg-[#555555] "></div>
        </div>
        <div className="mt-[70px]  ml-[40px]">
          <h3 className="font-medium text-[25px] text-[#F5F5F5] leading-[150%]  [text-decoration-skip-ink:none]">
            <span className="font-medium text-[30px] text-[#DC6441] leading-[150%] underline [text-decoration-skip-ink:none]">
              {" "}
              Q-Rush Studio{" "}
            </span>{" "}
            Музыкальная студия,была основана в 1916 году. <br /> Это уникальное
            место, где каждый артист вне зависимости от жанра может <br />
            воплотить свои творческие идеи без каких-либо ограничений. Здесь вас
            ждет не <br /> только уют и вдохновение, но и специальное
            пространство, наполненное энергией, <br /> чтобы помочь вам
            реализовать самые смелые музыкальные концепции.
          </h3>
        </div>
      </section>
    </section>
  );
};

export default AboutUsSection;
