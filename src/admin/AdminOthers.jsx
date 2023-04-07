import React from "react";
import {
    Container,
    ScreenTitle,
    Card,
    FlexCol,
    PrimaryButton,
} from "../utils/Utilities";
import data from "../data/others.json";
import { Typography } from "@mui/material";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const AdminOthers = () => {
    const logoutUser = () => {
        return signOut(auth);
    };
    return (
        <>
            <Container className="!justify-start" gap="2.5rem">
                <ScreenTitle title="Others" className="pb-4" />
                <FlexCol className="gap-2 !items-start">
                    <Typography variant="card_title" className="!ml-10">
                        {data[2].heading}
                    </Typography>
                    <Card
                        width="30"
                        height="30"
                        title={data[2].title}
                        subtitle={data[2].subtitle}
                        icon={data[2].icon}
                        button={true}
                    />
                </FlexCol>
                <FlexCol className="pt-[2rem]">
                    <PrimaryButton onClick={logoutUser}>Log Out</PrimaryButton>
                </FlexCol>
            </Container>
        </>
    );
};

export default AdminOthers;
