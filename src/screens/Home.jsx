import { useEffect, useState, useContext } from "react";
import { Container } from "../utils/Utilities";
import {
    Greetings,
    Countdown,
    Identity,
    Cards,
    Loader,
} from "../components/exports";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { AdminControlContext } from "../contexts/adminControlContext";

const Home = () => {
    let [user, setUser] = useState();
    let [team, setTeam] = useState();
    let [data, setData] = useState();
    let [loading, setLoading] = useState(true);
    let stateAC = useContext(AdminControlContext);

    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, async (user) => {
            if (!user) {
                setLoading(false);
                window.location.href = "/login";
            }
            if (user) {
                let name = user.displayName.split("@");
                setUser(name[0].replace("_", " "));
                setTeam(name[1].replace("_", " "));
                console.log(stateAC.adminData);
                if (!stateAC.adminData) {
                    let d = await getDocs(collection(db, "admin-controls"));
                    setData(d.docs[0].data());
                    setLoading(false);
                    stateAC.setAdminData(d.docs[0].data());
                }
                else{
                    setData(stateAC.adminData);
                    setLoading(false);
                }
            }
        });
    }, []);
    return (
        <>
            <Loader open={loading} />
            {data && (
                <Container>
                    <Greetings />
                    <Countdown start={false} />
                    <Identity name={user} team={team} />
                    <Cards user={user} admindata={data} />
                </Container>
            )}
        </>
    );
};

export default Home;
