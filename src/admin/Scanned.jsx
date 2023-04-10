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
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../utils/firebase";
import { runTransaction, doc } from "firebase/firestore";

const Scanned = () => {
    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    let location = useLocation();
    let navigate = useNavigate();
    let entity, user, team, id;
    if (!location.state) {
        window.location.href = "/admin";
    } else {
        entity = location.state.entity;
        user = location.state.user;
        team = location.state.team;
        id = location.state.id;
    }
    const update = async () => {
        const adminRef = doc(db, "users", id);
        await runTransaction(db, async (transaction) => {
            const adminDoc = await transaction.get(adminRef);
            if (!adminDoc.exists()) {
                console.error("Document does not exist!");
            } else if (adminDoc.data()[entity]) {
                alert("Already scanned");
            } else {
                transaction.update(adminRef, { [entity]: true });
            }
        });
        navigate("/scan", { state: { entity: entity } });
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
                    <PrimaryButton className="!w-[65vw] !h-12" onClick={update}>
                        Save and Continue
                    </PrimaryButton>
                </FlexCol>
            </Container>
        </>
    );
};

export default Scanned;
