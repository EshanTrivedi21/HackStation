import React from "react";
import { CenteredGrid } from "../utils/Utilities";
import { Greetings, Countdown, Identity } from "../components/exports";

const Home = () => {
    return (
        <CenteredGrid className="gap-10 pt-14">
            <Greetings />
            <Countdown start={true} />
            <Identity name="Eshan Trivedi" team="Inspect Elements"/>
        </CenteredGrid>
    );
};

export default Home;
