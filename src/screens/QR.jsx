import { memo, useState, useEffect } from "react";
import { Container, ScreenTitle, FlexCol, User } from "../utils/Utilities";
import { Typography } from "@mui/material";
import { QRCode } from "react-qrcode-logo";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Loader from "../components/Loader";

const Code = ({ value }) => {
    return (
        <>
            <QRCode
                value={value}
                size={210}
                fgColor="#DDDDDD"
                bgColor="transparent"
            />
        </>
    );
};

const QR = memo(({ id }) => {
    let [user, setUser] = useState();
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!id) {
            window.location.href = "/";
        }
        setLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                setLoading(false);
                window.location.href = "/login";
            }
            if (user) {
                setUser(user.displayName + "#" + user.uid);
            }
            setLoading(false);
        });
    }, []);
    return (
        <>
            <Loader open={loading} />
            <Container minHeight="auto" gap="7rem" overflow="hidden">
                <ScreenTitle title={id} />
                <FlexCol>{user && <Code value={user} />}</FlexCol>
                <FlexCol>
                    <User
                        name="Continue"
                        className="!w-[60vw] !h-12 !border-[#afafaf] !border"
                    />
                </FlexCol>
            </Container>
        </>
    );
});

export default QR;
