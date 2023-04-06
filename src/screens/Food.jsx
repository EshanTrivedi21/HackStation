import React from "react";
import { Container, ScreenTitle, Card, FlexCol } from "../utils/Utilities";
import data from "../data/food.json";
import { useNavigate } from "react-router-dom";

const Food = () => {
    const navigate = useNavigate();
    return (
        <>
            <Container>
                <ScreenTitle title="Food" />
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
                            onClick={() => {
                                navigate("/qr");
                            }}
                        />
                    ))}
                </FlexCol>
            </Container>
        </>
    );
};

export default Food;
