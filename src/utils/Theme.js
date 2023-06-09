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
            main: "#F48037",
            contrastText: "#101010",
        },
    },
    typography: {
        login_title: {
            fontSize: "1.8rem",
            fontWeight: "600",
            fontFamily: "Poppins, sans-serif",
        },
        login_subtitle: {
            fontSize: "1.1rem",
            fontWeight: "300",
            fontFamily: "Poppins, sans-serif",
            letterSpacing: "0.1rem",
        },
        modal_title: {
            fontSize: "1.5rem",
            fontWeight: "500",
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
        id_title: {
            fontSize: "0.88rem",
            fontWeight: "500",
            fontFamily: "Poppins, sans-serif",
            color: "#efefef",
            letterSpacing: "0.1rem",
        },
        id_sub: {
            fontSize: "0.65rem",
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
        card_title: {
            fontSize: "20px",
            fontWeight: "500",
            fontFamily: "Poppins, sans-serif",
            color: "#efefef",
            textTransform: "capitalize",
        },
        card_subtitle: {
            fontSize: "11px",
            fontWeight: "300",
            fontFamily: "Poppins, sans-serif",
            color: "#cfcfcf",
        },
        ticket_title: {
            fontSize: "24px",
            fontWeight: "500",
            fontFamily: "Poppins, sans-serif",
            color: "#efefef",
        },
        ticket_subtitle: {
            fontSize: "12px",
            fontWeight: "300",
            fontFamily: "Poppins, sans-serif",
            color: "#cfcfcf",
        },
        entity_subtitle: {
            fontSize: "18px",
            fontWeight: "300",
            fontFamily: "Poppins, sans-serif",
            color: "#cfcfcf",
        },
        ticket_details: {
            fontSize: "20px",
            fontWeight: "500",
            fontFamily: "Poppins, sans-serif",
            color: "#cfcfcf",
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
                        color: "#cfcfcf",
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
