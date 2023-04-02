import React from "react";
import { Card } from "../utils/Utilities";
import data from "../data/cards.json";

const Cards = () => {
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
                    />
                ))}
            </div>
        </>
    );
};

export default Cards;
