import { useEffect, useState } from "react";
import { CenteredGrid } from "../utils/Utilities";
import {
    Greetings,
    Countdown,
    Identity,
    Cards,
    Loader,
} from "../components/exports";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Home = () => {
    let [user, setUser] = useState();
    let [team, setTeam] = useState();
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                setLoading(false);
                window.location.href = "/login";
            }
            if (user) {
                let name = user.displayName.split("@");
                setUser(name[0].replace("_", " "));
                setTeam(name[1].replace("_", " "));
                setLoading(false);
            }
        });
    }, []);
    return (
        <>
            <Loader open={loading} />
            <CenteredGrid className="gap-6 py-10">
                <Greetings />
                <Countdown start={false} />
                <Identity name={user} team={team} />
                <Cards user={user}/>
            </CenteredGrid>
        </>
    );
};

export default Home;
