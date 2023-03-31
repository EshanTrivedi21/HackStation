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
        minHeight="100vh"
        style={style}
      >
        {children}
      </Grid>
    </Theme>
  );
};

const CenteredDiv = ({ classname, children }) => {
  const classes =
    "flex flex-col justify-center items-center w-screen " + classname;
  return <div className={classes}>{children}</div>;
};

const PrimaryButton = ({ onclick, children }) => {
  return (
    <Button variant="contained" onClick={onclick}>
      {children}
    </Button>
  );
};

const SecondaryButton = ({ onclick, children }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundImage:
          "linear-gradient(0deg, #efefef 0.58%, #efefef 95.65%);",
        color: "#101010",
        "&:hover": {
          backgroundImage:
            "linear-gradient(0deg, #efefef 0.58%, #efefef 95.65%);",
        },
      }}
      onClick={onclick}
    >
      {children}
    </Button>
  );
};

const BackIcon = ({ onclick }) => {
  return (
    <i
      className="fa-solid fa-arrow-left"
      style={{
        fontSize: "2rem",
        color: "#efefef",
        position: "absolute",
        top: "1.5rem",
        left: "1.5rem",
      }}
      onClick={onclick}
    ></i>
  );
};

const Container = ({ classname, children }) => {
    return <div className="w-screen h-screen bg-[#efefef] absolute -bottom-[20%] rounded-3xl">{children}</div>;
};

export { CenteredGrid, CenteredDiv, PrimaryButton, SecondaryButton, BackIcon, Container };
