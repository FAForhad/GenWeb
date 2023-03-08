import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Start from "../../Pages/Start/Start";
import Template1 from "../../Pages/Templates/Template1/Template1";
import Template2 from "../../Pages/Templates/Template2/Template2";
const Main = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Start></Start>,
    },
    {
      path: "/home",
      element: <Home></Home>,
    },
    {
      path: "/template1",
      element: <Template1></Template1>,
    },
    {
      path: "/template2",
      element: <Template2></Template2>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Main;
