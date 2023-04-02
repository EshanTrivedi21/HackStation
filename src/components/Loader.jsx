import Backdrop from "@mui/material/Backdrop";
import { Theme } from "../utils/Theme";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader({ open }) {
    return (
        <Theme>
        <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
        >
            <CircularProgress color="secondary" />
        </Backdrop>
        </Theme>
    );
}
