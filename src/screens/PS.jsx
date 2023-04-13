import React, { useContext } from "react";
import { Container, ScreenTitle, Card, FlexCol } from "../utils/Utilities";
import data from "../data/ps.json";
import { Typography } from "@mui/material";
import { AdminControlContext } from "../contexts/adminControlContext";

const PS = () => {
    let stateAC = useContext(AdminControlContext);
    const handleClick = () => {
        if (stateAC.adminData["ps-form"]) {
            window.open("https://forms.gle/M2ugv3eJhfc7haNN9", "_blank");
        } else {
            return;
        }
    };
    return (
        <>
            <Container className="!justify-start" gap="3rem" overflow="hidden">
                <ScreenTitle title="Problems" />
                <FlexCol className="gap-5 !items-start">
                    <Typography variant="card_title" className="!ml-10">
                        Form
                    </Typography>
                    {stateAC.adminData && (
                        <Card
                            width="30"
                            height="30"
                            title="Preference Form"
                            subtitle="Fill the form to get your preferences"
                            icon="/icons/psform.svg"
                            button={true}
                            onClick={handleClick}
                            disabled={!stateAC.adminData["ps-form"]}
                        />
                    )}
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
