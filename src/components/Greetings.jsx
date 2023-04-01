import React from 'react';
import { CenteredDiv, Icon } from '../utils/Utilities';
import { Typography } from '@mui/material';

const Greetings = () => {
  return (
    <>
      <CenteredDiv>
        <div className='flex gap-3'>
          <Icon src="/icons/hacktronaut.svg" alt="hacktronaut" size="44"/>
          <div className='flex flex-col gap-[0.5px]'>
            <Typography variant="greetings_subtitle"> 
              Greetings ,
            </Typography>
            <Typography variant="greetings_title">
              Hacktronaut
            </Typography>
          </div>
        </div>
      </CenteredDiv>
    </>
  )
}

export default Greetings