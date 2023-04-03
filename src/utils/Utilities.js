import { memo } from "react";
import { Theme } from "./Theme";
import { Grid, Button, Typography, ButtonBase } from "@mui/material";

const CenteredGrid = ({ className, style, children, component }) => {
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
                component={component || "div"}
            >
                {children}
            </Grid>
        </Theme>
    );
};

const FlexDiv = ({ className, children }) => {
    const classes = "flex justify-center items-center w-screen " + className;
    return <div className={classes}>{children}</div>;
};

const CenteredDiv = ({ className, children }) => {
    const classes =
        "flex flex-col justify-center items-center w-screen " + className;
    return <div className={classes}>{children}</div>;
};

const PrimaryButton = ({ onClick, children }) => {
    return (
        <div className="rounded-[10px] p-[1px] bg-[linear-gradient(166.2deg,#FF7A00_-6.36%,#AC2900_124.84%)] w-[75%] h-14">
            <Button variant="contained" onClick={onClick}>
                {children}
            </Button>
        </div>
    );
};

const Modal = ({ title, subtitle }) => {
    return (
        <CenteredGrid style={{ minHeight: "100vh" }}>
            <div
                className="flex flex-col rounded-lg p-10 gap-2"
                style={{
                    background:
                        "radial-gradient(132.5% 132.5% at 48.94% 50%, #303030 0%, #202020 99.25%)",
                }}
            >
                <Typography variant="modal_title">{title}</Typography>
                <Typography variant="modal_subtitle">{subtitle}</Typography>
            </div>
        </CenteredGrid>
    );
};

const Box = ({ children, className, component }) => {
    const classes = "flex rounded-lg w-[85vw] " + className;
    return (
        <CenteredGrid component={component} className={"h-full"}>
            <div
                className={classes}
                style={{
                    background:
                        "radial-gradient(132.5% 132.5% at 48.94% 50%, #303030 0%, #202020 99.25%)",
                }}
            >
                {children}
            </div>
        </CenteredGrid>
    );
};

const Icon = memo(({ src, alt, size }) => {
    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            style={{
                width: size + "px",
                height: size + "px",
            }}
        />
    );
});

const ContainerID = ({ children }) => {
    return (
        <CenteredGrid className="relative">
            <div
                className="rounded-lg w-[84vw] h-[124px] p-[0.5px]"
                style={{
                    background:
                        "linear-gradient(166.2deg, #FF7A00 -6.36%, #AC2900 124.84%)",
                }}
            >
                <div
                    className="flex rounded-lg w-full h-full"
                    style={{
                        background:
                            "radial-gradient(104.64% 443.14% at 0% 3.59%, #303030 0%, #171717 26.18%)",
                    }}
                >
                    {children}
                </div>
            </div>
        </CenteredGrid>
    );
};

const Card = ({ size, icon, title, subtitle, importance, button, onClick }) => {
    return (
        <>
            <div
                className={`rounded-lg w-[85vw] h-20 ${
                    importance
                        ? " p-[0.75px] bg-[linear-gradient(166.2deg,#FF7A00_-6.36%,#AC2900_124.84%)]"
                        : ""
                }`}
                onClick={onClick}
            >
                <Box
                    className={`flex rounded-lg w-full h-full pl-6`}
                    component={button ? ButtonBase : "div"}
                >
                    <FlexDiv className="!justify-start gap-5">
                        <Icon src={icon} size={size} />
                        <div className="flex flex-col justify-center items-start">
                            <Typography variant="card_title">
                                {title}
                            </Typography>
                            <Typography variant="card_subtitle">
                                {subtitle}
                            </Typography>
                        </div>
                    </FlexDiv>
                </Box>
            </div>
        </>
    );
};

const BackIcon = memo(({ to }) => {
    return (
        <img
            src={"/icons/back.svg"}
            alt={"back"}
            loading="lazy"
            style={{
                width: "25px",
                height: "25px",
            }}
            onClick={() => {
                window.history.back();
            }}
        />
    );
})

export {
    CenteredGrid,
    FlexDiv,
    CenteredDiv,
    PrimaryButton,
    Modal,
    Icon,
    Box,
    ContainerID,
    Card,
    BackIcon,
};
