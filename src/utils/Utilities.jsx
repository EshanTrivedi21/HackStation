import { memo, useState } from "react";
import { Theme } from "./Theme";
import { Button, Typography, ButtonBase, Switch } from "@mui/material";
import { db } from "./firebase";
import { doc, runTransaction } from "firebase/firestore";

const Icon = memo(({ src, alt, width, height, className }) => {
    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            style={{
                width: width + "px",
                height: height + "px",
            }}
            className={className}
        />
    );
});

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
});

const Select = ({ data, className, onChange, value }) => {
    const selectStyle = {
        border: "none",
        borderRadius: "10px",
        padding: "0.75rem",
        color: "#cfcfcf",
        fontFamily: "Poppins",
        fontWeight: "normal",
        fontSize: "1rem",
        width: "60vw",
        outline: "none",
        background:
            "radial-gradient(132.5% 132.5% at 48.94% 50%, #303030 0%, #202020 99.25%)",
    };

    return (
        <select
            className={className}
            onChange={onChange}
            value={value}
            style={selectStyle}
        >
            <option value="0">Select Entity:</option>
            {data.map((item, index) => (
                <option key={index} value={item.value}>
                    {item.name}
                </option>
            ))}
        </select>
    );
};

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
                    gap: gap || "1.25rem",
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

const ScreenTitle = ({ title, className }) => {
    const classes =
        "flex justify-start items-center w-screen gap-6 ml-14 " + className;
    return (
        <div className={classes}>
            <BackIcon to="" />
            <Typography variant="modal_title">{title}</Typography>
        </div>
    );
};

const PrimaryButton = ({ onClick, children, className }) => {
    const classes = "rounded-[10px] p-[1px] bg-[linear-gradient(166.2deg,#FF7A00_-6.36%,#AC2900_124.84%)] w-[75%] h-14 " + className;
    return (
        <div className={classes}>
            <Button variant="contained" onClick={onClick}>
                {children}
            </Button>
        </div>
    );
};

const FlexRow = ({ className, children, style }) => {
    const classes = "flex justify-center items-center w-screen " + className;
    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

const FlexCol = ({ className, children, style }) => {
    const classes =
        "flex flex-col justify-center items-center w-screen " + className;
    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

const Box = ({
    children,
    importance,
    done,
    onClick,
    className,
    component,
    padding,
}) => {
    const classes =
        "flex rounded-lg w-[85vw] flex justify-center items-center " +
        className;
    return (
        <Container
            onClick={onClick}
            component={component}
            minHeight="auto"
            padding="0"
        >
            <div
                className={classes}
                style={{
                    padding: padding || "0",
                    background:
                        "radial-gradient(132.5% 132.5% at 48.94% 50%, #303030 0%, #202020 99.25%)",
                    border: importance ? "1px solid #FF7A00" : "",
                    ...(done && {
                        border: "1px solid #03D06E",
                    }),
                }}
            >
                {children}
            </div>
        </Container>
    );
};

const ContainerID = ({ children }) => {
    return (
        <Container
            minHeight="auto"
            padding="10px"
            className="relative rounded-lg"
        >
            <div
                className="flex rounded-lg w-[85vw] h-[122.5px]"
                style={{
                    background:
                        "radial-gradient(104.64% 443.14% at 0% 3.59%, #303030 0%, #171717 26.18%)",
                    border: "1px solid #FF7A00",
                }}
            >
                {children}
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
    done,
    button,
    onClick,
    disabled = false,
}) => {
    return (
        <>
            <Box
                className={`rounded-lg h-20 !pl-6 ${
                    disabled &&
                    "!bg-[radial-gradient(132.5%_132.5%_at_48.94%_50%,rgba(48,48,48,0.43)_0%,rgba(32,32,32,0.46)_99.25%)]"
                }`}
                component={button ? ButtonBase : "div"}
                onClick={!disabled && onClick}
                importance={importance}
                done={done}
            >
                <FlexRow className="!justify-start gap-5">
                    <Icon
                        src={icon}
                        width={width}
                        height={height}
                        className={`${disabled && "opacity-25"}`}
                    />
                    <FlexCol
                        className={`!w-auto !items-start ${
                            disabled && "opacity-25"
                        }`}
                    >
                        <Typography variant="card_title">{title}</Typography>
                        <Typography variant="card_subtitle">
                            {subtitle}
                        </Typography>
                    </FlexCol>
                </FlexRow>
            </Box>
        </>
    );
};

const State = ({ title, check = false, value }) => {
    const [checked, setChecked] = useState(check);
    const adminRef = doc(db, "admin-controls", "6d8cBhBOJndArykfCBxG");
    const handleChange = async (event) => {
        setChecked(event.target.checked);
        console.log(value, checked);
        await runTransaction(db, async (transaction) => {
            const adminDoc = await transaction.get(adminRef);
            if (!adminDoc.exists()) {
                throw "Document does not exist!";
            } else {
                transaction.update(adminRef, { [value]: event.target.checked });
            }
        });
    };

    return (
        <Box className="rounded-lg h-20 !px-6">
            <FlexRow className="!justify-between">
                <Typography variant="card_title">{title}</Typography>
                <Switch
                    size="medium"
                    color="warning"
                    checked={checked}
                    onChange={handleChange}
                />
            </FlexRow>
        </Box>
    );
};

export {
    Icon,
    BackIcon,
    FlexRow,
    FlexCol,
    PrimaryButton,
    ScreenTitle,
    Box,
    Card,
    Container,
    ContainerID,
    Select,
    State,
};
