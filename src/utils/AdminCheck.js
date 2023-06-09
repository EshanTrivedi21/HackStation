import { useEffect, useState, useContext } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { AdminControlContext } from "../contexts/adminControlContext";
import { useAdminData } from "../hooks/useAdminData";
import Loader from "../components/Loader";

export default function AdminCheck({ children }) {
    let stateAC = useContext(AdminControlContext);
    let useAdmin = useAdminData();
    let [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, async (user) => {
            if (!user) {
                setLoading(false);
                window.location.href = "/login";
            }
            if (user) {
                if (user.uid !== process.env.REACT_APP_ADMIN_UID) {
                    setLoading(false);
                    window.location.href = "/";
                } else {
                    if (!stateAC.adminData) {
                        useAdmin.fetch();
                    }
                }
                setLoading(false);
            }
        });
    }, []);
    return (
        <>
            <Loader open={loading} />
            {stateAC.adminData && children}
        </>
    );
}
