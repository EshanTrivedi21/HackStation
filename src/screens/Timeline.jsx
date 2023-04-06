import React from "react";
import { Container, ScreenTitle, Card } from "../utils/Utilities";
import data from "../data/timeline.json";

const Timeline = () => {
    return (
        <>
            <Container>
                <ScreenTitle title="Timeline" />
                <FlexCol className="gap-5">
                    {data.map((item, index) => (
                        <Card
                            key={index}
                            width="42"
                            height="20"
                            title={item.title}
                            subtitle={item.subtitle}
                            icon={item.icon}
                            importance={item.importance}
                            button={false}
                        />
                    ))}
                </FlexCol>
            </Container>
        </>
    );
};

export default Timeline;
