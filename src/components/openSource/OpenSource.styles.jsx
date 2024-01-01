import { styled } from "@mui/material";

export const OpenSource = styled("div")(()=>({
    maxWidth: "100%",
  "@media (max-width: 460px)": {
    padding: "0 1.7rem",
    width: "100%",
  },

}));

export const OpensourceTitle = styled("h3")(()=>({
    width: "100%",
    fontSize: "3.5rem",
    fontWeight: "bold",
    color: "white",
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