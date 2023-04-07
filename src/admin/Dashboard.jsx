import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import Loader from "../components/Loader";
import { Container, Card } from "../utils/Utilities";
import { Greetings, Countdown } from "../components/exports";
import data from "../data/admin.json";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    let [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, async (user) => {
            if (!user) {
                setLoading(false);
                window.location.href = "/login";
            }
            if (user) {
                if (user.uid !== process.env.REACT_APP_ADMIN_UID) {
                    window.location.href = "/";
                }
                setLoading(false);
            }
        });
    }, []);
    return (
        <>
            <Loader open={loading} />
            <Container className="!justify-start" gap="2rem" padding="4rem">
                <Greetings title="Administrator" />
                <Countdown start={false} />
                {data.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            icon={item.icon}
                            width="30"
                            height="30"
                            button={true}
                            onClick={() => {
                                navigate(item.link);
                            }}
                        />
                    );
                })}
            </Container>
        </>
    );
}
