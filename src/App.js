import "./index.css";
import { useState, useEffect, useContext } from "react";
import { Login } from "./auth/exports";
import { Loader } from "./components/exports";
import { Container } from "./utils/Utilities";
import { Typography } from "@mui/material";
import {
    Home,
    Timeline,
    Food,
    QR,
    PS,
    Others,
    Ticket,
} from "./screens/exports";
import {
    Dashboard,
    Scan,
    Controls,
    Other,
    Users,
    Manual,
} from "./admin/exports";
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
            element: (
                <AuthCheck>
                    <Timeline />
                </AuthCheck>
            ),
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
            element: (
                <AuthCheck>
                    <QR id="Check In" />,
                </AuthCheck>
            ),
        },
        {
            path: "qr",
            element: (
                <AuthCheck>
                    <QR id="Food" />,
                </AuthCheck>
            ),
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
            path: "users",
            element: (
                <AdminCheck>
                    <Users />,
                </AdminCheck>
            ),
        },
        {
            path: "manual",
            element: (
                <AdminCheck>
                    <Manual />,
                </AdminCheck>
            ),
        },
        {
            path: "ticket",
            element: (
                <AuthCheck>
                    <Ticket />,
                </AuthCheck>
            ),
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
