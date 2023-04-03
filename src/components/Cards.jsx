import React from "react";
import { Card } from "../utils/Utilities";
import data from "../data/cards.json";
import { useNavigate } from "react-router-dom";

const Cards = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col gap-5">
                {data.map((item, index) => (
                    <Card
                        key={index}
                        size="30"
                        icon={item.icon}
                        title={item.title}
                        subtitle={item.subtitle}
                        button={true}
                        onClick={() => {
                            navigate(item.link);
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default Cards;
