import React from "react";
import {
    Container,
    ScreenTitle,
    FlexCol,
    Card,
    PrimaryButton,
} from "../utils/Utilities";
import { Typography } from "@mui/material";
import Lottie from "react-lottie";
import animationData from "../data/animation.json";

const Scanned = ({entity, user, team}) => {
    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <>
            <Container minHeight="auto" gap="4rem">
                <ScreenTitle title="Scanned" />
                <FlexCol>
                    <Lottie options={defaultOptions} height={300} width={300} />
                </FlexCol>
                <FlexCol>
                    <Typography variant="modal_title">{entity}</Typography>
                    <Typography variant="modal_subtitle">
                        {user} : {team} 
                    </Typography>
                </FlexCol>
                <FlexCol>
                    <PrimaryButton className="!w-[65vw] !h-12">Save and Continue</PrimaryButton>
                </FlexCol>
            </Container>
        </>
    );
};

export default Scanned;
