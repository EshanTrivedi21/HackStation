import React from "react";
import { Container, ScreenTitle, FlexCol } from "../utils/Utilities";
import { Typography } from "@mui/material";
import Lottie from "react-lottie";
import animationData from "../data/animation.json";

const Scanned = () => {
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
            <Container minHeight="auto" gap="3rem">
                <ScreenTitle title="Scanned" />
                <FlexCol>
                    <Lottie options={defaultOptions} height={300} width={300} />
                </FlexCol>
                <FlexCol>
                    <Typography variant="modal_title">Wohoo!</Typography>
                    <Typography variant="modal_subtitle">
                        Have a great day ahead! 
                    </Typography>
                </FlexCol>
            </Container>
        </>
    );
};

export default Scanned;
