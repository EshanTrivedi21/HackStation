import React from "react";
import { FlexDiv, BackIcon, Card } from "../utils/Utilities";
import { Typography } from "@mui/material";
import { Theme } from "../utils/Theme";
import data from "../data/food.json";
import { useNavigate } from "react-router-dom";

const Food = () => {
    const navigate = useNavigate();
    return (
        <>
            <Theme>
                <div className="flex flex-col gap-10 py-10">
                    <FlexDiv className="!justify-start ml-6 gap-6">
                        <BackIcon to=""/>
                        <Typography variant="modal_title">Food</Typography>
                    </FlexDiv>
                    <div className="flex flex-col gap-5 justify-center items-center">
                        {data.map((item, index) => (
                            <Card
                                key={index}
                                width="30" height="30"
                                title={item.title}
                                subtitle={item.subtitle}
                                icon={item.icon}
                                button={true}
                                onClick = {() => {
                                    navigate("/qr");
                                }}
                            />
                        ))}
                    </div>
                </div>
            </Theme>
        </>
    );
};

export default Food;
