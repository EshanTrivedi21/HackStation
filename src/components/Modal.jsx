import { useState } from "react";
import { Typography } from "@mui/material";
import { FlexCol } from "../utils/Utilities";
import Backdrop from "@mui/material/Backdrop";

const Modal = ({ title, subtitle, isOpen, onClose }) => {
    const [open, setOpen] = useState(isOpen);

    const handleClose = () => {
        setOpen(false);
        onClose && onClose();
    };

    return (
        <>
            {open && (
                <Backdrop
                    sx={{
                        zIndex: 1000,
                        backgroundImage:
                            "linear-gradient(180deg, #20202075 0%, #10101075 100%)",
                    }}
                    open={open}
                    onClick={handleClose}
                >
                    <FlexCol
                        className="rounded-lg !p-5 gap-2 !max-w-[75vw] !items-start overflow-hidden"
                        style={{
                            background:
                                "radial-gradient(132.5% 132.5% at 48.94% 50%, #303030 0%, #202020 99.25%)",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Typography variant="modal_title">{title}</Typography>
                        <Typography variant="modal_subtitle">
                            {subtitle}
                        </Typography>
                    </FlexCol>
                </Backdrop>
            )}
        </>
    );
};

export default Modal;
