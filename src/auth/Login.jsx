import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, TextField } from "@mui/material";
import {
  CenteredGrid,
  CenteredDiv,
  BackIcon,
  Container,
  PrimaryButton
} from "../assets/Utilities";

const Login = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <CenteredGrid classname="home-bg">
      <BackIcon onclick={handleHome} />
      <Container>
        <CenteredDiv classname="pt-24 gap-2">
          <Typography variant="h2" color="secondary.contrastText">
            Welcome
          </Typography>
          <Typography variant="h3" color="secondary.contrastText">
            Log into your account
          </Typography>
        </CenteredDiv>
        <CenteredDiv classname="pt-24 gap-8">
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </CenteredDiv>
        <CenteredDiv classname="pt-24">
          <PrimaryButton variant="contained">
            Login
          </PrimaryButton>
        </CenteredDiv>
      </Container>
    </CenteredGrid>
  );
};

export default Login;
