import "../styles/App.css";

import { Outlet } from "react-router-dom";

import { Header } from "../../widgets";
import { Footer } from "../../widgets";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
