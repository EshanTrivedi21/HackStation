import React from "react";
import { Container, ScreenTitle, FlexCol, Select } from "../utils/Utilities";
import { QRCode } from "react-qrcode-logo";
import data from "../data/scan.json";

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
                <Select data={data} />
            </FlexCol>
        </Container>
    );
};

export default Scan;
