import { useState } from "react";
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
    onAuthStateChanged(auth, (user) => {
        setLoading(true);
        if (user) {
            let name = user.displayName.split("@");
            setUser(name[0].replace("_", " "));
            setTeam(name[1].replace("_", " "));
        }
        setLoading(false);
    });
    return (
        <>
            <Loader open={loading} />
            <CenteredGrid className="gap-6 pt-10">
                <Greetings />
                <Countdown start={false} />
                <Identity name={user} team={team} />
                <Cards />
            </CenteredGrid>
        </>
    );
};

export default Home;
