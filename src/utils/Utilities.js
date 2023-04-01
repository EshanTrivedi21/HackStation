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
        minHeight="100vh"
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
    <div className="rounded-[10px] p-[1.5px] bg-[linear-gradient(166.2deg,#FF7A00_-6.36%,#AC2900_124.84%)] w-[80%] h-14">
      <Button
        variant="contained"
        onClick={onclick}
        style={{
          height: "100%",
          width: "100%",
          padding: 0,
          backgroundImage: "linear-gradient(180deg, #202020 0%, #101010 100%)",
          color: "#E38124",
        }}
      >
        {children}
      </Button>
    </div>
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

const Container = ({ className, children }) => {
  return (
    <div className="w-screen h-screen bg-[#efefef] absolute -bottom-[20%] rounded-3xl">
      {children}
    </div>
  );
};

export {
  CenteredGrid,
  CenteredDiv,
  PrimaryButton,
  SecondaryButton,
  BackIcon,
  Container,
};
