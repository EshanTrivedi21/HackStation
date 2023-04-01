import { Theme } from "./Theme";
import { Grid, Button, Typography } from "@mui/material";

const CenteredGrid = ({ className, style, children }) => {
  return (
    <Theme>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={className}
        display="flex"
        style={style}
      >
        {children}
      </Grid>
    </Theme>
  );
};

const CenteredDiv = ({ className, children }) => {
  const classes =
    "flex flex-col justify-center items-center w-screen " + className;
  return <div className={classes}>{children}</div>;
};

const PrimaryButton = ({ onClick, children }) => {
  return (
    <div className="rounded-[10px] p-[0.75px] bg-[linear-gradient(166.2deg,#FF7A00_-6.36%,#AC2900_124.84%)] w-[75%] h-14">
      <Button variant="contained" onClick={onClick}>
        {children}
      </Button>
    </div>
  );
};

const Modal = ({ title, subtitle }) => {
  return (
    <CenteredGrid style={{minHeight: "100vh"}}>
      <div className="flex flex-col rounded-lg p-10 gap-2" style={{background: "radial-gradient(132.5% 132.5% at 48.94% 50%, #303030 0%, #202020 99.25%)"}}>
        <Typography variant="modal_title">{title}</Typography>
        <Typography variant="modal_subtitle">{subtitle}</Typography>
      </div>
    </CenteredGrid>
  );
};


export {
  CenteredGrid,
  CenteredDiv,
  PrimaryButton,
  Modal,
};
