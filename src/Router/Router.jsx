import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Regester from "../pages/Login/Regester/Regester";
import CheckOut from "../pages/CheckOut/CheckOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "signup",
        element: <Regester/>
      },
      {
        path: "/cheakout/:id",
        element: <CheckOut/>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      }
    ]
  }
])