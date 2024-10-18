import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard/Dashboard";
import SpaceCrafts from "./pages/SpaceCrafts/SpaceCrafts";
import Launchers from "./pages/Launchers/Launchers";
import CustomerSatellites from "./pages/CustomerSatellites/CustomerSatellites";
import Centres from "./pages/Centres/Centres";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/spacecrafts",
        element: <SpaceCrafts />,
      },
      {
        path: "/launchers",
        element: <Launchers />,
      },
      {
        path: "/customer_satellites",
        element: <CustomerSatellites />,
      },
      {
        path: "/centres",
        element: <Centres />,
      },
    ],
  },
]);
