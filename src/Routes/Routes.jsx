


import {
    createBrowserRouter,

  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Update from "../Pages/Update";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/update',
            element: <Update></Update>
        }
      ]
    },
  ]);

  export default router