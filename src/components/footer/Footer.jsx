import { useState } from "react";
import { FaLinkedin, FaGithub, FaRocket, FaFileArrowDown } from "react-icons/fa6";
import { SiGmail, SiLeetcode } from "react-icons/si";
import { MdArticle } from "react-icons/md";

import {
  FooterWrapper,
  FooterInner,
  FooterTop,
  FooterBrand,
  FooterName,
  FooterTagline,
  FooterCol,
  FooterColTitle,
  FooterLink,
  FooterSocials,
  FooterSocialIcon,
  BackToTop,
  BackToTopIcon,
  FooterDivider,
  FooterBottom,
  FooterStarCta,
} from "./Footer.styles";

export const Footer = () => {
  const [launching, setLaunching] = useState(false);

  const scrollTop = () => {
    setLaunching(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setLaunching(false), 800);
  };

  const socials = [
    { label: "linkedin", href: "https://www.linkedin.com/in/aswin-shailajan/", Icon: FaLinkedin, color: "#4285F4" },
    { label: "github", href: "https://github.com/aswin2108", Icon: FaGithub, color: "#ffffff" },
    { label: "email", href: "mailto:aswins2108@gmail.com", Icon: SiGmail, color: "#F4B400" },
    { label: "articles", href: "https://iq.opengenus.org/author/aswin-shailajan/", Icon: MdArticle, color: "#4dd0e1" },
    { label: "leetcode", href: "https://leetcode.com/aswins2108/", Icon: SiLeetcode, color: "#f0a422" },
    { label: "resume", href: "https://drive.google.com/file/d/1jgLz2W4Jns7uZK-p0zth7EK7TCBKUcdK/view?usp=sharing", Icon: FaFileArrowDown, color: "#0F9D58" },
  ];

  return (
    <FooterWrapper>
      <FooterInner>
        <FooterTop>
          <FooterBrand>
            <FooterName>Aswin Shailajan</FooterName>
            <FooterTagline>
              Software Development Engineer — building cool things across the stack. ✦
            </FooterTagline>
            <FooterStarCta>
              Found this cool? Drop a 🌟 on{" "}
              <a
                href="https://github.com/aswin2108/Portfolio"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </FooterStarCta>
          </FooterBrand>

          <FooterCol>
            <FooterColTitle>Explore</FooterColTitle>
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#experience">Experience</FooterLink>
            <FooterLink href="#projects">Projects</FooterLink>
          </FooterCol>

          <FooterCol>
            <FooterColTitle>Connect</FooterColTitle>
            <FooterSocials>
              {socials.map((s) => (
                <a
                  key={s.label}
                  aria-label={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FooterSocialIcon style={{ "--sc": s.color }}>
                    <s.Icon />
                  </FooterSocialIcon>
                </a>
              ))}
            </FooterSocials>
            <BackToTop onClick={scrollTop} aria-label="Back to top">
              <BackToTopIcon className={launching ? "launching" : ""}>
                <FaRocket />
              </BackToTopIcon>
              Back to top
            </BackToTop>
          </FooterCol>
        </FooterTop>

        <FooterDivider />

        <FooterBottom>
          <span>© {new Date().getFullYear()} Aswin Shailajan</span>
          <span>Built with React · styled-components · framer-motion</span>
        </FooterBottom>
      </FooterInner>
    </FooterWrapper>
  );
};
