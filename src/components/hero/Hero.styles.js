import { styled } from "@mui/material";
import { keyframes } from "@emotion/react";
import myImage from "../../images/my-img.png";

export const HeroWrapper = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100vh",
  backgroundColor: "black",
  position: "relative",
  "@media (max-width: 900px)": {
    height: "auto",
    padding: "11rem 0",
  },
}));

export const SectionContainer = styled("div")(() => ({
  maxWidth: "107rem",
  margin: "0 auto",
  padding: "0 4rem",
  "@media (max-width: 460px)": {
    gridTemplateColumns: "1fr",
    padding: "0 1.7rem",
  },
}));

export const SectionContent = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "65rem",
  gap: "10rem",
  position: "relative",
  "@media (max-width: 900px)": {
    flexDirection: "column",
    textAlign: "center",
    height: "auto",
    gap: "3rem",
  },
  "@media (min-width: 1600px)": {
    marginTop: "6rem",
  },
  "@media (min-width: 1900px)": {
    marginTop: "10rem",
  },
}));

export const HeroMain = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10rem",
  position: "relative",
  "@media (max-width: 900px)": {
    flexDirection: "column-reverse",
    textAlign: "center",
    height: "auto",
    gap: "3rem",
  },
}));

export const HeroText = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "50rem",
  position: "relative",
  opacity: 0,
  transform: "translateX(-100%)",
  transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
}));

export const HeroTextH1 = styled("h1")(() => ({
  fontSize: "5.5rem",
  lineHeight: 1.2,
  color: "#faf0f0",
  marginBottom: "5rem",
  marginTop: "2rem",
  "@media (max-width: 500px)": {
    fontSize: "3.20rem",
    marginBottom: "5rem",
  },
}));

export const HeroTextP = styled("p")(() => ({
  fontSize: "1.8rem",
  fontWeight: 500,
  color: "#828782",
  fontFamily: "Mulish, sans-serif",
  lineHeight: 1.6,
  "@media (max-width: 1100px)": {
    marginBottom: "5rem",
    fontSize: "1.5rem",
  },
  "@media (max-width: 900px)": {
    marginBottom: "5rem",
  },
}));

export const HeroTextSpan = styled("span")(() => ({
  display: "flex",
  gap: "1.3rem",
  margin: "2.5rem 0",
  cursor: "pointer",
  "@media (max-width: 900px)": {
    justifyContent: "center",
    marginTop: "-2rem",
    marginBottom: "4rem",
    gap: "1.6rem",
  },
}));

export const HeroTextSpanA = styled("a")(() => ({
  fontSize: "3rem",
  color: "#828782",
}));

export const HeroTextSpanI = styled("i")(({name}) => ({
  transition: "all 0.2s",
  color: name === "blue" ? 
                      "#147efb" : 
                      name === "red" ? 
                      "#d40606" 
                      : name === "yellow" ? 
                      "#f0ed43" : "#06b817",
  ":hover": {
    transform: "scale(1.2)",
    transition: "all 0.2s ease-in-out",
  },
}));

export const HeroTextSpanImg = styled("img")(() => ({
  position: "absolute",
  width: "5rem",
  height: "5rem",
  top: "16rem",
  right: "20rem",
  "@media (max-width: 900px)": {
    right: "19rem",
    top: "22rem"
  },
  "@media (max-width: 500px)": {
    top: "9.5rem",
    right: "15rem",
    width: "4.5rem",
    height: "4.5rem",
  },
  "@media (max-width: 400px)": {
    right: "15rem",
    top: "10rem",
  },
  "@media (max-width: 380px)": {
    right: "15rem",
    top: "10rem"
  },
  "@media (max-width: 370px)": {
    right: "14rem",
    top: "13.5rem",
  },
}));

const morphAnimation = keyframes({
  "0%": {
    borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
  },
  "50%": {
    borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
  },
  "100%": {
    borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
  },
});

const moveUpAnimation = keyframes`
  0% {
    transform: translateY(100%);
  }
  50% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0%);
  }
  animation-fill-mode: forwards; // Add this line
`;

export const HeroImage = styled("div")(() => ({
  backgroundImage: `url(${myImage})`,
  width: "35rem",
  height: "35rem",
  backgroundSize: "cover",
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
  border: "3px solid white",
  animation: `${morphAnimation} 8s ease-in-out infinite, ${moveUpAnimation} 1.5s ease-in-out forwards`,
  borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
  position: "relative",
  transition: "all 1s ease-in-out",
  transform: "translateY(100%)", 
  animationFillMode: "forwards",
  "@media (max-width: 500px)": {
    width: "28rem",
    height: "28rem",
  },
}));

export const Skills = styled("div")(() => ({
  display: "flex",
  fontSize: "1.7rem",
  color: "#767676",
  alignItems: "center",
  position: "absolute",
  bottom: 0,
  left: 0,
  opacity: 0,
  transform: "translateX(-100%)",
  transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
  "@media (max-width: 900px)": {
    position: "initial",
    flexDirection: "column",
  },
}));

export const SkillsP = styled("p")(() => ({
  marginRight: "2rem",
  paddingRight: "1rem",
  borderRight: "2px solid #828782",
  fontFamily: ["Mulish", "sans-serif"],
  fontWeight: 600,
  color: "#828782",
  "@media (max-width: 900px)": {
    marginRight: 0,
    marginBottom: "3rem",
    borderBottom: "2px solid rgba(45, 46, 50, 0.5)",
    borderRight: "none",
    paddingRight: 0,
    paddingBottom: "1rem",
  },
}));

export const SkillsUl = styled("ul")(() => ({
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
  gap: "2.5rem",
  "@media (max-width: 900px)": {
    justifyContent: "center",
  },
}));

export const SkillsUlLi = styled("li")(() => ({
  width: "6.5rem",
  height: "6.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: "white",
}));

export const SkillsUlLiImg = styled("img")(() => ({
  width: "3.4rem",
  height: "3.4rem",
}));
