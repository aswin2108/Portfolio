import { styled } from "@mui/material";

export const FooterWrapper = styled("footer")(() => ({
  backgroundColor: "#2d2e32",
  padding: "5rem 0",
  width: "100%",
}));

export const FooterText = styled("h3")(() => ({
  fontSize: "1.7rem",
  color: "white",
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

export const FooterRc = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width: 550px)": {
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
    textAlign: "center",
  },
}));

export const FooterRcSocials = styled("div")(() => ({
  display: "flex",
  gap: "2rem",
}));

export const FooterRcSocialIcon = styled("div")(() => ({
  fontSize: "2.3rem",
  color: "white",
  "&:hover": {
    transform: "scale(1.2)",
    transition: "all 0.2s ease-in-out",
  },
}));
