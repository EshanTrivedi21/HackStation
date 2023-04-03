import React, { useState, useEffect } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Timeline, Food, QR } from "./screens/exports";
import { Login } from "./auth/exports";
import { Modal } from "./utils/Utilities";
import { Loader } from "./components/exports";

function App() {
    const [isMobile, setIsMobile] = useState(null);

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
            element: <Home />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/timeline",
            element: <Timeline />,
        },
        {
            path: "/food",
            element: <Food />,
        },
        {
            path: "qr",
            element: <QR />,
        },
    ]);

    if (isMobile === null) {
        <Loader />;
    } else if (!isMobile) {
        return (
            <Modal
                title="Mobile App Required"
                subtitle="Please use a mobile device and install the app to continue."
            />
        );
    }
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
