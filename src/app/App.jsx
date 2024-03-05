import { useState } from "react";
import "./App.css";
import MainPage from "../pages/mainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";

function App() {
  return (
    <>
      {/* <MainPage /> */}
      <About />
    </>
  );
}

export default App;
