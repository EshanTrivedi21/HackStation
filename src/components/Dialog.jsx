import { useState } from "react";
import { Typography } from "@mui/material";
import { Box, FlexCol, User } from "../utils/Utilities";
import { Animation } from "../components/exports";
import { Modal } from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
};

const Dialog = ({ open, user, entity }) => {
    const [isOpen, setIsOpen] = useState(open);

    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <Modal open={isOpen} onClose={handleClose}>
            <Box className="rounded-lg !w-[75vw] !p-6" style={style}>
                <FlexCol className="!gap-1">
                    <FlexCol>
                        <Typography variant="ticket_title">{user}</Typography>
                        <Typography variant="entity_subtitle">
                            {entity}
                        </Typography>
                    </FlexCol>
                    <Animation size={200} />
                    <User name="Save" onClick={handleClose} className="!w-[50vw] !h-10 !border-[#afafaf] !border" />
                </FlexCol>
            </Box>
        </Modal>
    );
};

export default Dialog;
