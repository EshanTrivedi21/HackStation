import React from "react";
import { Container, ScreenTitle, FlexCol, Tkt } from "../utils/Utilities";
import { Animation } from "../components/exports";

const Ticket = () => {
    return (
        <>
            <Container minHeight="auto" gap="4rem" overflow="hidden">
                <ScreenTitle title="Ticket" />
                <FlexCol className="!w-auto">
                    <Animation size={300} />
                </FlexCol>
                <FlexCol>
                    <Tkt user="Eshan Trivedi" team="inspectElements" entity="Dinner" time="12:00 PM" />
                </FlexCol>
            </Container>
        </>
    );
};

export default Ticket;
