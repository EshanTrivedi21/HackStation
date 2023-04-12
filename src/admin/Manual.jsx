import { useEffect, useState } from "react";
import { Container, ScreenTitle, Control } from "../utils/Utilities";
import data from "../data/scan.json";
import { useNavigate, useLocation } from "react-router-dom";

const Manual = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let [user, setUser] = useState(null);
    useEffect(() => {
        if (!location.state.ind) {
            navigate("/users");
        } else { 
            let a = JSON.parse(localStorage.getItem("users"));
            setUser(a.filter((u) => u.id === location.state.ind)[0]);
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
