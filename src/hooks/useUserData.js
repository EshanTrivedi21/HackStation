import { useContext } from "react";
import { db } from "../utils/firebase";
import { getDoc, doc } from "firebase/firestore";
import { UserDataContext } from "../contexts/userDataContext";

export const useUserData = () => {
    let stateAC = useContext(UserDataContext);
    const fetch = async (id) => {
        console.log("fetching user data")
        getDoc(doc(db, "users", id))
            .then((doc) => {
                if (doc.exists()) {
                    stateAC.setUserData(doc.data());
                } else {
                    console.log("No such document!");
                }
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
    };
    return { fetch, stateAC };
};
