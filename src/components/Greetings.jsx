import React from "react";
import { FlexRow, FlexCol, Icon } from "../utils/Utilities";
import { Typography } from "@mui/material";

const Greetings = () => {
    return (
        <>
            <FlexRow className="!items-start !gap-3">
                <Icon
                    src="/icons/hacktronaut.png"
                    alt="hacktronaut"
                    width="36"
                    height="42"
                />
                <FlexCol className="!w-auto !items-start">
                    <Typography variant="greetings_subtitle">
                        Greetings ,
                    </Typography>
                    <Typography variant="greetings_title">
                        Hacktronaut
                    </Typography>
                </FlexCol>
            </FlexRow>
        </>
    );
};

export default Greetings;
