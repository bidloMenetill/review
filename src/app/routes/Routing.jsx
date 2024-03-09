import { Route, Routes } from 'react-router-dom';
import {
  TrustUs,
  MainPage,
  Error,
  About,
  ServicesPage,
  Galery,
} from '../../pages';
import { Layout } from './Layout';


export const Routing = () => {
  const routesArr = [
    {
      path: '/aboutus',
      element: <About />,
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
    // {
    //   path: '/news',
    //   element,
    // },

    // {
    //   path: '/contacts',
    //   element,
    // },
  ];
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        {routesArr?.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
