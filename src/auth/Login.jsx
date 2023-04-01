import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, TextField } from "@mui/material";
import {
  CenteredGrid,
  CenteredDiv,
  BackIcon,
  Container,
  PrimaryButton,
} from "../utils/Utilities";

const Login = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  let [username, setUsername] = React.useState("");
  let [password, setPassword] = React.useState("");

  let [usernameError, setUsernameError] = React.useState(false);
  let [passwordError, setPasswordError] = React.useState(false);

  let [loading, setLoading] = React.useState(false);

  return (
    <CenteredGrid className="bg-[linear-gradient(180deg,#202020_0%,#101010_100%)] gap-10">
      {/* <BackIcon onclick={handleHome} /> */}
      <CenteredDiv className="gap-2">
        <Typography variant="h2" color="primary.contrastText">
          Welcome
        </Typography>
        <Typography variant="h3" color="primary.contrastText">
          Log into your account
        </Typography>
      </CenteredDiv>
      <CenteredDiv className="gap-10">
        <TextField id="outlined-basic" label="Username" variant="outlined" onChange={e=>setUsername(e.target.value)}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" onChange={e=>setPassword(e.target.value)}/>
      </CenteredDiv>
      <CenteredDiv className="mb-16">
        <PrimaryButton variant="contained">Login</PrimaryButton>
      </CenteredDiv>
    </CenteredGrid>
  );
};

export default Login;
