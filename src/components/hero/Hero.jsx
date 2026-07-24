import { useEffect, useRef } from "react";

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
  RevealBlob,
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

  const imageRef = useRef(null);
  const blobRef = useRef(null);

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

  // Cursor-following liquid reveal blob (x-ray window into DP2 behind the hero image).
  useEffect(() => {
    const container = imageRef.current;
    const blob = blobRef.current;
    if (!container || !blob) return;

    let hovering = false;
    let rafId = null;
    // Smoothed (rendered) position vs. the raw target position under the cursor.
    let cur = { x: 0, y: 0 };
    let target = { x: 0, y: 0 };

    // Keep DP2 aligned to the container so the blob reads as a porthole
    // into a full image sitting perfectly behind the hero image.
    const syncBackdrop = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      blob.style.backgroundSize = `${w}px ${h}px`;
      blob.style.backgroundPosition = `${-cur.x + blob.offsetWidth / 2}px ${
        -cur.y + blob.offsetHeight / 2
      }px`;
    };

    const render = () => {
      // Lerp toward the target for a smooth, weighty, liquid follow.
      cur.x += (target.x - cur.x) * 0.18;
      cur.y += (target.y - cur.y) * 0.18;
      blob.style.left = `${cur.x}px`;
      blob.style.top = `${cur.y}px`;
      syncBackdrop();
      rafId = requestAnimationFrame(render);
    };

    const start = () => {
      if (rafId == null) rafId = requestAnimationFrame(render);
    };
    const stop = () => {
      if (rafId != null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const onEnter = (e) => {
      hovering = true;
      const rect = container.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
      // Appear right under the cursor instead of sliding in from elsewhere.
      cur.x = target.x;
      cur.y = target.y;
      blob.classList.add("is-active");
      // Fade out the rocket cursor so the reveal isn't obstructed.
      document.body.classList.add("hero-reveal-active");
      start();
    };

    const onMove = (e) => {
      if (!hovering) return;
      const rect = container.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
    };

    const onLeave = () => {
      hovering = false;
      blob.classList.remove("is-active");
      // Bring the rocket cursor back once the pointer leaves the portrait.
      document.body.classList.remove("hero-reveal-active");
      // Let the fade-out finish before halting the animation loop.
      setTimeout(stop, 500);
    };

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
      document.body.classList.remove("hero-reveal-active");
      stop();
    };
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

            {/* Off-screen filter that carves living amoeba lobes into the
                reveal blob's edge. feTurbulence generates organic noise and
                feDisplacementMap pushes the blob's outline along it; the
                animated baseFrequency keeps the pseudopods slowly writhing. */}
            <svg
              width="0"
              height="0"
              aria-hidden="true"
              style={{ position: "absolute", pointerEvents: "none" }}
            >
              <defs>
                <filter
                  id="amoeba-edge"
                  x="-40%"
                  y="-40%"
                  width="180%"
                  height="180%"
                >
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.012 0.015"
                    numOctaves="2"
                    seed="7"
                    result="noise"
                  >
                    <animate
                      attributeName="baseFrequency"
                      dur="16s"
                      values="0.010 0.014;0.020 0.009;0.011 0.018;0.016 0.012;0.010 0.014"
                      repeatCount="indefinite"
                      calcMode="spline"
                      keyTimes="0;0.25;0.5;0.75;1"
                      keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1"
                    />
                  </feTurbulence>
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="34"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </filter>
              </defs>
            </svg>

            <HeroImage id="hero-image" ref={imageRef}>
              <RevealBlob ref={blobRef} />
            </HeroImage>
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
