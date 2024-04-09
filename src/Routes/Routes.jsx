


import {
    createBrowserRouter,

  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Update from "../Pages/Update";
import EstateDetails from "../Components/EstateDetails";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ProtectedRoute from "../ProtectedRoutes/ProtectedRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/estates.json')
        },
        {
            path: '/update',
            element: <Update></Update>
        },
        {
          path: '/estate-details/:id',
          element: <ProtectedRoute> <EstateDetails></EstateDetails> </ProtectedRoute>,
          loader: () => fetch('/estates.json')
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path:'/login',
          element: <Login></Login>
        }
      ]
    },
  ]);

  export default router