import { styled } from "@mui/material";
import { fontSize } from "@mui/system";

export const ExperienceSection = styled("section")(()=>({
    backgroundColor: "black",
    padding: "2rem 0",
    width: "100%",
    height: "130vh",
    "@media (max-width: 720px)": {
        height: "190vh",
      },
}));

export const ExperienceContainer = styled("div")(()=>({
    maxWidth: "100%",
  "@media (max-width: 460px)": {
    padding: "0 1.7rem",
    width: "100%",
  },

}));

export const ExperienceP = styled ("h2")(()=>({
    fontSize: "5rem",
    width: "100%",
    textAlign: "center",
    marginTop: "6rem",
    color: "white",
}));

export const StarGif = styled ("img")(()=>({
  width: "100px",
  marginBottom: "-1.5rem"
}));

export const ExperienceContent = styled("div")(()=>({
    maxWidth: "106rem",
  padding: "0 4rem",
  display: "column", 
  margin: "0 auto",
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

export const ExperienceTile = styled("div")(()=>({
    display: "flex",
    width: "100%",
    height: "auto",
    margin: "2rem",
    borderRadius: "8px",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)", 
    position: "relative",
    "&:hover": {
      transform: "translateY(-10px)",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "8px",
      pointerEvents: "none",
      transition: "opacity 0.3s ease",
      opacity: 0,
    },
    "&:hover::before": {
      opacity: 1,
    },
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
    "@media (max-width: 400px)": {
      margin: "0",
    },
}));

export const ExperienceImg = styled("img")(()=>({
    height: "100%", 
    width: "30rem",
    borderRadius: "100px",
    padding: "1rem",
    objectFit: "cover",
    alignSelf: "center",
    "@media (max-width: 900px)":{
        maxHeight: "15rem"
    },
}));
export const ExperienceDetails = styled("div")(()=>({
    maxWidth: "60%",
    "@media (max-width: 900px)":{
      maxWidth: "100%",
    },
}));
export const ExperienceOrg = styled("div")(()=>({
    fontSize: "3rem",
    width: "100%",
    fontWeight: "bold",
    textAlign: "center",
    color: "#edf2ef",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    marginBottom: "1rem", 
    "@media (max-width: 900px)":{
        fontSize: "1.8rem",
        width: "100%",
    },
}));

export const ExperienceRole = styled("div")(()=>({
    fontSize: "2rem",
    fontWeight: "lighter",
    color: "white",
    paddingLeft: "1rem",
}))
export const ExperienceDes = styled("div")(()=>({
    fontSize: "1.6rem",
  margin: "1rem",
  color: "#8e918f",
  textAlign: "left",

  "@media (max-width: 900px)":{
    fontSize: "1.5rem",
    width: "100%",
  },
}));
export const ExperienceSkill = styled("div")(()=>({
    display: "flex",
}));
export const SkillTag = styled("div")(()=>({
    width: "auto",
    height: "2rem",
    display: "flex",
    justifyContent: "center",
    padding: "0.25rem",
    margin: "0.5rem",
    color: "white",
    fontSize: "1.25rem",
}));

export const OpensourceTitle = styled("h3")(()=>({
    width: "100%",
    fontSize: "3.5rem",
    fontWeight: "bold",
    color: "white",
    marginTop: "7rem",
    textAlign: "center",
    paddingBottom: "3rem",
    "@media (max-width: 500px)": {
        fontSize: "3rem",
      },
}));

export const ContributionUL = styled("ul")(()=>({
    listStyle: "none",
    display: "grid",
    justifyContent: "center",
    flexWrap: "wrap",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "2.5rem",
    "@media (max-width: 900px)": {
        justifyContent: "center",
    },
    "@media (max-width: 720px)": {
        gridTemplateColumns: "repeat(3, 1fr)",
      },
    "@media (max-width: 500px)": {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
    
}));

export const ContriUlLi = styled("li")(({bgcolour})=>({
    width: "6.5rem",
    height: "6.5rem",
    display: "flex",
    
    marginLeft: "25%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "2rem",
    backgroundColor: "black",
    boxShadow: "0px 0px 20px white",
    transition: "box-shadow 0.3s ease",
    "&:hover": {
        boxShadow: `0px 0px 45px ${bgcolour}`,
    },
}));

export const ContriImg = styled("img")(()=>({
    width: "6rem",
    height: "6rem",
    borderRadius: "2rem",
    display: "block",
    margin: "auto",
    "@media (max-width: 450px)": {
        width: "6rem",
        height: "6rem",
      },
}));