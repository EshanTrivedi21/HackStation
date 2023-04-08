import React, { useEffect } from "react";
import { Container, ScreenTitle, FlexCol, Select } from "../utils/Utilities";
import { QRCode } from "react-qrcode-logo";
import data from "../data/controls.json";
import { Html5Qrcode } from "html5-qrcode";

const Scan = () => {
    let [id, setId] = React.useState(null);
    function handleScan(data) {
        // if (data) alert(data);
        // if (err)
        // alert(err);
    }
    function handleError(err) {
        alert(err);
    }
    const previewStyle = {
        height: "300px",
        width: "300px",
        overflow: "hidden",
    };
    function onScanSuccess(decodedText, decodedResult) {
        setId(decodedText);
    }

    function onScanFailure(error) {
        // handle scan failure, usually better to ignore and keep scanning.
        // for example:
        console.warn(`Code scan error = ${error}`);
    }
    useEffect(() => {

        const html5QrCode = new Html5Qrcode("reader", /* verbose= */ true);
        const config = {  qrbox: { width: 200, height: 300 } };
        html5QrCode.start({ facingMode: "environment" }, config, onScanSuccess, onScanFailure);

    }, []);
    return (
        <Container minHeight="auto" gap="4rem">
            <ScreenTitle title="Scan QR" />
            <FlexCol>
                <div id="reader" style={previewStyle}></div>
                <p className="text-white">{id}</p>
            </FlexCol>
            <FlexCol>
                <Select data={data} />
            </FlexCol>
        </Container>
    );
};

export default Scan;
