import { useState } from "react";
import {
  Nav,
  NavUl,
  NavUlA,
  NavLogo,
  MobileNavOpen,
  MobileNavClose,
  MobileNavSpan,
  MobileNavUl,
  MobileNavUla,
  MobileMenu,
} from "./Navbar.styles";

export const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const navlinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Projects",
      link: "#projects",
    },
  ];

  return (
    <>
      <Nav>
        <NavLogo onClick={pageUp}>aswin..!</NavLogo>
        <NavUl>
          {navlinks.map((item) => (
            <li key={item.name}>
              <NavUlA href={item.link}>{item.name}</NavUlA>
            </li>
          ))}
          <li onClick={() => hamburgerMenu()}>
            <MobileMenu className="fa-solid fa-bars-staggered"></MobileMenu>
          </li>
        </NavUl>
      </Nav>

      {/* mobile nav */}

      {hamburger ? (
        <MobileNavOpen>
          <MobileNavSpan onClick={() => hamburgerMenu()}>
            <i className="fa-solid fa-xmark"></i>
          </MobileNavSpan>

          <MobileNavUl>
            {navlinks.map((item) => (
              <li key={item.name} onClick={() => hamburgerMenu()}>
                <MobileNavUla href={item.link}>{item.name}</MobileNavUla>
              </li>
            ))}
          </MobileNavUl>
        </MobileNavOpen>
      ) : (
        <MobileNavClose>
          <MobileNavSpan onClick={() => hamburgerMenu()}>
            <i className="fa-solid fa-xmark"></i>
          </MobileNavSpan>

          <MobileNavUl>
            {navlinks.map((item) => (
              <li key={item.name} onClick={() => hamburgerMenu()}>
                <MobileNavUla href={item.link}>{item.name}</MobileNavUla>
              </li>
            ))}
          </MobileNavUl>
        </MobileNavClose>
      )}
    </>
  );
};