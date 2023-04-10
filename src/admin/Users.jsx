import React from 'react';
import { Container, ScreenTitle, User } from '../utils/Utilities';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const navigate = useNavigate();
  return (
    <>
        <Container className="!justify-start !gap-10">
            <ScreenTitle title="Users" />
            <SearchBar />
            <User name="Eshan Trivedi" onClick={() => navigate('/manual')} />
        </Container>
    </>
  )
}

export default Users