import { useEffect, useState } from "react";
import { Container, ScreenTitle, FlexCol, Select } from "../utils/Utilities";
import data from "../data/controls.json";
import { Html5Qrcode } from "html5-qrcode";

const Scan = () => {
    let [id, setId] = useState(null);
    function onScanSuccess(decodedText) {
        setId(decodedText);
    }

    function onScanFailure(error) {
        console.warn(`Code scan error = ${error}`);
    }
    useEffect(() => {
        const html5QrCode = new Html5Qrcode("reader", true);
        const config = { qrbox: { width: 200, height: 300 } };
        html5QrCode.start(
            { facingMode: "environment" },
            config,
            onScanSuccess,
            onScanFailure
        );
    }, []);
    return (
        <Container minHeight="auto" gap="4rem">
            <ScreenTitle title="Scan QR" />
            <FlexCol>
                <div
                    id="reader"
                    style={{
                        height: "300px",
                        width: "300px",
                        overflow: "hidden",
                    }}
                ></div>
                <p className="text-white">{id}</p>
            </FlexCol>
            <FlexCol>
                <Select data={data} />
            </FlexCol>
        </Container>
    );
};

export default Scan;
