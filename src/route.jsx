
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import SpaceCrafts from "./pages/SpaceCrafts/SpaceCrafts";
import Launchers from "./pages/Launchers/Launchers";
import CustomerSatellites from "./pages/CustomerSatellites/CustomerSatellites";
import Centres from "./pages/Centres/Centres";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <Dashboard />
    ),
  },
  {
    path: "/spacecrafts",
    element: (
    <SpaceCrafts />
    ),
  },
  {
    path: "/launchers",
    element: (
    <Launchers />
    ),
  },
  {
    path: "/customer_satellites",
    element: (
    <CustomerSatellites />
    ),
  }
]);
