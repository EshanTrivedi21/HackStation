import React from "react";
import { ScreenTitle, Card } from "../utils/Utilities";
import { Theme } from "../utils/Theme";
import data from "../data/timeline.json";

const Timeline = () => {  
    return (
        <>
            <Theme>
                <div className="flex flex-col gap-10 py-10">
                    <ScreenTitle title="Timeline" />
                    <div className="flex flex-col gap-5 justify-center items-center">
                        {data.map((item, index) => (
                            <Card
                                key={index}
                                width="42" height="20"
                                title={item.title}
                                subtitle={item.subtitle}
                                icon={item.icon}
                                importance={item.importance}
                                button={false}
                            />
                        ))}
                    </div>
                </div>
            </Theme>
        </>
    );
};

export default Timeline;
