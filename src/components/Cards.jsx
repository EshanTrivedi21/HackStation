import React from "react";
import { Card } from "../utils/Utilities";
import data from "../data/cards.json";
import { useNavigate } from "react-router-dom";

const Cards = ({admindata}) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col gap-6">
                {data.map((item, index) => (
                    <Card
                        key={index}
                        width="30" height="30"
                        icon={item.icon}
                        title={item.title}
                        subtitle={item.subtitle}
                        button={true}
                        adminName={item.adminName}
                        onClick={() => {
                            if (item.link) navigate(item.link);
                            else window.open(item.contact);
                        }}
                        admindata={admindata}
                    />
                ))}
            </div>
        </>
    );
};

export default Cards;
