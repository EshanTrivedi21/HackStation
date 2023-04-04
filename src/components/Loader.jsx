import Backdrop from "@mui/material/Backdrop";
import { Theme } from "../utils/Theme";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader({ open }) {
    return (
        <Theme>
            <Backdrop
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundImage:
                        "linear-gradient(180deg, #202020 0%, #101010 100%)",
                }}
                open={open}
            >
                <CircularProgress color="secondary" />
            </Backdrop>
        </Theme>
    );
}
