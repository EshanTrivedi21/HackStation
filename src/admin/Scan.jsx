import { useContext, useEffect, useState } from "react";
import {
    Container,
    ScreenTitle,
    FlexCol,
    Select,
    User,
} from "../utils/Utilities";
import data from "../data/scan.json";
import { Html5Qrcode } from "html5-qrcode";
import { AdminControlContext } from "../contexts/adminControlContext";
import { useNavigate } from "react-router-dom";

const Scan = () => {
    const navigate = useNavigate();
    let [id, setId] = useState(null);
    function onScanSuccess(decodedText) {
        setId(decodedText);
    }
    useEffect(() => {
        const html5QrCode = new Html5Qrcode("reader");
        const config = { qrbox: { width: 200, height: 300 } };
        html5QrCode.start({ facingMode: "environment" }, config, onScanSuccess);
        window.onbeforeunload = async function () {
            await html5QrCode.stop();
        };
    }, []);
    useEffect(() => {
        if (id) {
            setId(null);
        }
    }, [id]);

    let stateAC = useContext(AdminControlContext);
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
            <FlexCol className="!gap-5">
                {stateAC.adminData && (
                    <Select
                        data={data.filter((e) => {
                            if (stateAC.adminData[e.adminName]) {
                                return e;
                            }
                        })}
                    />
                )}
                <User
                    name="All Users"
                    className="!w-[300px]"
                    button={true}
                    onClick={() => {
                        navigate("/users");
                    }}
                />
            </FlexCol>
        </Container>
    );
};

export default Scan;
