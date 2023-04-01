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
      contrastText: "#e8e8e8",
    },
    secondary: {
      main: "#e8e8e8",
      contrastText: "#101010",
    },
  },
  typography: {
    h2: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      fontFamily: "Poppins, sans-serif",
    },
    h3: {
      fontSize: "1.1rem",
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
    modal_title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      fontFamily: "Poppins, sans-serif",
      color: "#efefef",
    },
    modal_subtitle: {
      fontSize: "1rem",
      fontFamily: "Poppins, sans-serif",
      color: "#cfcfcf",
    },
    greetings_title: {
      fontSize: "1.2rem",
      fontWeight: "500",
      fontFamily: "Poppins, sans-serif",
      color: "#efefef",
      letterSpacing: "0.1rem",
    },
    greetings_subtitle: {
      fontSize: "0.8rem",
      fontWeight: "300",
      fontFamily: "Poppins, sans-serif",
      color: "#cfcfcf",
    },
    timer: {
      fontSize: "35px",
      lineHeight: "1.4",
      fontWeight: "500",
      fontFamily: "Poppins, sans-serif",
      color: "#d5d5d5",
      letterSpacing: "0.1rem",
    },
    timer_title: {
      fontSize: "15px",
      fontWeight: "300",
      fontFamily: "Poppins, sans-serif",
      color: "#d5d5d5",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "100%",
          width: "100%",
          borderRadius: "10px",
          textTransform: "none",
          letterSpacing: "0.1rem",
          fontSize: "1.25rem",
          fontFamily: "Poppins, sans-serif",
          boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.36)",
          padding: 0,
          backgroundColor: "#151515 !important",
          color: "#F48037",
          "&:hover": {
            backgroundColor: "#151515 !important",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "75%",
          "& .MuiInputBase-input": {
            color: "#cfcfcf"
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderRadius: "10px",
              borderColor: "#505050",
            },
            "&:hover fieldset": {
              borderColor: "#F48037",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#F48037",
            },
          },
          "& .MuiFormLabel-root": {
            color: "#505050",
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "#F48037",
          },
        },
      },
    },
  },
});

export function Theme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
