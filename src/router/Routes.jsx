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
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import ErrorPage from "../components/ErrorPage";
import MyBookings from "../Pages/MyBooking/MyBookings";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainlayOut></MainlayOut>,
    errorElement:<ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/",
        element:<Home></Home> ,
        loader: () => fetch('https://rent-wheels-server-app.vercel.app/latest-cars')
        
      },
      {
        path:"/auth/login",
        element:<Login></Login>
      },
      {
        path:"/auth/registration",
        element:<Register></Register>,
        
      },
      {
        path:"/All-Cars",
        element:<AllCar></AllCar>,
        loader: () => fetch('https://rent-wheels-server-app.vercel.app/allcar')
      },
      {
        path:"/details/:id",
        element:<PrivetRoute><ViewDetails></ViewDetails></PrivetRoute>
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
        path:"/mybooking",
        element:<PrivetRoute><MyBookings></MyBookings>,</PrivetRoute>

      },
      {
        path:"/update-car/:id",
        element:(<PrivetRoute><Update></Update></PrivetRoute>),
        loader: ({params}) => fetch(`https://rent-wheels-server-app.vercel.app/car/${params.id}`)
      }

    ]
  },
]);