import React from "react";
import "./index.css";
import Blocked from "./blocked/Blocked";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./auth/exports";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/blocked",
      element: <Blocked />,
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
