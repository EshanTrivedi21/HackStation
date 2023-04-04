import { memo } from "react";
import { Theme } from "./Theme";
import { Grid, Button, Typography, ButtonBase } from "@mui/material";

const Icon = memo(({ src, alt, width, height }) => {
    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            style={{
                width: width + "px",
                height: height + "px",
            }}
        />
    );
});


const BackIcon = memo(({ to }) => {
    return (
        <img
            src={"/icons/back.png"}
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
});

const Container = ({
    className,
    style,
    children,
    minHeight,
    gap,
    component,
    padding,
    onClick,
}) => {
    return (
        <Theme>
            <div
                className={className}
                onClick={onClick ? onClick : () => {}}
                style={{
                    gap: gap || "1.5rem",
                    paddingTop: padding || "3rem",
                    paddingBottom: padding || "2.5rem",
                    minHeight: minHeight || "100vh",
                    overflowX: "hidden",
                    overflowY: minHeight ? "hidden" : "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100vw",
                    ...style,
                }}
                component={component || "div"}
            >
                {children}
            </div>
        </Theme>
    );
};

const FlexDiv = ({ className, children }) => {
    const classes = "flex justify-center items-center w-screen " + className;
    return <div className={classes}>{children}</div>;
};

const ScreenTitle = ({ title }) => {
    return (
        <div className="flex justify-start items-center w-screen gap-6 ml-14">
            <BackIcon to="" />
            <Typography variant="modal_title">{title}</Typography>
        </div>
    );
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
        <Container>
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
        </Container>
    );
};

const Box = ({
    children,
    importance,
    onClick,
    className,
    component,
    padding,
}) => {
    const classes = "flex rounded-lg w-[84.7vw] flex justify-center items-center " + className;
    return (
        <Container
            onClick={onClick}
            component={component}
            minHeight="auto"
            padding="0"
        >
            <div
                className="rounded-lg w-[85vw] p-[0.5px]"
                style={{
                    height: importance ? "81.5px" : "",
                    background: importance? "linear-gradient(166.2deg, #FF7A00 -6.36%, #AC2900 124.84%)" : "",
                }}
            >
                <div
                    className={classes}
                    style={{
                        padding: padding || "0",
                        background:
                            "radial-gradient(132.5% 132.5% at 48.94% 50%, #303030 0%, #202020 99.25%)",
                    }}
                >
                    {children}
                </div>
            </div>
        </Container>
    );
};

const ContainerID = ({ children }) => {
    return (
        <Container className="relative" minHeight="auto" padding="10px">
            <div
                className="rounded-lg w-[84vw] h-[124.5px] p-[0.5px]"
                style={{
                    background:
                        "linear-gradient(166.2deg, #FF7A00 -6.36%, #AC2900 124.84%)",
                }}
            >
                <div
                    className="flex rounded-lg w-full h-full"
                    style={{
                        background:"radial-gradient(104.64% 443.14% at 0% 3.59%, #303030 0%, #171717 26.18%)",
                    }}
                >
                    {children}
                </div>
            </div>
        </Container>
    );
};

const Card = ({
    width,
    height,
    icon,
    title,
    subtitle,
    importance,
    button,
    onClick,
}) => {
    return (
        <>
            <Box
                className="rounded-lg h-20 !pl-6"
                component={button ? ButtonBase : "div"}
                onClick={onClick}
                importance={importance}
            >
                <FlexDiv className="!justify-start gap-5">
                    <Icon src={icon} width={width} height={height} />
                    <div className="flex flex-col justify-center items-start">
                        <Typography variant="card_title">{title}</Typography>
                        <Typography variant="card_subtitle">
                            {subtitle}
                        </Typography>
                    </div>
                </FlexDiv>
            </Box>
        </>
    );
};

export {
    Container,
    FlexDiv,
    ScreenTitle,
    CenteredDiv,
    PrimaryButton,
    Modal,
    Icon,
    Box,
    ContainerID,
    Card,
    BackIcon,
};
