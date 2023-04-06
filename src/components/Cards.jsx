import React from "react";
import data from "../data/cards.json";
import { Card, FlexCol } from "../utils/Utilities";
import { useNavigate } from "react-router-dom";

const Cards = ({ admindata }) => {
    const navigate = useNavigate();
    return (
        <>
            <FlexCol className="gap-6">
                {data.map((item, index) => (
                    <Card
                        key={index}
                        width="30"
                        height="30"
                        icon={item.icon}
                        title={item.title}
                        subtitle={item.subtitle}
                        button={true}
                        adminName={item.adminName}
                        onClick={() => {
                            navigate(item.link);
                        }}
                        admindata={admindata}
                    />
                ))}
            </FlexCol>
        </>
    );
};

export default Cards;
