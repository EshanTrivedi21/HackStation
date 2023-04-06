import React from "react";
import { Container, ScreenTitle, Card, FlexCol } from "../utils/Utilities";
import data from "../data/others.json";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const Others = () => {
    const navigate = useNavigate();
    return (
        <>
            <Container className="!justify-start" gap="2.5rem">
                <ScreenTitle title="Others" className="pb-4"/>
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
            </Container>
        </>
    );
};

export default Others;
