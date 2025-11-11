import { createBrowserRouter } from "react-router";
import MainlayOut from "../layout/MainlayOut";
import Home from "../Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Registration";
import AllCar from "../Pages/Allcars/AllCar";
import AddCar from "../Pages/Addcar/AddCar";
import PrivetRoute from "./PrivetRoute";
import MyListing from "../Pages/Listing/MyListing";
import Update from "../Pages/Upadate/Update";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainlayOut></MainlayOut>,
    children: [
      {
        path: "/",
        element:<Home></Home> ,
        loader: () => fetch('http://localhost:3000/latest-cars')
        
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
      },
      {
        path:"my-listing",
        element:(<PrivetRoute><MyListing></MyListing></PrivetRoute>)
      },
      {
        path:"/update-car/:id",
        element:(<PrivetRoute><Update></Update></PrivetRoute>),
        loader: ({params}) => fetch(`http://localhost:3000/car/${params.id}`)
      }

    ]
  },
]);