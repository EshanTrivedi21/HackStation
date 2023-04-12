import { useEffect, useState } from "react";
import { Container, ScreenTitle, Control } from "../utils/Utilities";
import data from "../data/scan.json";
import { useNavigate, useLocation } from "react-router-dom";

const Manual = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let [user, setUser] = useState(null);
    useEffect(() => {
        if (!location.state.user) {
            navigate("/users");
        } else {
            setUser(location.state.user);
        }
    }, [location.user, navigate]);
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
                        />
                    ))}
            </Container>
        </>
    );
};

export default Manual;
