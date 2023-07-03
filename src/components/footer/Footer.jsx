import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  FooterWrapper,
  FooterText,
  SectionContainer,
  FooterRc,
  FooterRcSocials,
  FooterRcSocialIcon,
} from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterWrapper>
      <SectionContainer>
        <FooterRc>
          <FooterText>
            Copyright © {new Date().getFullYear()}. All rights are reserved
          </FooterText>
          <FooterRcSocials>
            <a
              aria-label="linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com"
            >
              <FooterRcSocialIcon>
                <FaLinkedin />
              </FooterRcSocialIcon>
            </a>
            <a
              aria-label="github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/"
            >
              <FooterRcSocialIcon>
                <FaGithub />
              </FooterRcSocialIcon>
            </a>
          </FooterRcSocials>
        </FooterRc>
      </SectionContainer>
    </FooterWrapper>
  );
};
