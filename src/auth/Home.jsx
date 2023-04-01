import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { CenteredGrid, CenteredDiv, SecondaryButton } from "../utils/Utilities";

const Home = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <CenteredGrid
        style={{ paddingTop: "2.5rem", gap: "10rem" }}
        className="home-bg"
      >
        <CenteredDiv className="gap-4">
          <Typography variant="h1" color="primary.contrastText">
            Hackerstellar
          </Typography>
          <Typography variant="h4" color="primary.contrastText">
            Ultimate Space Hacking Experience
          </Typography>
        </CenteredDiv>
        <CenteredDiv>
          <SecondaryButton variant="contained" onClick={handleLogin}>
            Launch
          </SecondaryButton>
        </CenteredDiv>
      </CenteredGrid>
    </>
  );
};

export default Home;
