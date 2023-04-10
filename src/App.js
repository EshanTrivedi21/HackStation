import "./index.css";
import { useState, useEffect, useContext } from "react";
import { Login } from "./auth/exports";
import { Loader } from "./components/exports";
import { Container } from "./utils/Utilities";
import { Typography } from "@mui/material";
import { Home, Timeline, Food, QR, PS, Others } from "./screens/exports";
import { Dashboard, Scan, Controls, Other, Scanned, Users, Manual } from "./admin/exports";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AdminControlContext } from "./contexts/adminControlContext";
import AuthCheck from "./utils/AuthCheck";
import AdminCheck from "./utils/AdminCheck";
import { UserDataContext } from "./contexts/userDataContext";
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
            if (window.innerWidth > 500) {
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
                    <Home />
                </AuthCheck>
            ),
        },
        {
            path: "login",
            element: <Login />,
        },
        {
            path: "timeline",
            element: <Timeline />,
        },
        {
            path: "food",
            element: (
                <AuthCheck>
                    <Food />
                </AuthCheck>
            ),
        },
        {
            path: "check-in",
            element: <QR id="Check In" />,
        },
        {
            path: "qr",
            element: <QR id="Food" />,
        },
        {
            path: "ps",
            element: (
                <AuthCheck>
                    <PS />
                </AuthCheck>
            ),
        },
        {
            path: "others",
            element: (
                <AuthCheck>
                    <Others />
                </AuthCheck>
            ),
        },
        {
            path: "admin",
            element: (
                <AdminCheck>
                    <Dashboard />
                </AdminCheck>
            ),
        },
        {
            path: "scan",
            element: (
                <AdminCheck>
                    <Scan />
                </AdminCheck>
            ),
        },
        {
            path: "controls",
            element: (
                <AdminCheck>
                    <Controls />
                </AdminCheck>
            ),
        },
        {
            path: "admin-others",
            element: (
                <AdminCheck>
                    <Other />
                </AdminCheck>
            ),
        },
        {
            path: "scanned",
            element: (
                <AdminCheck>
                    <Scanned />
                </AdminCheck>
            ),
        },
        {
            path: "users",
            element: <Users />,
        },
        {
            path: "manual",
            element: <Manual />,
        },
    ]);
    let [data, setData] = useState();
    let [data2, setData2] = useState();
    let state = useContext(AdminControlContext);
    let stateUD = useContext(UserDataContext);
    state.adminData = data;
    state.setAdminData = setData;
    stateUD.userData = data2;
    stateUD.setUserData = setData2;
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
