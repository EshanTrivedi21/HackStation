import { useContext } from "react";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { AdminControlContext } from "../contexts/adminControlContext";

export const useUserData = (id) => {
    let stateAC = useContext(AdminControlContext);
    const fetch = async () => {
        console.log("fetching user data");
        // getDocs(collection(db, "admin-controls")).then((d) => {
        //     stateAC.setAdminData(d.docs[0].data());
        // });
    };
    return { fetch };
};
