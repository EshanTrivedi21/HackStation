import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { CenteredGrid, CenteredDiv, SecondaryButton } from "../assets/Utilities";

const Home = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <CenteredGrid style={{ paddingTop: "2.5rem", gap: "10rem" }} classname="home-bg">
        <CenteredDiv classname="gap-4">
          <Typography variant="h1" color="primary.contrastText">
            Hackerstellar
          </Typography>
          <Typography variant="h4" color="primary.contrastText">
            Ultimate Space Hacking Experience
          </Typography>
        </CenteredDiv>
        <CenteredDiv>
          <SecondaryButton variant="contained" onclick={handleLogin}>
            Launch
          </SecondaryButton>
        </CenteredDiv>
      </CenteredGrid>
    </>
  );
};

export default Home;
