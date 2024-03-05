import React from "react";
import Header from "../../widgets/header/Header";
import IntroductionSection from "../../widgets/mainPage/IntroductionSection";
import AboutUsSection from "../../widgets/mainPage/AboutUsSection";

function MainPage() {
  return (
    <>
      <Header />
      <IntroductionSection />
      <AboutUsSection />
    </>
  );
}

export default MainPage