import { styled } from "@mui/material";

export const ProjectSection = styled("section")(() => ({
  backgroundColor: "black",
  padding: "2rem 0",
  width: "100%",
  height: "110vh",
  "@media (max-width: 1020px)": {
    padding: "8rem 0",
    height: "auto",
  },
}));

export const SectionContainer = styled("div")(() => ({
  maxWidth: "100%",
  "@media (max-width: 460px)": {
    padding: "0 1.7rem",
    width: "100%",
  },
}));

export const SectionContent = styled("div")(()=>({
  width: "100%",
  padding: "0 4rem",
  display: "grid", 
  alignItems: "center",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "1rem", 
  "@media (max-width: 900px)": {
    display: "flex",
    flexDirection: "column",
  },
  "@media (max-width: 400px)": {
    padding: "0",
  },
}));

export const ProjectP = styled("h1")(()=>({
  fontSize: "4rem",
  textAlign: "center",
  color: "white",
  marginTop: "6rem",
  "@media (max-width: 900px)":{
    fontSize: "3.5rem",
  },
  "@media (max-width: 400px)":{
    fontSize: "3.5rem",
    marginTop: "2rem",
    marginBottom: "1rem",
  },
}));

export const ProjectTile = styled("div")(() => ({
  display: "flex",
  width: "auto",
  height: "auto",
  margin: "1rem",
  borderRadius: "8px",
  // backgroundColor: "black",
  transition: "background-color 0.3s ease, transform 0.3s ease",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)", 
  position: "relative",
  "&:hover": {
    transform: "translateY(-10px)",
  },
  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    pointerEvents: "none",
    transition: "opacity 0.3s ease",
    opacity: 0,
  },
  "&:hover::before": {
    opacity: 1,
  },
  "@media (max-width: 1100px)": {
    display: "flex",
    flexDirection: "column",
    margin: "1rem",
  },
  "@media (max-width: 400px)": {
    margin: "0",
  },
}));
export const ProjectDetails = styled("div")(()=>({
  maxWidth: "50%",
  height: "auto",
  overflow: "hidden",
  "@media (max-width: 1100px)":{
    maxWidth: "100%",
  },
}))

export const ProjectTitle = styled("h2")(() => ({
  fontSize: "2rem",
  textAlign: "center",
  color: "#edf2ef",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  marginBottom: "1rem", 
  "@media (max-width: 1250px)":{
    fontSize: "1.8rem",
    width: "100%",
  },
  
}));

export const ProjectAbout = styled("p")(() => ({
  fontSize: "1.6rem",
  color: "#8e918f",
  textAlign: "left",
  "@media (max-width: 1100px)":{
    fontSize: "1.5rem",
    width: "100%",
  },
}));


export const ProjectImg = styled("img")(() => ({
  maxHeight: "18rem",
  height: "100%", 
  borderRadius: "20px",
  padding: "1rem",
  objectFit: "cover",
  alignSelf: "center",
  "@media (max-width: 1100px)":{
    maxHeight: "15rem"
  },
}));

export const ProjectLinks = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const ProjectLink = styled("a")(() => ({
  fontSize: "1.4rem",
  margin: "0.5rem",
  color: "black",
  background: "white",
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  textDecoration: "none",
  "&:hover": {
    background: "#f1f1f1",
  },
}));
