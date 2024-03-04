import "./App.css";
import MainPage from "../pages/mainPage/MainPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/aboutus" element />
        <Route path="/services" element />
        <Route path="/trustus" element />
        <Route path="/contacts" element />
      </Routes>
    </>
  );
}

export default App;
