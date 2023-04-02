import React from "react";
import { CenteredGrid } from "../utils/Utilities";
import { Greetings, Countdown, Identity, Cards } from "../components/exports";

const Home = () => {
    return (
        <CenteredGrid className="gap-6 pt-10">
            <Greetings />
            <Countdown start={false} />
            <Identity name="Eshan Trivedi" team="Inspect Elements"/>
            <Cards />
        </CenteredGrid>
    );
};

export default Home;
