import React from "react";
import { Container, ScreenTitle, FlexCol, Select } from "../utils/Utilities";
import { Typography } from "@mui/material";
import { QRCode } from "react-qrcode-logo";
import data from "../data/controls.json";

const Code = ({ value }) => {
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
    );
};

const Scan = () => {
    return (
        <Container minHeight="auto" gap="4rem">
            <ScreenTitle title="Scan QR" />
            <FlexCol>
                <Code value={545545545454544} />
            </FlexCol>
            <FlexCol>
                <Typography variant="modal_title">Scan QR</Typography>
                <Typography variant="modal_subtitle">
                    Scan user QR to continue
                </Typography>
            </FlexCol>
            <FlexCol>
                <Select data={data} />
            </FlexCol>
        </Container>
    );
};

export default Scan;
