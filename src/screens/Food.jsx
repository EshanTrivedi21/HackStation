import React from "react";
import { FlexDiv, BackIcon, Card } from "../utils/Utilities";
import { Typography } from "@mui/material";
import { Theme } from "../utils/Theme";
import data from "../data/food.json";

const Food = () => {  
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
                                size="30"
                                title={item.title}
                                subtitle={item.subtitle}
                                icon={item.icon}
                                button={true}
                            />
                        ))}
                    </div>
                </div>
            </Theme>
        </>
    );
};

export default Food;
