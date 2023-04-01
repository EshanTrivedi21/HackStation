import { Theme } from "./Theme";
import { Grid, Button } from "@mui/material";

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

const PrimaryButton = ({ onclick, children }) => {
  return (
    <div className="rounded-[10px] p-[0.75px] bg-[linear-gradient(166.2deg,#FF7A00_-6.36%,#AC2900_124.84%)] w-[75%] h-14">
      <Button variant="contained" onClick={onclick}>
        {children}
      </Button>
    </div>
  );
};

export {
  CenteredGrid,
  CenteredDiv,
  PrimaryButton,
};
