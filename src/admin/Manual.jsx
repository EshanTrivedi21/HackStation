import { useEffect, useState } from "react";
import { Container, ScreenTitle, Control } from "../utils/Utilities";
import data from "../data/scan.json";
import { useNavigate, useLocation } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

const Manual = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let [user, setUser] = useState(null);
    useEffect(() => {
        if (!location.state.ind) {
            navigate("/users");
        } else {
            getDoc(doc(db, "users", location.state.ind)).then((doc) => {
                if (doc.exists()) {
                    let a = doc.data();
                    a["id"] = doc.id;
                    setUser(a);
                } else {
                    console.log("No such document!");
                }
            });
        }
    }, [navigate]);
    return (
        <>
            <Container className="!justify-start !gap-10">
                <ScreenTitle
                    className="capitalize"
                    title={
                        user &&
                        `${user.display.split("@")[0].replace("_", " ")}`
                    }
                />
                {user &&
                    data.map((u) => (
                        <Control
                            title={u.name}
                            value={u.value}
                            check={user[u.value]}
                            id={user.id}
                            users={location.state.users}
                            key={u.value}
                            setUser={setUser}
                        />
                    ))}
            </Container>
        </>
    );
};

export default Manual;
