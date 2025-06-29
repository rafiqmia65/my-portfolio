import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    ErrorBoundary: ErrorPage,
  },
]);
