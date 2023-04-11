import { useState, useEffect } from "react";
import { Box, FlexCol } from "../utils/Utilities";
import { Typography } from "@mui/material";

const Span = ({ children }) => {
  return (
    <span
      style={{
        fontSize: "1.5rem",
        fontWeight: "700",
        color: "#D7D4D3",
      }}
    >
      {children}
    </span>
  );
};

const Countdown = ({ start }) => {
  const [remainingTime, setRemainingTime] = useState(null);

  const startTimer = () => {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 21);
    localStorage.setItem("endTime", endTime);
    return setInterval(() => {
      const diff = endTime - new Date();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setRemainingTime({ hours, minutes, seconds });
    }, 1000);
  };

  useEffect(() => {
    let intervalId;
    const storedEndTime = localStorage.getItem("endTime");

    if (start && storedEndTime) {
      const endTime = new Date(storedEndTime);
      intervalId = startTimer(endTime);
    } else if (start) {
      intervalId = startTimer();
    } else {
      setRemainingTime({ hours: 21, minutes: 0, seconds: 0 });
    }

    return () => clearInterval(intervalId);
  }, [start]);

  const formatTime = (time) => {
    return `${time.toString().padStart(2, "0")}`;
  };

  const renderCountdown = () => {
    if (!remainingTime) {
      return (
        <>
          <Typography variant="timer">
            21 <Span>H</Span>
          </Typography>
          <Typography variant="timer"> : </Typography>
          <Typography variant="timer">
            00 <Span>M</Span>
          </Typography>
          <Typography variant="timer"> : </Typography>
          <Typography variant="timer">
            00 <Span>S</Span>
          </Typography>
        </>
      );
    }

    return (
      <>
        <Typography variant="timer" className="gradient-text">
          {formatTime(remainingTime.hours)}
          <Span>H</Span>
        </Typography>
        <Typography variant="timer"> : </Typography>
        <Typography variant="timer" className="gradient-text">
          {formatTime(remainingTime.minutes)}
          <Span>M</Span>
        </Typography>
        <Typography variant="timer"> : </Typography>
        <Typography variant="timer" className="gradient-text">
          {formatTime(remainingTime.seconds)}
          <Span>S</Span>
        </Typography>
      </>
    );
  };

  return (
    <Box padding="1rem">
      <FlexCol className="!items-start !w-auto">
        <Typography variant="timer_title">Coding Ends in ..</Typography>
        <div className="flex gap-2">{renderCountdown()}</div>
      </FlexCol>
    </Box>
  );
};

export default Countdown;