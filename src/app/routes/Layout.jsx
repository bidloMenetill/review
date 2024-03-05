import "../styles/App.css";

import { Outlet } from "react-router-dom";

import { Header } from "../../widgets";
import { Footer } from "../../widgets";

import { Suspense,  } from "react";



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
export const WrappedLayout = () => {
  return (
    <Suspense fallback="...loading">
      <Layout />
    </Suspense>
  );
};
