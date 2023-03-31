import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    primary: {
      main: "#101010",
      contrastText: "#efefef",
    },
    secondary: {
      main: "#efefef",
      contrastText: "#101010",
    },
  },
  typography: {
    h1: {
      fontSize: "2.25rem",
      fontWeight: "bold",
      textShadow: "0px 5px 4px rgba(0, 0, 0, 0.36)",
      fontFamily: "Poppins, sans-serif",
      letterSpacing: "0.2rem",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: "bold",
      textShadow: "0px 2.5px 2.5px rgba(0, 0, 0, 0.25)",
      fontFamily: "Poppins, sans-serif",
      letterSpacing: "0.1rem",
    },
    h3: {
      fontSize: "1.1rem",
      textShadow: "0px 2.5px 2px rgba(0, 0, 0, 0.25)",
      fontFamily: "Poppins, sans-serif",
      letterSpacing: "0.1rem",
    },
    h4: {
      fontSize: "1rem",
      textShadow: "0px 5px 4px rgba(0, 0, 0, 0.36)",
      fontFamily: "Poppins, sans-serif",
      letterSpacing: "0.1rem",
      fontStyle: "italic",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "70%",
          borderRadius: "10px",
          textTransform: "none",
          fontWeight: "bold",
          letterSpacing: "0.1rem",
          fontSize: "1.25rem",
          fontFamily: "Poppins, sans-serif",
          color: "#efefef",
          padding: "5px 25px",
          boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.36)",
          backgroundImage: "linear-gradient(91.47deg, #404040 0.58%, #101010 95.65%);",
          "&:hover": {
            backgroundImage: "linear-gradient(91.47deg, #404040 0.58%, #101010 95.65%);",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "70%",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderRadius: "10px",
              borderColor: "#101010",
            },
            "&:hover fieldset": {
              borderColor: "#101010",
              color: "#101010",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#101010",
            },
          },
          "& .MuiFormLabel-root": {
            color: "#101010",
          },
          "& .MuiFormHelperText-root": {
            color: "#808080",
          },
        },
      },
    },
  },
});

export function Theme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
