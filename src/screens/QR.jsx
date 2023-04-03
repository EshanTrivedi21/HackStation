import { memo, useState, useEffect } from "react";
import { FlexDiv, BackIcon } from "../utils/Utilities";
import { Typography } from "@mui/material";
import { Theme } from "../utils/Theme";
import { QRCode } from "react-qrcode-logo";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Loader from "../components/Loader";

const QR = memo(({ title }) => {
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
            <Theme>
                <div className="flex flex-col gap-20 py-10 overflow-hidden">
                    <FlexDiv className="!justify-start ml-6 gap-6">
                        <BackIcon to="" />
                        <Typography variant="modal_title">QR Code</Typography>
                    </FlexDiv>
                    <div className="flex justify-center items-center">
                        {/* <img src="/assets/qr-test.svg" loading="lazy" alt="qr"/> */}
                        {user && (
                            <QRCode
                                value={user}
                                size={200}
                                ecLevel="L"
                                fgColor="#DDDDDD"
                                bgColor="transparent"
                                removeQrCodeBehindLogo={true}
                                eyeRadius={5}
                            />
                        )}
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Typography variant="modal_title">
                            Identity Card
                        </Typography>
                        <Typography variant="modal_subtitle">
                            Get the QR scanned to continue
                        </Typography>
                    </div>
                    <div className="flex justify-center items-center pt-28">
                        <img
                            src="/assets/sponsors.svg"
                            alt="sponsors"
                            className="w-[85vw]"
                            loading="lazy"
                        />
                    </div>
                </div>
            </Theme>
        </>
    );
});

export default QR;
