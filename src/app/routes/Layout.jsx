import { Outlet } from 'react-router-dom';

import { Header, Footer } from '../../widgets';
import { NavigationOrange } from '../../features';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <NavigationOrange />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
