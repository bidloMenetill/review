import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/App.css';

import { Header, Footer } from '../../widgets';
import { NavigationOrange } from '../../features';

export const Layout = () => {
  return (
    <Suspense fallback='...loading'>
      <Header />
      <main>
        <NavigationOrange />
        <Outlet />
      </main>
      <Footer />
    </Suspense>
  );
};
