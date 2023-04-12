import { useEffect, useState, useContext } from "react";
import { Container } from "../utils/Utilities";
import { Greetings, Countdown, Identity, Cards } from "../components/exports";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { AdminControlContext } from "../contexts/adminControlContext";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../hooks/useUserData";

const Home = () => {
    let [user, setUser] = useState();
    let [team, setTeam] = useState();
    let stateAC = useContext(AdminControlContext);
    let navigate = useNavigate();
    let { stateAC : state } = useUserData();
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                if (user.uid === process.env.REACT_APP_ADMIN_UID) {
                    navigate("/admin");
                } else {
                    let name = user.displayName.split("@");
                    setUser(name[0].replace("_", " "));
                    setTeam(name[1].replace("_", " "));
                }
            }
        });
    }, []);
    const checkin = state.userData['check-in'];
    return (
        <>
            {stateAC.adminData && (
                <Container>
                    <Greetings title="Hacktonaut" />
                    <Countdown start={stateAC.adminData.countdown} />
                    <Identity name={user} team={team} />
                    <Cards user={user} checkin={checkin} admindata={stateAC.adminData} />
                </Container>
            )}
        </>
    );
};

export default Home;
