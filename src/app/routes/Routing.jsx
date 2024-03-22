import { Route, Routes } from 'react-router-dom';
import {
  TrustUs,
  MainPage,
  Error,
  About,
  ServicesPage,
  Galery,
  ShopPage,
  Faq,
  NewsPage,
  AboutMobile,
} from '../../pages';
import { useMediaQuery } from '../../shared';
import { Layout } from './Layout';

export const Routing = () => {
  const isMobile = useMediaQuery('(min-width: 385px)');
  const routesArr = [
    {
      path: '/aboutus',
      element: isMobile ? <About /> : <AboutMobile />,
    },
    {
      path: '/trustus',
      element: <TrustUs />,
    },
    {
      path: '/services',
      element: <ServicesPage />,
    },
    {
      path: '/galery',
      element: <Galery />,
    },
    {
      path: '/faq',
      element: <Faq />,
    },
    {
      path: '/news',
      element: <NewsPage />,
    },

    // {
    //   path: '/contacts',
    //   element,
    // },

    {
      path: '/shop',
      element: <ShopPage />,
    },
  ];
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        {routesArr?.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Route>
      <Route path='*' element={<Error />} />
    </Routes>
  );
};
