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
      fontFamily: "Poppins, sans-serif",
      letterSpacing: "0.1rem",
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
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "100%",
          borderRadius: "10px",
          textTransform: "none",
          fontWeight: "bold",
          letterSpacing: "0.1rem",
          fontSize: "1.25rem",
          fontFamily: "Poppins, sans-serif",
          color: "#efefef",
          boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.36)",
          height: "100%",
          width: "100%",
          padding: 0,
          backgroundImage: "linear-gradient(180deg, #202020 0%, #101010 100%)",
          color: "#E38124",
          "&:hover": {
            backgroundImage:
              "linear-gradient(91.47deg, #404040 0.58%, #101010 95.65%);",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "80%",
          "& .MuiInputBase-input": {
            color: "#E38124"
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderRadius: "10px",
              borderColor: "#353535",
            },
            "&:hover fieldset": {
              borderColor: "#E381248A",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#E38124",
            },
          },
          "& .MuiFormLabel-root": {
            color: "#353535",
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "#E38124",
          },
          "& .MuiFormHelperText-root": {
            color: "#E38124",
          },
        },
      },
    },
  },
});

export function Theme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
