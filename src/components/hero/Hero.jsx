import { useEffect } from "react";

import { HiGif } from "../../images";
import Html from "../../images/icons/html.svg";
import Css from "../../images/icons/css3.svg";
import Js from "../../images/icons/javascript.svg";
import React from "../../images/icons/react.svg";
import Cpp from "../../images/icons/cpp.svg";
import Firebase from "../../images/icons/firebase.svg";
import Java from "../../images/icons/java.svg";
import Python from "../../images/icons/python.svg";
import MySql from "../../images/icons/mysql.svg";

import Stars from "../../images/star2.jpg";
// import Stars from "../../images/stars.jpg";
import {
  HeroWrapper,
  SectionContainer,
  SectionContent,
  HeroMain,
  HeroText,
  HeroTextH1,
  HeroTextSpanImg,
  HeroTextP,
  HeroTextSpan,
  HeroTextSpanA,
  HeroTextSpanI,
  HeroImage,
  Skills,
  SkillsP,
  SkillsUl,
  SkillsUlLi,
  SkillsUlLiImg,
} from "./Hero.styles";

export const Hero = () => {
  const skillsIcons = [
    {
      img: Cpp,
      title: "C++",
    },
    {
      img: React,
      title: "React",
    },
    {
      img: Html,
      title: "HTML5",
    },
    {
      img: Css,
      title: "CSS3",
    },
    {
      img: Js,
      title: "Java Script",
    },
    {
      img: Firebase,
      title: "Firebase",
    },
    {
      img: MySql,
      title: "MySql",
    },
    {
      img: Java,
      title: "Java",
    },
    {
      img: Python,
      title: "Python",
    },
    
  ];

  useEffect(() => {
    const heroImage = document.getElementById("hero-image");
    const heroText = document.getElementById("hero-text");
    const skills = document.getElementById("skills");

    if (heroImage && heroText && skills) {
      setTimeout(() => {
        heroText.style.opacity = "1";
        heroText.style.transform = "translateX(0%)";
        skills.style.opacity = "1";
        skills.style.transform = "translateX(0%)";
      }, 1000);
    }
  }, []);


  return (
    <HeroWrapper id="home" style={{
      backgroundImage: `url(${Stars})`,
      backgroundAttachment: "fixed",
      backgroundSize: "fill",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
      <SectionContainer>
        <SectionContent>
          <HeroMain>
            <HeroText id="hero-text">
            <HeroTextH1>Computer Engineering Student</HeroTextH1>
            <HeroTextSpanImg src={HiGif} alt="waving_hand" />
              <HeroTextP>
                Hi, I'm Aswin Shailajan, a final year computer science engineering 
                student @VIT 👨🏻‍🎓 | SWE Intern @OpenGenus Foundation | Contributor @Hyperledger, 
                Linux Foundation | Open Source Contributor | MLH Hackathon Winner | 
                Active on LeetCode | Technical Writer
              </HeroTextP>
              <HeroTextSpan>
                <HeroTextSpanA
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/aswin-shailajan/"
                >
                  <HeroTextSpanI className="fa-brands fa-linkedin" name={"blue"}></HeroTextSpanI>
                </HeroTextSpanA>
                <HeroTextSpanA
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/aswin2108"
                >
                  <HeroTextSpanI className="fa-brands fa-github" name={"red"}></HeroTextSpanI>
                </HeroTextSpanA>
                <HeroTextSpanA
                  aria-label="email"
                  rel="noreferrer"
                  target="_blank"
                  href="mailto:aswins2108@gmail.com"
                >
                  <HeroTextSpanI className="fas fa-envelope" name={"yellow"}></HeroTextSpanI>
                </HeroTextSpanA>
                <HeroTextSpanA
                  aria-label="articles"
                  rel="noreferrer"
                  target="_blank"
                  href="https://iq.opengenus.org/author/aswin-shailajan/"
                >
                  <HeroTextSpanI className="fas fa-newspaper" name={"blue"}></HeroTextSpanI>
                </HeroTextSpanA>
                <HeroTextSpanA
                  aria-label="resume"
                  rel="noreferrer"
                  target="_blank"
                  href="https://drive.google.com/file/d/1YpWiUwnvDSR9s5WlgOhpw4sbEFcLwg8w/view?usp=sharing"
                >
                  <HeroTextSpanI className="fa-solid fa-file-alt" name={"green"}></HeroTextSpanI>
                </HeroTextSpanA>
                <HeroTextSpanA
                  aria-label="Coding"
                  rel="noreferrer"
                  target="_blank"
                  href="https://leetcode.com/aswins2108/"
                >
                  <HeroTextSpanI className="fas fa-code" name={"red"}></HeroTextSpanI>
                </HeroTextSpanA>
              </HeroTextSpan>
            </HeroText>

            <HeroImage id="hero-image"></HeroImage>
          </HeroMain>

          {/*  */}
          <Skills id="skills">
            <SkillsP>Tech Stack</SkillsP>
            <div className="logos">
              <SkillsUl>
                {skillsIcons.map((icon) => (
                  <SkillsUlLi key={icon.title}>
                    <SkillsUlLiImg
                      src={icon.img}
                      title={icon.title}
                      alt="skill-icon"
                    />
                  </SkillsUlLi>
                ))}
              </SkillsUl>
            </div>
          </Skills>
        </SectionContent>
      </SectionContainer>
    </HeroWrapper>
  );
};
