import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/App.css';


import { Header, Footer } from '../../widgets';


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
