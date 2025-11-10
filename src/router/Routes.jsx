import { createBrowserRouter } from "react-router";
import MainlayOut from "../layout/MainlayOut";
import Home from "../Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Registration";
import AllCar from "../Pages/Allcars/AllCar";
import AddCar from "../Pages/Addcar/AddCar";
import PrivetRoute from "./PrivetRoute";



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
      {
        path:"/All-Cars",
        element:<AllCar></AllCar>,
        loader: () => fetch('http://localhost:3000/allcar')
      },
      {
        path:"/add-cars",
        element:<PrivetRoute><AddCar></AddCar></PrivetRoute>
      }

    ]
  },
]);