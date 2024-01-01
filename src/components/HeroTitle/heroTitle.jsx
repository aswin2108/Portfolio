import React from "react";
import { motion } from "framer-motion";

import { HeroText, TitleWord } from "./heroTitle.styles";



export const HeroTitleText = () => {
    const titleWords = [
        {
        id: 1,
        word: "Computer",
        clr: "#DB4437",
        },
        {
        id: 2,
        word: "Engineering",
        clr: "#F4B400",
        },
        {
        id: 3,
        word: "Student",
        clr: "#0F9D58",
        },
    ];

    return(
        <HeroText>
            {titleWords.map((title)=>(
               
                <TitleWord key={title.id} clr={title.clr}>
                    {title.word}
                </TitleWord>
            ))}
        </HeroText>
    );
}