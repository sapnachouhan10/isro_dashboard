
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <Dashboard />
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
