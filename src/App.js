import React, { useState, useEffect } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./auth/exports";
import AuthCheck from "./component/AuthCheck";

function App() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 600) {
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <AuthCheck>
                    <div>Home</div>,
                </AuthCheck>
            ),
        },
        {
            path: "/login",
            element: <Login />,
        },
    ]);

    if (!isMobile) {
        return (
            <div className="mobile">
                <h1>Not Mobile</h1>
            </div>
        );
    }

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
