import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import Loader from "../components/Loader";

export default function AdminHome() {
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, async (user) => {
            if (!user) {
                setLoading(false);
                window.location.href = "/login";
            }
            if (user) {
                if (user.uid !== process.env.REACT_APP_ADMIN_UID) {
                    window.location.href = "/";
                }
                setLoading(false);
            }
        });
    }, []);
    return (
        <>
            <Loader open={loading} />
            <div className="text-white">Admin Home</div>;
        </>
    );
}
