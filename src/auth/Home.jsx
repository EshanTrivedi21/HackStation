import React from "react";
import { Theme } from "../assets/Theme";
import { Typography, Grid, Button } from "@mui/material";

const CenteredGrid = ({ children }) => {
  return (
    <Theme>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
        className="home-bg"
        display="flex"
        paddingTop={10}
        gap={15}
      >
        {children}
      </Grid>
    </Theme>
  );
};

const CenteredDiv = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center w-screen">{children}</div>
  );
};

const Home = () => {
  return (
    <>
      <CenteredGrid>
        <CenteredDiv>
          <Typography variant="h1" color="primary.contrastText">
            Hackerstellar
          </Typography>
          <Typography variant="h3" color="primary.contrastText">
            by CSI-KJSCE
          </Typography>
        </CenteredDiv>
        <CenteredDiv>
          <Button variant="contained" color="primary" href="/auth/login">
            Launch
          </Button>
        </CenteredDiv>
      </CenteredGrid>
    </>
  );
};

export default Home;
