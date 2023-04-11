import React from 'react';
import Lottie from "react-lottie";
import animationData from "../data/animation.json";

const Animation = ({ size }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
  return (
    <Lottie options={defaultOptions} height={size} width={size} />
  )
}

export default Animation