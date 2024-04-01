import { Route, Routes } from 'react-router-dom';
import {
  TrustUsPage,
  HomePage,
  ErrorPage,
  AboutUsPage,
  ServicesPage,
  Galery,
  ShopPage,
  FaqPage,
  NewsPage,
} from '../../pages';
import { Layout } from './Layout';

export const Routing = () => {
  const routesArr = [
    {
      path: '/about-us',
      element: <AboutUsPage />,
    },
    {
      path: '/trust-us',
      element: <TrustUsPage />,
    },
    {
      path: '/services',
      element: <ServicesPage />,
    },
    {
      path: '/gallery',
      element: <Galery />,
    },
    {
      path: '/faq',
      element: <FaqPage />,
    },
    {
      path: '/news',
      element: <NewsPage />,
    },
    {
      path: '/shop',
      element: <ShopPage />,
    },
  ];
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        {routesArr?.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};
