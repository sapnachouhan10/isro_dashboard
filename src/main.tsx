
import React from "react";
import { createRoot } from "react-dom/client";
import { router } from "./route";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
