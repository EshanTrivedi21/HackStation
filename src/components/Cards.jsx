import React from "react";
import data from "../data/cards.json";
import { Card, FlexCol } from "../utils/Utilities";
import { useNavigate } from "react-router-dom";

const Cards = ({ admindata, checkin }) => {
  const navigate = useNavigate();
  const filteredData = data.filter(
    (item) =>
      (checkin && item.title !== "Check In") || 
      (!checkin && item.title !== "Problem Statements" && item.title !== "Food") 
  );
  return (
    <>
      <FlexCol className="gap-6">
        {filteredData.map((item, index) => (
          <Card
            key={index}
            width="30"
            height="30"
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            button={true}
            onClick={() => {
              navigate(item.link);
            }}
            disabled={!admindata[item.adminName]}
          />
        ))}
      </FlexCol>
    </>
  );
};

export default Cards;