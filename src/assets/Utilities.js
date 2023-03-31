import { Theme } from "../assets/Theme";
import { Grid, Button } from "@mui/material";

const CenteredGrid = ({ classname, style, children }) => {
  return (
    <Theme>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classname}
        display="flex"
        style={style}
      >
        {children}
      </Grid>
    </Theme>
  );
};

const CenteredDiv = ({ classname, children }) => {
  const classes = "flex flex-col justify-center items-center w-screen " + classname;
  return <div className={classes}>{children}</div>;
};

const PrimaryButton = ({ onclick, children }) => {
    return (
      <Button
        variant="contained"
        onClick={onclick}
      >
        {children}
      </Button>
    );
  };

const SecondaryButton = ({ onclick, children }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundImage: "linear-gradient(0deg, #efefef 0.58%, #efefef 95.65%);",
        color: "#101010",
        "&:hover": {
            backgroundImage: "linear-gradient(0deg, #efefef 0.58%, #efefef 95.65%);",
        },
      }}
      onClick={onclick}
    >
      {children}
    </Button>
  );
};

export { CenteredGrid, CenteredDiv, PrimaryButton, SecondaryButton };
