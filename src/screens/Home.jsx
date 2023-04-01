import React from "react";
import { CenteredGrid } from "../utils/Utilities";
import { Greetings, Countdown } from "../components/exports";

const Home = () => {
    return (
        <CenteredGrid style={{ minHeight: "100vh" }} className="gap-8">
            <Greetings />
            <Countdown start={false} />
        </CenteredGrid>
    );
};

export default Home;
