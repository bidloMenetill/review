import Header from "../../widgets/Header";
import IntroductionSection from "../../widgets/mainPage/IntroductionSection";
import AboutUsSection from "../../widgets/mainPage/AboutUsSection";
import DigitalInformationSection from "../../widgets/mainPage/DigitalInformationSection";
import TeamSection from "../../widgets/mainPage/TeamSection";
import RehearsalRoomsSection from "../../widgets/mainPage/RehearsalRoomsSection";
import ServicesSection from "../../widgets/mainPage/ServicesSection";

function MainPage() {
  return (
    <>
      <Header />
      <IntroductionSection />
      <AboutUsSection />
      <DigitalInformationSection />
      <TeamSection />
      <RehearsalRoomsSection />
      <ServicesSection />
    </>
  );
}

export default MainPage;
