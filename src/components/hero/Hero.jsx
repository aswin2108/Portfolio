import { useEffect } from "react";

import { HeroTitleText } from "../HeroTitle/heroTitle";

import { HiGif } from "../../images/index";
import {
  SiGo,
  SiCplusplus,
  SiCsharp,
  SiDotnet,
  SiTypescript,
  SiJavascript,
  SiDart,
  SiAngular,
  SiReact,
  SiFlutter,
  SiFirebase,
  SiHtml5,
} from "react-icons/si";

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
  HeroImage,
  Skills,
  SkillsP,
  SkillsUl,
  SkillsUlLi,
  IconLinkden,
  IconGithub,
  IconMail,
  IconArticle,
  IconFile,
  IconCode,
} from "./Hero.styles";

export const Hero = () => {
  const skillsIcons = [
    { Icon: SiGo, title: "Go (Golang)", color: "#00ADD8" },
    { Icon: SiCplusplus, title: "C++", color: "#00599C" },
    { Icon: SiCsharp, title: "C#", color: "#239120" },
    { Icon: SiDotnet, title: ".NET", color: "#512BD4" },
    { Icon: SiTypescript, title: "TypeScript", color: "#3178C6" },
    { Icon: SiJavascript, title: "JavaScript", color: "#F7DF1E" },
    { Icon: SiDart, title: "Dart", color: "#0175C2" },
    { Icon: SiAngular, title: "Angular", color: "#DD0031" },
    { Icon: SiReact, title: "React", color: "#61DAFB" },
    { Icon: SiFlutter, title: "Flutter", color: "#02569B" },
    { Icon: SiFirebase, title: "Firebase", color: "#FFCA28" },
    { Icon: SiHtml5, title: "HTML / CSS", color: "#E34F26" },
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
    <HeroWrapper id="home">
      <SectionContainer>
        <SectionContent>
          <HeroMain>
            <HeroText id="hero-text">
            <HeroTitleText/>
            
            <HeroTextSpanImg src={HiGif} alt="waving_hand" />
              <HeroTextP>
                Hi, I'm Aswin Shailajan, a Software Development Engineer @CHUBB 👨🏻‍💻 |
                BTech CSE @VIT | Ex-SWE Intern @OpenGenus Foundation | Ex-Contributor
                @Hyperledger, Linux Foundation | Full-Stack Developer across .NET, Go,
                Angular &amp; Flutter | Open Source Contributor | MLH Hackathon Winner |
                Technical Writer
              </HeroTextP>
              <HeroTextSpan>
                <HeroTextSpanA
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/aswin-shailajan/"
                >
                 <IconLinkden/>
                </HeroTextSpanA>
                <HeroTextSpanA
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/aswin2108"
                >
                  <IconGithub/>
                </HeroTextSpanA>
                <HeroTextSpanA
                  aria-label="email"
                  rel="noreferrer"
                  target="_blank"
                  href="mailto:aswins2108@gmail.com"
                >
                  <IconMail />
                </HeroTextSpanA>
                <HeroTextSpanA
                  aria-label="articles"
                  rel="noreferrer"
                  target="_blank"
                  href="https://iq.opengenus.org/author/aswin-shailajan/"
                >
                  <IconArticle />
                </HeroTextSpanA>
                <HeroTextSpanA
                  aria-label="resume"
                  rel="noreferrer"
                  target="_blank"
                  href="https://drive.google.com/file/d/1jgLz2W4Jns7uZK-p0zth7EK7TCBKUcdK/view?usp=sharing"
                >
                  <IconFile />
                </HeroTextSpanA>
                <HeroTextSpanA
                  aria-label="Coding"
                  rel="noreferrer"
                  target="_blank"
                  href="https://leetcode.com/aswins2108/"
                >
                 <IconCode />
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
                {skillsIcons.map((icon, i) => (
                  <SkillsUlLi
                    key={icon.title}
                    title={icon.title}
                    style={{ "--glow": icon.color, animationDelay: `${(i % 6) * 0.4}s` }}
                  >
                    <icon.Icon
                      style={{ width: "3rem", height: "3rem", color: icon.color }}
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
