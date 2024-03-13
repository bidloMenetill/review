import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/App.css';


import { Header, Footer } from '../../widgets';
import { NavigationOrange } from '../../features';


export const Layout = () => {

  return (
    <>
      <Header />
      <main>
        <NavigationOrange/>
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
