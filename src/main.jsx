import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Router from "./Router/Router";
import Home from "./Pages/Home";
import Addproduct from "./Pages/Addproduct";
import Productspage from "./Pages/Productspage";

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
        path: "/:brand",
        element: <Productspage></Productspage>,
        loader: () => fetch("/cars.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
