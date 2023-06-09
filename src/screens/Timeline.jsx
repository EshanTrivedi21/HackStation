import React from "react";
import { Container, ScreenTitle, Card, FlexCol } from "../utils/Utilities";
import data from "../data/timeline.json";

const Timeline = () => {
    return (
        <>
            <Container className="!justify-start" gap="2.5rem">
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
