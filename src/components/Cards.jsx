import React from 'react';
import { Box, FlexDiv, Icon } from "../utils/Utilities";
import { Typography } from '@mui/material';
import data from "../data/cards.json";

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