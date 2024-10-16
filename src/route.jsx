
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import SpaceCrafts from "./pages/SpaceCrafts/SpaceCrafts";
import Launchers from "./pages/Launchers/Launchers";

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
]);
