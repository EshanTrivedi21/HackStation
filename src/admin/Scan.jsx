import { useContext, useEffect, useState } from "react";
import {
    Container,
    ScreenTitle,
    FlexCol,
    Select,
    User,
} from "../utils/Utilities";
import { Dialog } from "../components/exports";
import data from "../data/scan.json";
import { Html5Qrcode } from "html5-qrcode";
import { AdminControlContext } from "../contexts/adminControlContext";
import { useLocation, useNavigate } from "react-router-dom";

const Scan = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let [id, setId] = useState(null);
    let [selected, setSelected] = useState(location?.state?.entity || 0);

    let [dialog, setDialog] = useState(false);
    let [user, setUser] = useState(null);
    let [team, setTeam] = useState(null);
    let [ids, setIds] = useState(null);
    function onScanSuccess(decodedText) {
        setId(decodedText);
    }
    const handleClose = () => {
        setDialog(false);
    };
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
                let user = n1[0].replace("_", " ");
                let team = n1[1];
                let ids = n[1];
                setDialog(true);
                setUser(user);
                setIds(ids);
                setTeam(team);
            } else {
                setId(null);
                alert("Please select an entity");
            }
            setId(null);
        }
    }, [id]);

    let stateAC = useContext(AdminControlContext);
    return (
        <Container minHeight="auto" gap="4rem" overflow="hidden">
            <Dialog
                open={dialog}
                user={user}
                entity={selected}
                team={team}
                ids={ids}
                handleClose={handleClose}
            />
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
                        onChange={(e) => {
                            setSelected(e.target.value);
                        }}
                        defaultValue={
                            location.state ? location.state.entity : 0
                        }
                    />
                )}
                <User
                    name="All Users"
                    className="!w-[300px] !h-14"
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
