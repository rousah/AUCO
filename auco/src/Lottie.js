import React from "react";
import Lottie from "react-lottie";

export default function LottieAnimation({ lotti, width, height, className, loop }) {
    const defaultOptions = {
        loop: loop,
        autoplay: true,
        animationData: lotti,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className={className}>
            <Lottie options={defaultOptions} height={height} width={width} style={{cursor: "default"}}/>
        </div>
    );
};