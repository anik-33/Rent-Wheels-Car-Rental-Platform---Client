import { createBrowserRouter } from "react-router";
import MainlayOut from "../layout/MainlayOut";
import Home from "../Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Registration";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainlayOut></MainlayOut>,
    children: [
      {
        path: "/",
        element:<Home></Home> ,
        
      },
      {
        path:"/auth/login",
        element:<Login></Login>
      },
      {
        path:"/auth/registration",
        element:<Register></Register>
      },

    ]
  },
]);