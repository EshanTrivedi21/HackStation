import React from "react";
import { Container, ScreenTitle, Card } from "../utils/Utilities";
import data from "../data/food.json";
import { useNavigate } from "react-router-dom";

const Food = () => {
    const navigate = useNavigate();
    return (
        <>
            <Container>
                <ScreenTitle title="Food" />
                <div className="flex flex-col gap-5 justify-center items-center">
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
                </div>
            </Container>
        </>
    );
};

export default Food;
