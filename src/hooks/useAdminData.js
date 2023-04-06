import { useContext } from "react";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { AdminControlContext } from "../contexts/adminControlContext";

export const useAdminData = () => {
    let stateAC = useContext(AdminControlContext);
    const fetch = async () => {
        console.log("fetching admin data");
        getDocs(collection(db, "admin-controls")).then((d) => {
            stateAC.setAdminData(d.docs[0].data());
        });
    };
    return { fetch };
};
