import React, { useContext } from "react";
import { Container, ScreenTitle, Card, FlexCol } from "../utils/Utilities";
import data from "../data/ps.json";
import forms from "../data/forms.json";
import { Typography } from "@mui/material";
import { AdminControlContext } from "../contexts/adminControlContext";

const PS = () => {
    let stateAC = useContext(AdminControlContext);

    const handleClick = (link, check) => {
        if (stateAC.adminData[check]) {
            window.open(link, "_blank");
        } else {
            return;
        }
    };

    return (
        <>
            <Container className="!justify-start" gap="3rem" overflow="hidden">
                <ScreenTitle title="PS" />
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
                            onClick={() => {
                                window.open(item.download, "_blank");
                            }}
                        />
                    ))}
                </FlexCol>
                <FlexCol className="gap-5 !items-start">
                    <Typography variant="card_title" className="!ml-10">
                        Forms 
                    </Typography>
                    {stateAC.adminData &&
                        forms.map((item, index) => (
                            <Card
                                key={index}
                                width="30"
                                height="30"
                                title={item.title}
                                subtitle={item.subtitle}
                                icon={item.icon}
                                button={true}
                                onClick={() => {
                                    handleClick(item.link, item.query);
                                }}
                                disabled={!stateAC.adminData[item.query]}
                            />
                        ))}
                </FlexCol>
            </Container>
        </>
    );
};

export default PS;
