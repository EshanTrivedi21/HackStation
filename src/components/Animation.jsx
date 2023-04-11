import React from 'react';
import Lottie from "react-lottie";
import animationData from "../data/animation.json";

const Animation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
  return (
    <Lottie options={defaultOptions} height={300} width={300} />
  )
}

export default Animation