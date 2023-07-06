import { styled } from "@mui/material";

export const Nav = styled("nav")(() => ({
  alignItems: "center",
  backgroundColor: "black",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.09)",
  display: "flex",
  fontSize: "1.7rem",
  height: "auto",
  justifyContent: "space-between",
  left: 0,
  padding: "25px 40px 25px 50px",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 200,
  "@media (max-width: 400px)": {
    padding: "25px 30px 25px 30px",
  },
}));

export const NavLogo = styled("h3")(() => ({
  cursor: "pointer",
  fontFamily: "Caprasimo, cursive",
  fontSize: "25px",
  color: "white",
}));

export const NavUl = styled("ul")(() => ({
  display: "flex",
  listStyle: "none",
  gap: "2rem",
}));

export const NavUlA = styled("a")(() => ({
  color: "white",
  textDecoration: "none",
  transition: "all 0.23s",
  fontWeight: 600,
  "@media (max-width: 900px)": {
    display: "none",
  },
  ":hover": { color: "#147efb" },
}));

export const MobileMenu = styled("i")(() => ({
  cursor: "pointer",
  display: "none",
  fontSize: "2.3rem",
  color: "white",
  "@media (max-width: 900px)": {
    display: "flex",
  },
  ":hover": { color: "#147efb", transition: "all .3s" },
}));

export const MobileNavOpen = styled("div")(() => ({
  alignItems: "center",
  backgroundColor: "black",
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  left: "0 !important",
  position: "fixed",
  textAlign: "center",
  top: 0,
  transition: "all .3s ease-in-out",
  width: "100%",
  zIndex: 300,
}));

export const MobileNavClose = styled("div")(() => ({
  alignItems: "center",
  backgroundColor: "#fff",
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  left: "-100% !important",
  position: "fixed",
  textAlign: "center",
  top: 0,
  transition: "all .3s ease-in-out",
  width: "100%",
  zIndex: 300,
}));

export const MobileNavSpan = styled("span")(() => ({
  cursor: "pointer",
  fontSize: "3.3rem",
  position: "absolute",
  right: "4rem",
  top: "2rem",
  color: "white",
  ":hover": {
    transition: "all .3s",
  },
}));

export const MobileNavUl = styled("ul")(() => ({
  display: "flex",
  flexDirection: "column",
  fontSize: "2.3rem",
  gap: "4rem",
  listStyle: "none",
}));

export const MobileNavUla = styled("a")(() => ({
  color: "#000",
  fontWeight: 500,
  textDecoration: "none",
  color: "white",
  ":hover": {
    transition: "all .3s",
  },
}));
