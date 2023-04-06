import "./index.css";
import { useState, useEffect, useContext } from "react";
import { Login } from "./auth/exports";
import { Loader } from "./components/exports";
import { Container } from "./utils/Utilities";
import { Typography } from "@mui/material";
import { Home, Timeline, Food, QR, PS, Others } from "./screens/exports";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AdminControlContext } from "./contexts/adminControlContext";
const Modal = ({ title, subtitle }) => {
    return (
        <Container>
            <div
                className="flex flex-col rounded-lg p-10 gap-2"
                style={{
                    background:
                        "radial-gradient(132.5% 132.5% at 48.94% 50%, #303030 0%, #202020 99.25%)",
                }}
            >
                <Typography variant="modal_title">{title}</Typography>
                <Typography variant="modal_subtitle">{subtitle}</Typography>
            </div>
        </Container>
    );
};

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
            path: "/check-in",
            element: <QR />,
        },
        {
            path: "qr",
            element: <QR />,
        },
        {
            path: "ps",
            element: <PS />,
        },
        {
            path: "others",
            element: <Others />,
        }
    ]);
    let [data, setData] = useState();
    let state = useContext(AdminControlContext);
    state.adminData = data;
    state.setAdminData = setData;
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
