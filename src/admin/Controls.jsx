import {useContext} from "react";
import { Container, ScreenTitle, Card, FlexCol } from "../utils/Utilities";
import data from "../data/controls.json";

const Controls = () => {
    return (
        <>
            <Container className="!justify-start">
                <ScreenTitle title="Controls" />
                <FlexCol className="gap-5">
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

export default Controls;
