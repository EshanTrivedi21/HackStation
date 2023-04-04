import { memo, useState, useEffect } from "react";
import { Container, ScreenTitle, CenteredDiv } from "../utils/Utilities";
import { Typography } from "@mui/material";
import { QRCode } from "react-qrcode-logo";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Loader from "../components/Loader";

const Code = ({value}) => {
    return (
        <>
            <QRCode
                value={value}
                size={200}
                ecLevel="L"
                fgColor="#DDDDDD"
                bgColor="transparent"
                removeQrCodeBehindLogo={true}
                eyeRadius={5}
            />
        </>
    )
};

const QR = memo(() => {
    let [user, setUser] = useState();
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                setLoading(false);
                window.location.href = "/login";
            }
            if (user) {
                setUser(user.uid);
            }
            setLoading(false);
        });
    }, []);
    return (
        <>
        <Loader open={loading} />
            <Container className="gap-20 py-10 overflow-hidden" minHeight="auto">
                    <ScreenTitle title="QR Code" />
                    <CenteredDiv>
                        {user && ( <Code value={user} /> )}
                    </CenteredDiv>
                    <CenteredDiv>
                        <Typography variant="modal_title">
                            Identity Card
                        </Typography>
                        <Typography variant="modal_subtitle">
                            Get the QR scanned to continue
                        </Typography>
                    </CenteredDiv>
                </Container>
        </>
    );
});

export default QR;
