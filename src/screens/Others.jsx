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

const Others = () => {
    const logoutUser = () => {
        return signOut(auth);
      };
    return (
        <>
            <Container className="!justify-start" gap="2.5rem">
                <ScreenTitle title="Others" className="pb-4" />
                {data.map((items, index) => {
                    return (
                        <FlexCol className="gap-2 !items-start" key={index}>
                            <Typography variant="card_title" className="!ml-10">
                                {items.heading}
                            </Typography>
                            <Card
                                width="30"
                                height="30"
                                title={items.title}
                                subtitle={items.subtitle}
                                icon={items.icon}
                                button={true}
                            />
                        </FlexCol>
                    );
                })}
                <FlexCol className="pt-[2rem]">
                    <PrimaryButton onClick={logoutUser}>
                        Log Out
                    </PrimaryButton>
                </FlexCol>
            </Container>
        </>
    );
};

export default Others;
