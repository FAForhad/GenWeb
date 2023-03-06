import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Start from "../../Pages/Start/Start";
const Main = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Start></Start>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Main;
