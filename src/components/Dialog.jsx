import { Typography } from "@mui/material";
import { Box, FlexCol, User } from "../utils/Utilities";
import { Animation } from "../components/exports";
import { Modal } from "@mui/material";
import { db } from "../utils/firebase";
import { runTransaction, doc } from "firebase/firestore";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
};

const Dialog = ({ open, user, team, ids, entity, handleClose }) => {
    async function handleSave() {
        const adminRef = doc(db, "users", ids);
        await runTransaction(db, async (transaction) => {
            const adminDoc = await transaction.get(adminRef);
            if (!adminDoc.exists()) {
                console.error("Document does not exist!");
            } else if (adminDoc.data()[entity]) {
                alert("Already scanned");
            } else {
                transaction.update(adminRef, { [entity]: true });
            }
            handleClose();
        });
    }
    return (
        <Modal open={open}>
            <Box className="rounded-lg !w-[75vw] !p-6" style={style}>
                <FlexCol className="!gap-1">
                    <FlexCol>
                        <Typography
                            variant="ticket_title"
                            className="uppercase"
                        >
                            {user}
                        </Typography>
                        <Typography variant="ticket_subtitle">
                            {team}
                        </Typography>
                        <Typography variant="entity_subtitle">
                            {entity}
                        </Typography>
                    </FlexCol>
                    <Animation size={200} />
                    <User
                        name="Save"
                        onClick={handleSave}
                        className="!w-[50vw] !h-10 !border-[#afafaf] !border"
                    />
                </FlexCol>
            </Box>
        </Modal>
    );
};

export default Dialog;
