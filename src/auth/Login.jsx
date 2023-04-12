import { useEffect, useState } from "react";
import { Typography, TextField, CircularProgress } from "@mui/material";
import { Container, FlexCol, PrimaryButton } from "../utils/Utilities";
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
                if (user.uid === process.env.REACT_APP_ADMIN_UID) {
                    window.location.href = "/admin";
                } else {
                    window.location.href = "/";
                }
            }
        });
    }, []);
    const submit = async () => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setLoading(false);
                if (user.uid === process.env.REACT_APP_ADMIN_UID) {
                    navigate("/admin");
                }
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
        <Container gap="5rem" minHeight="auto" padding="7.5rem" overflow="hidden">
            <FlexCol className="gap-2">
                <Typography variant="login_title" color="primary.contrastText">
                    Welcome
                </Typography>
                <Typography
                    variant="login_subtitle"
                    color="primary.contrastText"
                >
                    Log into your account
                </Typography>
            </FlexCol>
            <FlexCol className="gap-10">
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
            </FlexCol>
            <FlexCol>
                <PrimaryButton variant="contained" onClick={submit}>
                    {!loading ? (
                        "Login"
                    ) : (
                        <CircularProgress color="secondary" />
                    )}
                </PrimaryButton>
            </FlexCol>
        </Container>
    );
};

export default Login;
