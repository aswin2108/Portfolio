import { styled } from "@mui/material";
import { keyframes } from "@emotion/react";

const launch = keyframes`
  0% { transform: translateY(0) rotate(-45deg); }
  50% { transform: translateY(-6px) rotate(-45deg); }
  100% { transform: translateY(0) rotate(-45deg); }
`;

const launchUp = keyframes`
  0% { transform: translateY(0) rotate(-45deg); opacity: 1; }
  55% { opacity: 1; }
  100% { transform: translateY(-90px) rotate(-45deg); opacity: 0; }
`;

const shimmer = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

export const FooterWrapper = styled("footer")(() => ({
  position: "relative",
  width: "100%",
  padding: "5rem 0 3rem",
  background:
    "linear-gradient(180deg, rgba(5,6,10,0) 0%, rgba(8,10,18,0.85) 22%, #06070c 100%)",
  overflow: "hidden",
}));

export const FooterInner = styled("div")(() => ({
  maxWidth: "110rem",
  margin: "0 auto",
  padding: "0 4rem",
  position: "relative",
  zIndex: 1,
  "@media (max-width: 460px)": {
    padding: "0 2rem",
  },
}));

export const FooterTop = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "4rem",
  flexWrap: "wrap",
}));

export const FooterBrand = styled("div")(() => ({
  maxWidth: "38rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
}));

export const FooterName = styled("h3")(() => ({
  fontFamily: "Caprasimo, cursive",
  fontSize: "2.8rem",
  background: "linear-gradient(90deg, #58a6ff, #a371f7, #f778ba, #58a6ff)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: `${shimmer} 6s linear infinite`,
}));

export const FooterTagline = styled("p")(() => ({
  fontSize: "1.5rem",
  lineHeight: 1.6,
  color: "#9aa0a6",
  fontFamily: "Mulish, sans-serif",
}));

export const FooterStarCta = styled("p")(() => ({
  fontSize: "1.4rem",
  color: "#c9ced6",
  fontFamily: "Mulish, sans-serif",
  "& a": {
    color: "#58a6ff",
    fontWeight: 700,
    textDecoration: "none",
    "&:hover": { textDecoration: "underline" },
  },
}));

export const FooterCol = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
}));

export const FooterColTitle = styled("h4")(() => ({
  fontSize: "1.6rem",
  color: "#ffffff",
  fontWeight: 700,
  marginBottom: "0.4rem",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
}));

export const FooterLink = styled("a")(() => ({
  fontSize: "1.5rem",
  color: "#9aa0a6",
  textDecoration: "none",
  fontFamily: "Mulish, sans-serif",
  width: "fit-content",
  transition: "color 0.2s ease, transform 0.2s ease",
  "&:hover": {
    color: "#58a6ff",
    transform: "translateX(4px)",
  },
}));

export const FooterSocials = styled("div")(() => ({
  display: "flex",
  gap: "1.4rem",
  flexWrap: "wrap",
}));

export const FooterSocialIcon = styled("div")(() => ({
  fontSize: "2.2rem",
  color: "#c9ced6",
  display: "flex",
  transition: "color 0.25s ease, transform 0.25s ease, filter 0.25s ease",
  "&:hover": {
    color: "var(--sc, #58a6ff)",
    transform: "translateY(-4px) scale(1.15)",
    filter: "drop-shadow(0 0 8px var(--sc, #58a6ff))",
  },
}));

export const BackToTop = styled("button")(() => ({
  marginTop: "1rem",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.9rem",
  padding: "0.8rem 1.6rem",
  fontSize: "1.4rem",
  fontWeight: 600,
  color: "#e6edf3",
  fontFamily: "Poppins, sans-serif",
  background: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  borderRadius: "999px",
  cursor: "pointer",
  width: "fit-content",
  transition: "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
  "&:hover": {
    background: "rgba(88, 166, 255, 0.12)",
    borderColor: "rgba(88, 166, 255, 0.5)",
    boxShadow: "0 0 18px rgba(88, 166, 255, 0.3)",
  },
}));

export const BackToTopIcon = styled("span")(() => ({
  display: "inline-flex",
  fontSize: "1.6rem",
  color: "#58a6ff",
  transform: "rotate(-45deg)",
  "button:hover &": {
    animation: `${launch} 0.6s ease-in-out infinite`,
    color: "#f778ba",
  },
  "&.launching": {
    animation: `${launchUp} 0.75s ease-in forwards !important`,
    color: "#f778ba",
  },
}));

export const FooterDivider = styled("div")(() => ({
  height: "1px",
  margin: "3.5rem 0 2rem",
  background:
    "linear-gradient(90deg, transparent, rgba(88,166,255,0.5), rgba(163,113,247,0.5), transparent)",
}));

export const FooterBottom = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "wrap",
  fontSize: "1.3rem",
  color: "#6e7681",
  fontFamily: "Mulish, sans-serif",
}));
