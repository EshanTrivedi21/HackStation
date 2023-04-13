import { Container, Card } from "../utils/Utilities";
import { Greetings, Countdown } from "../components/exports";
import data from "../data/admin.json";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    return (
        <>
            <Container minHeight="auto" gap="2rem" padding="4rem" overflow="hidden">
                <Greetings title="Administrator" />
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
