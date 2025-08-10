import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { router } from "./routes/routes.jsx";
import { RouterProvider } from "react-router";
import CustomCursor from "./pages/shared/CustomCursor/CustomCursor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomCursor></CustomCursor>
    <RouterProvider router={router} />
  </StrictMode>
);
