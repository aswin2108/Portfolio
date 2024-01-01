import { styled } from "@mui/material";
import { keyframes } from "@emotion/react";

export const HeroText = styled("div")(() => ({
    "@media (max-width: 900px)": {
        // marginLeft: "11rem",
        // alignItems: "center",
        marginBottom: "6rem",
    },
}));

const rubberEffect= keyframes`
    0% {
    transform: scale3d(1, 1, 1);
    }
    20% {
    transform: scale3d(1.15, 0.85, 1);
    }
    40% {
    transform: scale3d(0.95, 1, 1);
    }
    60% {
    transform: scale3d(1.05, 0.95, 1);
    }
    80% {
    transform: scale3d(0.9, 1.05, 1);
    }
    100% {
    transform: scale3d(1, 1, 1);
    }
`;

 export const TitleWord = styled("h1")(({clr}) => ({
    fontSize: "5.5rem",
    lineHeight: 1.2,
    width: "fit",
    color: "#faf0f0",
    width: "60%",
    
    "@media (max-width: 900px)": {
        fontSize: "5rem",
        left: "2rem",
        // align: "center",
        width: "100%"
    },
    "@media (max-width: 500px)": {
        fontSize: "3.20rem",
    },
    "&:hover": {
        color: clr,
        animation: `${rubberEffect} 0.5s ease-in-out forwards`,
      },
}));
