import React from "react";
import { FlexDiv, CenteredDiv, Icon } from "../utils/Utilities";
import { Typography } from "@mui/material";

const Greetings = () => {
    return (
        <>
            <FlexDiv className="!items-start !gap-3">
                <Icon
                    src="/icons/hacktronaut.png"
                    alt="hacktronaut"
                    width="36"
                    height="42"
                />
                <CenteredDiv className="!w-auto !items-start">
                    <Typography variant="greetings_subtitle">
                        Greetings ,
                    </Typography>
                    <Typography variant="greetings_title">
                        Hacktronaut
                    </Typography>
                </CenteredDiv>
            </FlexDiv>
        </>
    );
};

export default Greetings;
