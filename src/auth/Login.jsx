import React from "react";
import { Typography, TextField } from "@mui/material";
import {
  CenteredGrid,
  CenteredDiv,
  PrimaryButton,
} from "../utils/Utilities";

const Login = () => {

  let [username, setUsername] = React.useState("");
  let [password, setPassword] = React.useState("");

  let [usernameError, setUsernameError] = React.useState(false);
  let [passwordError, setPasswordError] = React.useState(false);

  let [loading, setLoading] = React.useState(false);

  return (
    <CenteredGrid className="gap-20" style={{minHeight: "85vh"}}>
      <CenteredDiv className="gap-2">
        <Typography variant="h2" color="primary.contrastText">
          Welcome
        </Typography>
        <Typography variant="h3" color="primary.contrastText">
          Log into your account
        </Typography>
      </CenteredDiv>
      <CenteredDiv className="gap-10">
        <TextField label="Username" variant="outlined" onChange={e=>setUsername(e.target.value)}/>
        <TextField label="Password" variant="outlined" onChange={e=>setPassword(e.target.value)} type="password"/>
      </CenteredDiv>
      <CenteredDiv>
        <PrimaryButton variant="contained">Login</PrimaryButton>
      </CenteredDiv>  
    </CenteredGrid>
  );
};

export default Login;
