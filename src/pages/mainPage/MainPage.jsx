import React from "react";
import Header from "../../widgets/Header";
import IntroductionSection from "../../widgets/mainPage/IntroductionSection";
import AboutUsSection from "../../widgets/mainPage/AboutUsSection";
import TrustUs from "../TrustUs/TrustUs"

function MainPage() {
  return (
    <>
      <Header />
      <IntroductionSection />
      <AboutUsSection />
      {/* <TrustUs /> */}
    </>
  );
}

export default MainPage;
