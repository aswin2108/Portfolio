import { styled } from "@mui/material";

export const ContactWrapper = styled("section")(() => ({
  backgroundColor: "white",
  padding: "11rem 0",
  "@media (max-width: 1020px)": {
    padding: "8rem 0",
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

export const ContactContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const ContactTitle = styled("div")(() => ({
  "@media (max-width: 750px)": {
    textAlign: "center",
  },
}));

export const ContactTitleP = styled("p")(() => ({
  color: "#147efb",
  textTransform: "uppercase",
  fontWeight: 700,
  fontSize: "1.7rem",
  marginBottom: "1rem",
}));

export const ContactTitleH3 = styled("h3")(() => ({
  color: "#2d2e32",
  fontSize: "2.5rem",
}));

export const ContactIcons = styled("div")(() => ({
  display: "flex",
  gap: "8rem",
  flexWrap: "wrap",
  marginTop: "6rem",
  "@media (max-width: 750px)": {
    flexDirection: "column",
    gap: "5rem",
    justifyContent: "center",
    textAlign: "center",
  },
}));

export const ContactIconBox = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  "@media (max-width: 750px)": {
    flexDirection: "column",
  },
}));

export const ContactIconBoxSpan = styled("span")(() => ({
  backgroundColor: "white",
  padding: "2.3rem",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "50%",
}));

export const ContactIconBoxSpanI = styled("i")(() => ({
  fontSize: "3rem",
  color: "#147efb",
}));

export const ContactInfo = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
}));

export const ContactInfoH3 = styled("h3")(() => ({
  fontSize: "1.7rem",
  color: "#2d2e32",
}));

export const ContactInfoP = styled("p")(() => ({
  fontSize: "1.7rem",
  color: "#767676",
  textDecoration: "none",
  cursor: "pointer",
  ":hover": {
    color: "#147efb",
    transition: "all 0.3s",
  },
}));

export const ContactInfoA = styled("a")(() => ({
  fontSize: "1.7rem",
  color: "#767676",
  textDecoration: "none",
  cursor: "pointer",
  ":hover": {
    color: "#147efb",
    transition: "all 0.3s",
  },
}));
