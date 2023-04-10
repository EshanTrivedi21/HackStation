import React from 'react';
import { Container, ScreenTitle, Control } from '../utils/Utilities';

const Manual = ({user}) => {
  return (
    <>
        <Container className="!justify-start !gap-10">
            <ScreenTitle title={user ? user : "Username" } />
            <Control title="Lunch Day 1" />
        </Container>
    </>
  )
}

export default Manual