import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Regester from "../pages/Login/Regester/Regester";
import CheckOut from "../pages/CheckOut/CheckOut";
import Booking from "../pages/Booking/Booking";
import PriveteRoute from "./PriveteRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Regester />,
      },
      {
        path: "/cheakout/:id",
        element: (
          <PriveteRoute>
            <CheckOut />
          </PriveteRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-ecru-nine.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/booking",
        element: (
          <PriveteRoute>
            {" "}
            <Booking />
          </PriveteRoute>
        ),
      },
    ],
  },
]);
