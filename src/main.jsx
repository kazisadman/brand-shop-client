import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Router from "./Router/Router";
import Home from "./Pages/Home";
import Addproduct from "./Pages/Addproduct";
import Productspage from "./Pages/Productspage";
import Productdetail from "./Pages/Productdetail";
import Updateproduct from "./Pages/Updateproduct";
import Cart from "./Pages/Cart";
import Authcontext from "./Context/Authcontext";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addproduct",
        element: <Addproduct></Addproduct>,
      },
      {
        path: "/update/:id",
        element: <Updateproduct></Updateproduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cars/${params.id}`),
      },
      {
        path: "/:brand",
        element: <Productspage></Productspage>,
        loader: () => fetch("http://localhost:5000/cars"),
      },
      {
        path: "/:brand/:name",
        element: <Productdetail></Productdetail>,
        loader: () => fetch("/cars.json"),
      },
      {
        path: "cart",
        element: <Cart></Cart>,
        loader: () => fetch("http://localhost:5000/cart"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authcontext>
      <RouterProvider router={router}></RouterProvider>
    </Authcontext>
  </React.StrictMode>
);
