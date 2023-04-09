import { useEffect, useState, useContext } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { AdminControlContext } from "../contexts/adminControlContext";
import { useAdminData } from "../hooks/useAdminData";
import { UserDataContext } from "../contexts/userDataContext";
import { useUserData } from "../hooks/useUserData";
import Loader from "../components/Loader";

export default function AuthCheck({ children }) {
    let stateAC = useContext(AdminControlContext);
    let stateUD = useContext(UserDataContext);
    let useAdmin = useAdminData();
    let useUser = useUserData()
    let [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, async (user) => {
            if (!user) {
                setLoading(false);
                window.location.href = "/login";
            }
            if (user) {
                if (!stateAC.adminData) {
                    useAdmin.fetch();
                }
                if (!stateUD.userData) {
                    useUser.fetch(user.uid);
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
