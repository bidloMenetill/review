import { TrustUs } from "../../pages";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { MainPage } from "../../pages";
import { Error } from "../../pages";

export const Routing = () => {
  const routesArr = [
    {
      path: "/aboutus",
      element: <MainPage />,
    },
    // {
    //   path: "/services",
    //   element,
    // },
    // {
    //   path: "/news",
    //   element,
    // },
    {
      path: "/trustus",
      element: <TrustUs />,
    },
    // {
    //   path: "/contacts",
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
