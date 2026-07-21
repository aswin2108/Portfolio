import React from "react";

import { HeroText, TitleWord } from "./heroTitle.styles";



export const HeroTitleText = () => {
    const titleWords = [
        {
        id: 1,
        word: "Software",
        clr: "#DB4437",
        },
        {
        id: 2,
        word: "Development",
        clr: "#F4B400",
        },
        {
        id: 3,
        word: "Engineer",
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