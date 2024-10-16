
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import SpaceCrafts from "./pages/SpaceCrafts/SpaceCrafts";

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
    path: "about",
    element: <div>About</div>,
  },
]);
