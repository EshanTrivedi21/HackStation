import React from "react";
import { FlexDiv, BackIcon, Card } from "../utils/Utilities";
import { Typography } from "@mui/material";
import { Theme } from "../utils/Theme";
import data from "../data/timeline.json";

const Timeline = () => {
    return (
        <>
            <Theme>
                <div className="flex flex-col gap-10 py-10">
                    <FlexDiv className="!justify-start ml-6 gap-6">
                        <BackIcon />
                        <Typography variant="modal_title">Timeline</Typography>
                    </FlexDiv>
                    <div className="flex flex-col gap-5 justify-center items-center">
                        {data.map((item, index) => (
                            <Card
                                key={index}
                                size="45"
                                title={item.title}
                                subtitle={item.subtitle}
                                icon={item.icon}
                                importance={item.importance}
                            />
                        ))}
                    </div>
                </div>
            </Theme>
        </>
    );
};

export default Timeline;
