import { useEffect, useState } from "react";
import { Typography, TextField } from "@mui/material";
import { CenteredGrid, CenteredDiv, PrimaryButton } from "../utils/Utilities";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let [emailError, setEmailError] = useState(false);
    let [passwordError, setPasswordError] = useState(false);

    let [loading, setLoading] = useState(false);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                window.location.href = "/";
            }
        });
    }, []);
    const submit = async () => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setLoading(false);
                navigate("/");
            })
            .catch((error) => {
                setLoading(false);
                if (error.code === "auth/invalid-email") {
                    setEmailError(true);
                }
                if (error.code === "auth/wrong-password") {
                    setPasswordError(true);
                }
                if (error.code === "auth/user-not-found") {
                    setEmailError(true);
                }
            });
    };
    return (
        <CenteredGrid className="gap-20" style={{ minHeight: "85vh" }}>
            <CenteredDiv className="gap-2">
                <Typography variant="login_title" color="primary.contrastText">
                    Welcome
                </Typography>
                <Typography
                    variant="login_subtitle"
                    color="primary.contrastText"
                >
                    Log into your account
                </Typography>
            </CenteredDiv>
            <CenteredDiv className="gap-10">
                <TextField
                    label="Email"
                    variant="outlined"
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError(false);
                    }}
                    type="email"
                    error={emailError}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError(false);
                    }}
                    type="password"
                    error={passwordError}
                />
            </CenteredDiv>
            <CenteredDiv>
                <PrimaryButton variant="contained" onClick={submit}>
                    Login
                </PrimaryButton>
            </CenteredDiv>
        </CenteredGrid>
    );
};

export default Login;
