import React from 'react';
import { Box, FlexDiv, Icon } from "../utils/Utilities";
import { Typography } from '@mui/material';

const data = [
    {
        icon: "/icons/check-in.svg",
        title: "Check In",
        subtitle: "Register to start exploring this new world!"
    },
    {
        icon: "/icons/timeline.svg",
        title: "Timeline",
        subtitle: "Know how you will spend your day!"
    },
    {
        icon: "/icons/food.svg",
        title: "Food",
        subtitle: "Refuel your brainy engines!"
    },
    {
        icon: "/icons/get-help.svg",
        title: "Get Help",
        subtitle: "Feeling Stuck? Call the agents!"
    },
]

const Card = ({ icon, title, subtitle }) => {
    return (
        <>
            <Box className="h-20 pl-6">
                <FlexDiv className="!justify-start gap-6">
                    <Icon src={icon} size="35" />
                    <div className='flex flex-col justify-center items-start'>
                        <Typography variant="card_title">{title}</Typography>
                        <Typography variant="card_subtitle">{subtitle}</Typography>
                    </div>
                </FlexDiv>
            </Box>
        </>
    )
}

const Cards = () => {
  return (
    <>
        <div className='flex flex-col gap-4'>
            {
                data.map((item, index) => (
                    <Card key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} />
                ))  
            }
        </div>
    </>
  )
}

export default Cards