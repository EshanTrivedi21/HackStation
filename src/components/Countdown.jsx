import { useState, useEffect } from "react";
import { Box, CenteredDiv } from "../utils/Utilities";
import { Typography } from "@mui/material";

const Countdown = ({ start }) => {
    const [remainingTime, setRemainingTime] = useState(null);

    useEffect(() => {
        let intervalId;

        if (start) {
            const endTime = new Date();
            endTime.setHours(endTime.getHours() + 24);

            intervalId = setInterval(() => {
                const diff = endTime - new Date();
                const hours = Math.floor(diff / (1000 * 60 * 60));
                const minutes = Math.floor((diff / (1000 * 60)) % 60);
                const seconds = Math.floor((diff / 1000) % 60);

                setRemainingTime({ hours, minutes, seconds });
            }, 1000);
        } else {
            setRemainingTime({ hours: 24, minutes: 0, seconds: 0 });
        }

        return () => clearInterval(intervalId);
    }, [start]);

    const formatTime = (time) => {
        return `${time.toString().padStart(2, "0")}`;
    };

    return (
        <Box>
            <CenteredDiv className="p-4">
                <div className="flex flex-col justify-center items-start">
                    <Typography variant="timer_title">
                        Coding Ends in ..
                    </Typography>
                    {remainingTime ? (
                        <div className="flex gap-2">
                            <Typography variant="timer">
                                {formatTime(remainingTime.hours)}
                                <span
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "300",
                                        color: "#D7D4D3",
                                    }}
                                >
                                    H
                                </span>
                            </Typography>
                            <Typography variant="timer"> : </Typography>
                            <Typography variant="timer">
                                {formatTime(remainingTime.minutes)}
                                <span
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "300",
                                        color: "#D7D4D3",
                                    }}
                                >
                                    M
                                </span>
                            </Typography>
                            <Typography variant="timer"> : </Typography>
                            <Typography variant="timer">
                                {formatTime(remainingTime.seconds)}
                                <span
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "300",
                                        color: "#D7D4D3",
                                    }}
                                >
                                    S
                                </span>
                            </Typography>
                        </div>
                    ) : (
                        <div className="flex">
                            <div>Hours: 24</div>
                            <div>Minutes: 00</div>
                            <div>Seconds: 00</div>
                        </div>
                    )}
                </div>
            </CenteredDiv>
        </Box>
    );
};

export default Countdown;
