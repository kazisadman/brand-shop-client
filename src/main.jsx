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
        path: "addproduct",
        element: <Addproduct></Addproduct>,
      },
      {
        path: "/:brand/:name/update",
        element: <Updateproduct></Updateproduct>,
      },
      {
        path: "/:brand",
        element: <Productspage></Productspage>,
        loader: () => fetch("/cars.json"),
      },
      {
        path: "/:brand/:name",
        element: <Productdetail></Productdetail>,
        loader: () => fetch("/cars.json"),
      },
      {
        path: "cart",
        element: <Cart></Cart>,
        loader: () => fetch("/cart.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
