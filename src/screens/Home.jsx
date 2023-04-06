import { useEffect, useState, useContext } from "react";
import { Container } from "../utils/Utilities";
import {
    Greetings,
    Countdown,
    Identity,
    Cards,
} from "../components/exports";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { AdminControlContext } from "../contexts/adminControlContext";

const Home = () => {
    let [user, setUser] = useState();
    let [team, setTeam] = useState();
    let stateAC = useContext(AdminControlContext);
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                let name = user.displayName.split("@");
                setUser(name[0].replace("_", " "));
                setTeam(name[1].replace("_", " "));
            }
        });
    }, []);

    return (
        <>
            {stateAC.adminData && (
                <Container>
                    <Greetings />
                    <Countdown start={false} />
                    <Identity name={user} team={team} />
                    <Cards user={user} admindata={stateAC.adminData} />
                </Container>
            )}
        </>
    );
};

export default Home;
