import React, { useState, useEffect } from "react";
import "./index.css";
import { Login } from "./auth/exports";
import AuthCheck from "./component/AuthCheck";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Modal } from "./utils/Utilities";

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
                    <Modal title="Hi" subtitle="Welcome to the jungle bitch"/>
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
            <Modal title="Mobile App Required" subtitle="Please use a mobile device and install the app to continue."/>
        );
    }

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
