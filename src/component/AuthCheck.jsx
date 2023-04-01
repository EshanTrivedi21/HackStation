import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function AuthCheck({ children }) {
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
              navigate("/login");
            }
        });
    }, [auth.currentUser, navigate]);
    return <>{children}</>;
}
