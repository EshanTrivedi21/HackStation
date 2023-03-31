import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login } from "./auth/exports";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
