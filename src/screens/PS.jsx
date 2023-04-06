import React from "react";
import { Container, ScreenTitle, Card, FlexCol } from "../utils/Utilities";
import data from "../data/ps.json";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const PS = () => {
    const navigate = useNavigate();
    return (
        <>
            <Container className="!justify-start" gap="3rem">
                <ScreenTitle title="Problems" />
                <FlexCol className="gap-5 !items-start">
                    <Typography variant="card_title" className="!ml-10">
                        Form
                    </Typography>
                    <Card
                        width="30"
                        height="30"
                        title="Preference Form"
                        subtitle="Fill the form to get your preferences"
                        icon="/icons/psform.svg"
                        button={true}
                    />
                </FlexCol>
                <FlexCol className="gap-5 !items-start">
                    <Typography variant="card_title" className="!ml-10">
                        Domains
                    </Typography>
                    {data.map((item, index) => (
                        <Card
                            key={index}
                            width="30"
                            height="30"
                            title={item.title}
                            subtitle={item.subtitle}
                            icon={item.icon}
                            button={true}
                        />
                    ))}
                </FlexCol>
            </Container>
        </>
    );
};

export default PS;
