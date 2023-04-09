import { useContext, useEffect, useState } from "react";
import { Container, ScreenTitle, FlexCol, Select } from "../utils/Utilities";
import data from "../data/scan.json";
import { Html5Qrcode } from "html5-qrcode";
import { AdminControlContext } from "../contexts/adminControlContext";
import { useLocation, useNavigate } from "react-router-dom";

const Scan = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let [id, setId] = useState(null);
    let [selected, setSelected] = useState(location?.state?.entity||0);
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
            if (selected != 0) {
                let n = id.split("#");
                let n1 = n[0].split("@");
                navigate("/scanned", {
                    state: {
                        entity: selected,
                        user: n1[0].replace("_", " "),
                        team: n1[1],
                        id: n[1],
                    },
                });
            } else {
                setId(null);
                alert("Please select an entity");
            }
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
            <FlexCol>
                {stateAC.adminData && (
                    <Select
                        data={data.filter((e) => {
                            if (stateAC.adminData[e.adminName]) {
                                return e;
                            }
                        })}
                        onChange={(e) => {
                            setSelected(e.target.value);
                        }}
                        defaultValue={
                            location.state ? location.state.entity : 0
                        }
                    />
                )}
            </FlexCol>
        </Container>
    );
};

export default Scan;
